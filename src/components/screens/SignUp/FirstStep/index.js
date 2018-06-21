import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Image from 'react-native-remote-svg';
import { graphql } from 'react-apollo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderBar, BottomCreateSignUp, ButtonBack, ListViewWrapper } from '../../../shared';
import { styles } from './styles';
import CategoryItems from './Category/CategoryItems';
import { CategoryQuery } from './queries';
import Row from './Row';
import I18n from "../../../../I18n";

var arrayData = [];
var mangId = [];
class FirstStep extends Component {
  static navigationOptions = { title: I18n.t('signup.title_firstStep'), header: null }

  constructor(props) {
    super(props);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderCategory = this._renderCategory.bind(this);
    this._renderFooter = this._renderFooter.bind(this);
    this._renderModalCategory = this._renderModalCategory.bind(this);
    this._renderWait = this._renderWait.bind(this);
  }

  state = {
    loading: false,
    wait: false,
    dataCheck:[]

  }

  _getDataId=async()=>{
    mangId = await []
    for (let i = 0; i < this.state.dataCheck.length; i++) {
      mangId.push(this.state.dataCheck[i].id)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps === this.props && nextState === this.state ) {
      return false;
    }
    return true;
  }


    _onNextStep = async ()=>{
      // TODO: transfer list of category ids to next screen
      if (this.state.dataCheck.length != 0) {
        await this.props.navigation.navigate('SignUp',{
          dataAllCategory: this.state.dataCheckId
        });
        arrayDataId = []
        arrayData = []
      }else(
        this.setState({ wait: true })
      );
    }

  _renderHeader() {
    return (
      <View style={styles.alignment}>
        <View style={styles.firstTitle}>
          <Text style={styles.textSelect}> {I18n.t('signup.first_Step.head.text1')} </Text>
          <Text style={styles.textCategory}>{I18n.t('signup.first_Step.head.text2')}</Text>
        </View>
        <Text style={styles.secondTitle}> {I18n.t('signup.first_Step.head.text3')} </Text>
        <Text style={styles.endTitle}>
        {I18n.t('signup.first_Step.head.text4')}
        </Text>
      </View>
    );
  }

  shouldComponentUpdate(nextProps,nextState){
    if (nextProps === this.props && nextState === this.state ) {
      return false;
    }
    return true;
  }


  _onNextStep = async ()=>{
    // TODO: transfer list of category ids to next screen
    if (this.state.dataCheck.length != 0) {
      await this._getDataId()
      await this.props.navigation.navigate('SignUp',{
        dataAllCategory: mangId
      });
    }else(
      this.setState({ wait: true })
    )

  }

  _renderFooter() {
    return (
      <View style={styles.footer}>
        <Text style={styles.textFooter}>{I18n.t('signup.first_Step.footer.text1')}</Text>
        <ButtonBack
          style={styles.backButton}
          onPress={this._onNextStep.bind(this)}
          iconName={'chevron-right'}
          iconSize={19} title={ I18n.t('signup.first_Step.footer.title_button')}
          childText={ I18n.t('signup.first_Step.footer.childText')}
        />
      </View>
    );
  }

  _renderCategory() {
    return (
      <View style={styles.addCategory}>
        <View style={styles.texTitleCategory}>
          <Text style={styles.textImprove}> {I18n.t('signup.first_Step.category.text1')} </Text>
          <Text style={styles.textExposeure}>{I18n.t('signup.first_Step.category.text2')}! </Text>
        </View>
        <View style={styles.buttonCategory}>
          <BottomCreateSignUp
            style={styles.buttonCreate}
            create= {I18n.t('signup.first_Step.category.create_btn')}
            name= {I18n.t('signup.first_Step.category.name_btn')}
            color={'#0063D8'}
            onPress={() => {
              this.setState({ loading: true });

            }}
          />
          <View style={styles.lengthCategory}>
            <Icon name='arrow-right-bold' style={styles.iconText} />
            <Text style={styles.textLength}>{I18n.t('signup.first_Step.category.text3')}</Text>
          </View>
        </View>
      </View>
    );
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
              <Text style={styles.title}>{I18n.t('signup.first_Step.wait.text1')}
                <Text style={styles.text}>
                {I18n.t('signup.first_Step.wait.text2')}
                </Text>
              </Text>
              <ButtonBack
                style={styles.backButtonWait}
                onPress={() => { this.setState({ wait: false }); }}
                iconName={'arrow-right-thick'}
                iconSize={15} title= {I18n.t('signup.first_Step.wait.text3')}
                childText= {I18n.t('signup.first_Step.wait.text4')}
              />
            </View>
          </View>
        </View>
      </Spinner>
    );
  }

  _addCheck = (obj)=>{
    if (arrayData.indexOf(obj) < 0) {
      arrayData.push(obj);
    }
  }

  _delCheck = (obj)=>{
    arrayData = arrayData.filter(word => word.name !== obj.name)
  }

  _delArray = ()=>{
    arrayData = []
  }


  _setStateCheck= ()=>{
    this.setState({dataCheck : arrayData})
  }

  _renderModalCategory = () => {
    return (
      <Spinner
        visible={this.state.loading}
        overlayColor='rgba(0, 0, 0, 0.30)'
      >
        <View style={styles.categoryContainer}>
          <View style={styles.categoryBox}>
            <View style={styles.topBox}>
              <Text style={styles.textChoose}>{I18n.t('signup.first_Step.modal.text1')}</Text>
              <Text style={styles.textSecond}>{I18n.t('signup.first_Step.modal.text2')}</Text>
            </View>
            <CategoryQuery>
            {
              (queryResult, loading) =>
                  (<ScrollView style={styles.scrollCategory}>
                    <ListViewWrapper
                      navigation={this.props.navigation}
                      data={queryResult.getAllCategories}
                      row={(data) => <Row
                            {...data}
                      />}
                      addCheck={this._addCheck}
                      delCheck={this._delCheck}
                      dataCheck={this.state.dataCheck}
                    />
                  </ScrollView>)
            }
            </CategoryQuery>
            <View style={styles.footerBox}>
              <TouchableOpacity onPress={() => {
                this.setState({ loading: false });
                this._delArray()

              }}>
                <Text style={styles.clickBox}>{I18n.t('signup.first_Step.modal.text3')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={async() => {
                this.setState({ loading: false })
                this.setState({dataCheck : arrayData})
              }}>
                <Text style={styles.clickBox}>{I18n.t('signup.first_Step.modal.text4')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Spinner>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderModalCategory()}
        {this._renderWait()}
        <HeaderBar
          name={I18n.t('signup.first_Step.main.header_name')}
          title={I18n.t('signup.first_Step.main.header_title')}
          onPress={() => this.props.navigation.goBack()}
          style={styles.headerBar}
        />
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.headerImg}>
              <Text style={styles.hi}>{I18n.t('signup.first_Step.banner.hi')}</Text>
              <Image
                source={require('../../../../../assets/images/pig.svg')}
                style={styles.imageSvg}
              />
              <View style={styles.rightBanner}>
                <Text style={styles.titleBanner}>{I18n.t('signup.first_Step.banner.title_banner')}</Text>
                <Text style={styles.textUpload}>{I18n.t('signup.first_Step.banner.text_normal_banner')}</Text>
                <Text style={styles.textUpload1}>{I18n.t('signup.first_Step.banner.text_normal_banner2')}</Text>
                <Text style={styles.textBrand}>{I18n.t('signup.first_Step.banner.text_bold_banner')}</Text>
                <Text style={styles.textBrand1}>{I18n.t('signup.first_Step.banner.text_bold_banner2')}</Text>
              </View>
            </View>
            {this._renderHeader()}
            {this._renderCategory()}
            <Text style={styles.textSelectCategory}>{I18n.t('signup.first_Step.main.select')}</Text>

            <CategoryItems item={this.state.dataCheck} />
            {this._renderFooter()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default FirstStep;
