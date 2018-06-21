import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { styles } from './styles';
import {
  ErrorText,
  HeaderBar,
  TextAccount,
  StyledTextInput,
  ButtonNext,
  ButtonBack,
  ButtonSelect,
} from '../../shared';
import TitleFields from './TitleFields';
import RowPicker from './rowpicker';
import { CountryQuery, StateQuery, CityQuery } from './queries';
import I18n from '../../../I18n';
// import { ButtonBack } from '../../shared/Buttons/ButtonBack';


class SignUp extends Component {
  static navigationOptions = { title: 'SignUp', header: null };

  constructor(props) {
    super(props);
    this._renderCompany = this._renderCompany.bind(this);
    this._renderStore = this._renderStore.bind(this);
    this._renderAddress = this._renderAddress.bind(this);
    this._renderRemember = this._renderRemember.bind(this);
    this.onLicense = this.onLicense.bind(this);
    this.onTaxnumber = this.onTaxnumber.bind(this);
  }

  state = {
    errorNetwork: false,
    loading: false,
    License: true,
    Taxnumber: true,
    email: '',
    firstName: '',
    lastName: '',
    telephone: '',
    street: '',
    taxNumber: '',
    cityId: '',
    stateId: 1,
    countryId: 1,
    postalCode: '',
    prefix: '',
    suffix: '',
    categoryId: [],
    wait: false
}

  componentDidMount=() => {
    this.setState({
      categoryId: this.props.navigation.getParam('dataAllCategory', 'NO-ID')
    });
  }

  onLicense() {
    this.setState({
      License: false,
      Taxnumber: true
    });
  }

  onTaxnumber() {
    this.setState({
      License: true,
      Taxnumber: false
    });
  }

  async onNextStep() {
    if (__DEV__) {
      console.log('start signup...');
    }
    if (this.state.countryId === '' || this.state.cityId === '' || this.state.stateId === '' || this.state.email === '' || this.state.street === '') {
      this.setState({ wait: true });
    } else {
      this.props.navigation.navigate('FinalStep', {
        signUpData: {
          prefix: this.state.prefix,
          suffix: this.state.suffix,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          telephone: this.state.telephone,
          street: this.state.street,
          taxNumber: this.state.taxNumber,
          cityId: parseInt(this.state.cityId),
          stateId: parseInt(this.state.stateId),
          countryId: parseInt(this.state.countryId),
          email: this.state.email,
          categoryIds: this.state.categoryId
          // postalCode: this.state.postalCode
        }
      });
      console.log(this.state);
    }
  }

  onBackPress=()=>{
    this.props.navigation.goBack()
  }

  _renderWait() {
    return (
      <Spinner
        visible={this.state.wait}
        overlayColor='rgba(0, 0, 0, 0.30)'
      >
        <View style={styles.waitContainer}>
          <View style={styles.waitBox}>
            <View style={styles.alignmentWait}>
              <Text style={styles.title}>{I18n.t('signup.index_signup.wait.text1')}
                <Text style={styles.text}>
                {I18n.t('signup.index_signup.wait.text2')}
                </Text>
              </Text>
              <ButtonBack
                style={styles.backButtonWait}
                onPress={() => { this.setState({ wait: false }); }}
                iconName={'arrow-right-thick'}
                iconSize={15} title={I18n.t('signup.index_signup.wait.text3')}
                childText= {I18n.t('signup.index_signup.wait.text4')}
              />
            </View>
          </View>
        </View>
      </Spinner>
    );
  }

  _renderRemember() {
    return (
      <View>
        <View style={styles.remember}>
          <TextAccount
            bold= {I18n.t('signup.index_signup.remember.text_bold')}
            child= {I18n.t('signup.index_signup.remember.text_child')}
            color={'#1D6ED7'} sizeBold={15}
            sizeChild={13.5}
          />
        </View>
        <View style={styles.footer}>
          <ButtonBack
            style={styles.backButton}
            onPress={this.onBackPress}
            iconName={'arrow-left-thick'}
            iconSize={15} title= {I18n.t('signup.index_signup.remember.btn_back_title')}
            childText={I18n.t('signup.index_signup.remember.btn_childtext')}
          />
          <ButtonNext
            style={styles.nextButton}
            onPress={this.onNextStep.bind(this)}
            iconName={'chevron-right'}
            iconSize={15} title={I18n.t('signup.index_signup.remember.btn_next_title')}
            childText={I18n.t('signup.index_signup.remember.btn_childtext')}
          />
        </View>
      </View>
    );
  }

  changeStateCountry= (value)=>{
    this.setState({ countryId: value })
  }

  changeStateState = (value)=>{
    this.setState({ stateId: value })
  }

  changeStateCity=(value)=>{
    this.setState({ cityId: value })
  }

  _renderAddress() {
    return (
      <View>
        <TitleFields textFields= {I18n.t('signup.index_signup.address.text_1')}/>
        <StyledTextInput
          label={I18n.t('signup.index_signup.address.text_2')}
          onChange={(street) => { this.setState({ street }); }}
          text={this.state.street}
          style={styles.address}
        />

        <View style={styles.viewContainSelecter}>

          <View style={styles.selectChild}>
            <CountryQuery change={this.changeStateCountry} />
          </View>

          <View style={styles.selectChild}>
            <StateQuery countryId={this.state.countryId} change={this.changeStateState} />
          </View>

          <View style={styles.selectChild}>
            <CityQuery stateId={this.state.stateId} change={this.changeStateCity} />
          </View>

        </View>

        <View style={styles.childAddress}>
          <StyledTextInput
            label={I18n.t('signup.index_signup.address.text_3')}
            onChange={(postalCode) => { this.setState({ postalCode }); }}
            text={this.state.postalCode}
            style={styles.zip}
          />
        </View>

        <View style={styles.childAddress}>
          <StyledTextInput
            label={I18n.t('signup.index_signup.address.text_4')}
            onChange={(telephone) => { this.setState({ telephone }); }}
            text={this.state.telephone}
            style={styles.phone}
          />
          <StyledTextInput
            label={I18n.t('signup.index_signup.address.text_5')}
            onChange={(mobile) => { this.setState({ mobile }); }}
            text={this.state.mobile}
            style={styles.mobile}
          />
        </View>
        <StyledTextInput
          label={I18n.t('signup.index_signup.address.text_6')}
          onChange={(email) => { this.setState({ email }); }}
          text={this.state.email}
          style={styles.address}
        />
      </View>
    );
  }

  _renderStore() {
    let lisence = null;
    let taxnumber = null;

    if (this.state.License) {
      lisence = (<ButtonSelect
                  styleSelect={styles.styleSelect}
                  styleTextSelect={styles.styleTextSelect}
                  select={'License'}
      />);
    } else {
      lisence = (<ButtonSelect
                  styleSelect={styles.styleSelectClick}
                  styleTextSelect={styles.styleTextSelectClick}
                  select={'License'}
      />);
    }

    if (this.state.Taxnumber) {
      taxnumber = (<ButtonSelect
                    styleSelect={styles.selectTax}
                    styleTextSelect={styles.textSelectTax}
                    select={'Tax Number'}
      />);
    } else {
      taxnumber = (<ButtonSelect
                    styleSelect={styles.selectTaxClick}
                    styleTextSelect={styles.textSelectClick}
                    select={'Tax Number'}
      />);
    }

    return (
      <View>
        <TitleFields textFields={I18n.t('signup.index_signup.store.text_1')} />
        <TitleFields textFields={I18n.t('signup.index_signup.store.text_2')}>
          <StyledTextInput
            label={I18n.t('signup.index_signup.store.text_3')}
            onChange={(position) => { this.setState({ position }); }}
            text={this.state.position}
            style={styles.position}
          />
        </TitleFields>
        <TitleFields textFields={I18n.t('signup.index_signup.store.text_4')}>
          <View style={styles.buttonSelect}>
            <TouchableOpacity onPress={this.onLicense}>
              {lisence}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onTaxnumber}>
              {taxnumber}
            </TouchableOpacity>
          </View>
          <StyledTextInput
            label={I18n.t('signup.index_signup.store.text_5')}
            onChange={(taxNumber) => { this.setState({ taxNumber }); }}
            text={this.state.taxNumber}
            style={styles.number}
          />
        </TitleFields>
      </View>
    );
  }

  _renderCompany() {
    return (
      <View>
        <View style={styles.header}>
          <TextAccount
            bold={I18n.t('signup.index_signup.company.text_1_bold')}
            child= {I18n.t('signup.index_signup.company.text_1_child')}
            color={'#1D6ED7'} sizeBold={15}
            sizeChild={13.5}
          />
        </View>
        <View style={styles.company}>
          <Text style={styles.titleCompany}>{I18n.t('signup.index_signup.company.text_2')}</Text>
          {/* <Text style={styles.date}>12-29-2017</Text> */}
        </View>
        <View style={styles.formNameCompany}>
          <StyledTextInput
            label={I18n.t('signup.index_signup.company.text_3')}
            onChange={(prefix) => { this.setState({ prefix }); }}
            text={this.state.prefix}
            style={styles.prefix}
          />
          <StyledTextInput
            label={I18n.t('signup.index_signup.company.text_4')}
            onChange={(firstName) => { this.setState({ firstName }); }}
            text={this.state.firstName}
            style={styles.name}
          />
          <StyledTextInput
            label={I18n.t('signup.index_signup.company.text_5')}
            onChange={(lastName) => { this.setState({ lastName }); }}
            text={this.state.lastName}
            style={styles.lastname}
          />
          <StyledTextInput
            label={I18n.t('signup.index_signup.company.text_6')}
            onChange={(sufix) => { this.setState({ sufix }); }}
            text={this.state.sufix}
            style={styles.sufix}
          />
        </View>
      </View>
    );
  }


    render() {
      let networkErrorElement = null;
      if (this.state.errorNetwork) {
        networkErrorElement = <ErrorText title= {I18n.t('signup.index_signup.main.error')} />;
      }

      return (
        <View style={styles.container}>
          {this._renderWait()}
          <HeaderBar
            name={I18n.t('signup.index_signup.main.header_name')}
            title={I18n.t('signup.index_signup.main.header_title')}
            onPress={this.onBackPress}
            style={styles.headerBar}
          />
          <ScrollView>
            <View style={styles.alignment}>
              {networkErrorElement}
              {this._renderCompany()}
              {this._renderStore()}
              {this._renderAddress()}
              {this._renderRemember()}

            </View>
          </ScrollView>
        </View>
      );
    }
}

export default SignUp;
