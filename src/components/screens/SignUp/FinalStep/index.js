import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import Image from 'react-native-remote-svg';
import t from 'tcomb-form-native';
import i18n from 'tcomb-form-native/lib/i18n/en';
import templates from 'tcomb-form-native/lib/templates/bootstrap';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { graphql,ApolloConsumer } from 'react-apollo';
import Spinner from 'react-native-loading-spinner-overlay';
import _ from 'lodash';
import { styles } from './styles';
import { HeaderBar, BottomCreateSignUp, TextAccount, ButtonLogin, ButtonBack } from '../../../shared';
import SignupMutation from './../mutations';
import { MerchantQuery } from "../queries";
import I18n from "../../../../I18n";

/** Begin Form construction */
var Form = t.form.Form;
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textbox.normal.marginLeft = 5;
stylesheet.textbox.error.marginLeft = 5;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;
stylesheet.textboxView.normal.marginLeft = 5;
stylesheet.textboxView.error.marginLeft = 5;
stylesheet.textboxView.normal.marginRight = 5;
stylesheet.textboxView.error.marginRight = 5;

stylesheet.textbox.error.alignItems = 'center';
stylesheet.textbox.error.marginLeft = 5;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
// stylesheet.textboxView.normal.borderBottomWidth = 1;
// stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;

// overriding the text color for every textbox in every form of your app
// t.form.Form.stylesheet.textbox.normal.color = '#00FF00';

// define the templates (see lib/templates/bootstrap for an example)
// var templates = {...};
// // override globally the default layout
// t.form.Form.templates = templates;
// // set defaults
// t.form.Form.stylesheet = stylesheet;
// t.form.Form.i18n = i18n;
// function myCustomTemplate(locals) {

//   var containerStyle = {...};
//   var labelStyle = {...};
//   var textboxStyle = {...};

//   return (
//     <View style={containerStyle}>
//       <Text style={labelStyle}>{locals.label}</Text>
//       <TextInput style={textboxStyle} />
//     </View>
//   );
// }

var UsernameString = t.refinement(t.String, function (s) { return (s && s.length > 10); });

// if you define a getValidationErrorMessage function, it will be called on validation errors, context is a property of form
UsernameString.getValidationErrorMessage = function (value, path, context) {
  return 'The username must be more than 10 characters';
};

var UserPassword = t.struct({
  username: UsernameString, // a required string
  password: t.String // a required string
});

var options = {
  stylesheet: stylesheet,
  order: ['username', 'password'],
  auto: 'none',
  fields: {
    username: {
      placeholder: 'Username',
      // error: 'Insert a valid username',
      // stylesheet: myCustomStylesheet
    },
    password: {
      placeholder: 'Password',
      secureTextEntry: true,
    }
  }
};

/** End Form construction */
@graphql(SignupMutation, { name: 'signupMutation' })


class FinalStep extends Component {
  static navigationOptions = { title: I18n.t('signup.final_Step.title_nav'), header: null };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  state = {
      errorNetwork: false,
      loading: false,
      value: {
        username: '',
        password: '',
      },
      waitConfirm: false,
      merchantId: undefined
  }


  onChange(value) {
    this.setState({ value });
  }

  clearForm() {
    // clear content from all textbox
    this.setState({ value: null });
  }

  async onSubmit() {
    var value = this.refs.form.getValue();
    var validationResult = this.refs.form.validate();
    console.log('test form validation', validationResult);
    if (value) { // if validation fails, value will be null
      const { username, password } = value;

      let { signUpData } = this.props.navigation.state.params;

      const {
        firstName,
        lastName,
        telephone,
        street,
        taxNumber,
        cityId,
        stateId,
        countryId,
        email,
        categoryIds
      } = signUpData;

      if (__DEV__) {
        console.log('start login...');
      }
      this.setState({loading: true });

      console.log('show data', signUpData);
      console.log('show user', username);
      console.log('show pass', password);

      await this.props.signupMutation({
        variables: {
          username,
          password,
          firstName,
          lastName,
          telephone,
          street,
          taxNumber,
          cityId,
          stateId,
          countryId,
          email,
          categoryIds
        },
      }).then(({ data }) => {
          if (__DEV__) {
            console.log('start signup mutation', data);
          }
          console.log(data.signupMerchant.id)
          this.setState({ errorNetwork: false, loading:false});

          // v2
          this.props.navigation.navigate('ConfirmEmail',{
            id: data.signupMerchant.id
          });
          // --
          this.clearForm();
        }).catch((error) => {
          this.setState({ errorNetwork: true });
          if (__DEV__) {
            console.log('Errors:', this.state.errorNetwork);
          }
          this.setState({ loading: false });
      });
    }

  }

  // checkMerchantConfirmed= (data)=>{
  //   if (data.getMerchantById.confirmed) {
  //     console.log("complete")
  //     this.setState({waitConfirm: false });
  //     this.props.navigation.navigate('UploadImage',{
  //       id: data.getMerchantById.id
  //     });
  //   } else {
  //     console.log("fail")
  //     this.setState({waitConfirm: false });
  //   }
  // }


  // _renderWait() {
  //   return (
  //     <Spinner
  //       visible={this.state.waitConfirm}
  //       overlayColor='rgba(0, 0, 0, 0.30)'
  //     >
  //       <View style={styles.waitContainer}>
  //         <View style={styles.waitBox}>
  //           <View style={styles.alignmentWait}>
  //             <Text style={styles.title}>{I18n.t('signup.final_Step.wait.text1')}
  //               <Text style={styles.textWait}>
  //               {I18n.t('signup.final_Step.wait.text2')}
  //               </Text>
  //             </Text>

  //             <ApolloConsumer>
  //               {client => (
  //                 <View>
  //                   <ButtonBack
  //                     iconName={'arrow-right-thick'}
  //                     iconSize={15} title={I18n.t('signup.final_Step.wait.btn_title')}
  //                     childText={I18n.t('signup.final_Step.wait.btn_childText')}
  //                     style={styles.backButtonWait}
  //                     onPress={async () => {
  //                       const { data } = await client.query({
  //                         query: MerchantQuery,
  //                         variables: { id: this.state.merchantId }
  //                       });
  //                       this.checkMerchantConfirmed(data)
  //                     }}
  //                   >

  //                   </ButtonBack>
  //                 </View>
  //               )}
  //             </ApolloConsumer>

  //           </View>
  //         </View>
  //       </View>
  //     </Spinner>
  //   );
  // }

  renderLoading() {
   return (
      <Spinner
        visible={this.state.loading}
        overlayColor='rgba(0, 0, 0, 0.30)'
      >
        <View style={styles.successContainer}>
          <View style={styles.successBox}>
            <Icon name='check' style={styles.successIcon} />
          </View>
        </View>
      </Spinner>
    );
  }

  renderHeader() {
    return (
      <View>
        <View style={styles.loginNetwork}>
          <TextAccount
            bold={I18n.t('signup.final_Step.head.text1_bold')}
            child={I18n.t('signup.final_Step.head.text1_child')}
            color={'#1D6ED7'} sizeBold={15}
            sizeChild={13.5}
          />
          <View style={styles.buttonNetwork}>
            <ButtonLogin
              style={styles.buttonLoginFacebook}
              iconName={'facebook'} iconSize={20}
              iconColor={'#fff'} title={I18n.t('signup.final_Step.head.text2')}
            />
            <ButtonLogin
              style={styles.buttonLoginGoogle}
              iconName={'google-plus'} iconSize={20}
              iconColor={'#fff'} title={I18n.t('signup.final_Step.head.text3')}
            />
          </View>
        </View>
        <View style={styles.or}>
          <Text style={styles.textOr}>{I18n.t('signup.final_Step.head.text4')}</Text>
        </View>
      </View>
    );
  }

  renderFooter() {
    return (
      <View>
        <View style={styles.footer}>
          <Text style={styles.textFirst}>
          {I18n.t('signup.final_Step.footer.text1')}
          </Text>
          <View style={styles.textSecond}>
            <Text style={styles.text}> {I18n.t('signup.final_Step.footer.text2')} </Text>
            <View style={styles.iconFooter}>
              <Icon style={styles.icon} name={'chevron-right'} />
            </View>
            <Text style={styles.text}>{I18n.t('signup.final_Step.footer.text3')}</Text>
          </View>
          <BottomCreateSignUp
            style={styles.buttonCreate}
            create={I18n.t('signup.final_Step.footer.btn_create')}
            name={I18n.t('signup.final_Step.footer.btn_name')}
            color={'#fff'}
            onPress={this.onSubmit.bind(this)}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        {/* {this._renderWait()} */}

        <HeaderBar
          name={I18n.t('signup.final_Step.main.head_name')}
          title={I18n.t('signup.final_Step.main.head_title')}
          onPress={() => this.props.navigation.goBack()}
          style={styles.headerBar}
        />
        <ScrollView>
          <View>
            {this.renderLoading()}
            <View style={styles.finalsvg}>
              <Image
                source={require('../../../../../assets/images/icono_local_dealM.svg')}
                style={styles.imageBanner}
              />
              <View style={styles.rightBanner}>
                <Text style={styles.titleBanner}>{I18n.t('signup.final_Step.text_font_family')}</Text>
                <Text style={styles.textUpload}>{I18n.t('signup.final_Step.text_normal_banner')}</Text>
                <Text style={styles.textBrand}>{I18n.t('signup.final_Step.text_bold_banner')}</Text>
                <Text style={styles.textUpload1}>{I18n.t('signup.final_Step.text_normal_banner2')}</Text>
              </View>
            </View>
            {this.renderHeader()}
            <View style={styles.formFinal}>
              {/* <StyledTextInput label={'Choose your Username'} style={styles.textInput} onChange={(username) => { this.setState({ username }); }} text={this.state.username} />
              <StyledTextInput label={'Choose your Password'} secure={true} style={styles.textInput} onChange={(password) => { this.setState({ password }); }} text={this.state.password} />
              <StyledTextInput label={'Comfirm your Password'} secure={true} style={styles.textInput} onChange={(password) => { this.setState({ password }); }} text={this.state.password} /> */}
              <Form
                ref="form"
                type={UserPassword}
                options={options}
                value={this.state.value}
                onChange={this.onChange}
              />
            </View>
            {this.renderFooter()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FinalStep;
