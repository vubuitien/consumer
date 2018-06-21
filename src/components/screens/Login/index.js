import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  AsyncStorage,
  Alert
} from 'react-native';
import { Mutation } from 'react-apollo';
import { styles } from './styles';
import {
  ButtonSignin,
  ButtonLogin,
  TextPassword,
  TextHeader
} from '../../shared';
import loginMutation from './mutations';
import FooterLogin from './FooterLogin';
import I18n from '../../../I18n';
import {
  tcombForm
} from '../../higher_order';
import fields from './fields';

@tcombForm(fields)
class Login extends Component {
  static navigationOptions = { title: 'Login', header: null };
  constructor(props) {
    super(props);
    this.onSignupPress = this.onSignupPress.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  async onLogin(values, context) {
    await context.loginMutation({ variables: { email: values.email, password: values.password } })
    .then(async result => {
      await Promise.all([
        AsyncStorage.setItem('token', result.data.loginMerchant.token),
        this.props.showOverlaySuccess()
      ]).then(() => {
        this.props.navigation.navigate('Offer');
      });
    }).catch(() => {
      this.props.hideOverlay();
      setTimeout(() => {
        Alert.alert('Notice', I18n.t('login.merchant_invalid'));
      }, 20);
    });
  }

  onSignupPress() {
    this.props.navigation.navigate('FirstStep');
  }

  onPress() {
    this.props.navigation.navigate('DashBoard');
  }

  renderLogin = (mutate) => {
    return (
      <View style={styles.formLogin}>
        {this.props.inputs.email}
        {this.props.inputs.password}
        <ButtonSignin
          style={styles.loginButton}
          title={I18n.t('login.title')}
          onPress={() => this.props.handleSubmit(this.onLogin, { loginMutation: mutate })}
          size={16}
        />
      </View>
    );
  }

  render() {
    return (
      <Mutation mutation={loginMutation}>
        {mutate => (
          <View style={styles.container}>
            <View style={styles.banner}>
              <Text style={styles.textBanner}>{I18n.t('login.title_banner')}</Text>
            </View>
            <ScrollView>
              <View>
                <View style={styles.loginNetwork}>
                  <TextHeader
                    titleBold={I18n.t('login.title')}
                    title={I18n.t('login.title_header')}
                    color={'#1D6ED7'} size={15}
                    sizeChild={13.5}
                  />
                  <View style={styles.buttonNetwork}>
                    <ButtonLogin
                      style={styles.buttonLoginFacebook}
                      iconName={'facebook'} iconSize={20}
                      iconColor={'#fff'}
                      title={I18n.t('login.facebook')}
                      onPress={this.onPress}
                    />
                    <ButtonLogin
                      style={styles.buttonLoginGoogle}
                      iconName={'google-plus'} iconSize={20}
                      iconColor={'#fff'}
                      title={I18n.t('login.google')}
                    />
                  </View>
                </View>
                <View style={styles.or}>
                  <Text style={styles.textOr}>{I18n.t('login.or')}</Text>
                </View>
                {this.renderLogin(mutate)}
                <TextPassword title={I18n.t('login.forgot_your_password')} />
                <FooterLogin onPress={this.onSignupPress} />
              </View>
            </ScrollView>
          </View>
        )}
      </Mutation>
    );
  }
}

export default Login;
