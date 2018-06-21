import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import Image from 'react-native-remote-svg';
import { ApolloConsumer } from 'react-apollo';
import { styles } from './styles';
import { MerchantQuery } from '../../queries';
import I18n from '../../../../../I18n';
import { HeaderBar, ButtonNext } from '../../../../shared';

class ComfirmEmail extends Component {
  static navigationOptions = { title: I18n.t('signup.final_Step.title_nav'), header: null };
  constructor(props) {
    super(props);
    this.state = {
      id: undefined
    };
  }

  componentDidMount=async () => {
    await this.setState({ id: this.props.navigation.getParam('id', undefined) });
    console.log('id merchant: ', this.state.id);
  }


  checkMerchantConfirmed= (data) => {
    if (data.getMerchantById.confirmed) {
      console.log('complete');
      this.props.navigation.navigate('UploadImage', {
        id: data.getMerchantById.id
      });
    } else {
      console.log('fail');
    }
  }


  _renderConfirmEmail() {
    return (
          <View>
            <ApolloConsumer>
                {client => (
                  <View>
                    <ButtonNext
                      style={styles.nextButton}
                      iconName={'chevron-right'}
                      iconSize={15} title={I18n.t('signup.confirm_email.start')}
                      childText={I18n.t('signup.confirm_email.now')}
                      onPress={async () => {
                        const { data } = await client.query({
                          query: MerchantQuery,
                          variables: { id: this.state.id }
                        });
                        this.checkMerchantConfirmed(data);
                      }}
                    />
                  </View>
                )}
            </ApolloConsumer>
          </View>

    );
  }


  render() {
    return (
      <View style={styles.container}>
        <HeaderBar
          name={I18n.t('signup.final_Step.main.head_name')}
          title={I18n.t('signup.final_Step.main.head_title')}
          onPress={() => this.props.navigation.goBack()}
          style={styles.headerBar}
        />
        <ScrollView>
          <View>
            <View style={styles.finalsvg}>
              <Image
                source={require('../../../../../../assets/images/Smile_M.svg')}
                style={styles.imageBanner}
              />
              <View style={styles.rightBanner}>
                <Text style={styles.titleBanner}>{I18n.t('signup.confirm_email.text_font_family')}</Text>
                <Text style={styles.textBrand}>{I18n.t('signup.confirm_email.text_bold_banner')}</Text>
                <Text style={styles.textBrand1}>{I18n.t('signup.confirm_email.text_bold_banner2')}</Text>
              </View>
            </View>
            <View>
                <View style={styles.wrapperText} >
                    <Text style={styles.textBoldItalic} >{I18n.t('signup.confirm_email.important_note')}</Text>
                    <Text style={styles.textBold} >{I18n.t('signup.confirm_email.your_application_will_soon_be_reviewed')}</Text>
                    <Text style={styles.text} >{I18n.t('signup.confirm_email.we_may_call_')}</Text>
                    <Text style={styles.text1} >{I18n.t('signup.confirm_email.we_may_cal2')}</Text>
                    <Text style={styles.text2} >{I18n.t('signup.confirm_email.we_may_cal3')}</Text>
                    <Text style={styles.textItalic} >{I18n.t('signup.confirm_email.if_you_do_')}</Text>
                    <Text style={styles.textBold} >{I18n.t('signup.confirm_email.you_can_login_using')}</Text>
                    <Text style={styles.textBold1} >{I18n.t('signup.confirm_email.you_can_login_using2')}</Text>
                </View>
            </View>
            {this._renderConfirmEmail()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ComfirmEmail;
