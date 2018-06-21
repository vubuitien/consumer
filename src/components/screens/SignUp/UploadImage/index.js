import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Image from 'react-native-remote-svg';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { graphql } from 'react-apollo';
import { styles } from './styles';
import I18n from '../../../../I18n';
import { ButtonNext, HeaderBar, TextInputData } from '../../../shared';
import { create } from 'apisauce';
import { Configs } from '../../../../constants';
import UpdateImageMutation from './mutation';

const api = create({
    baseURL: Configs.localUrl,
  });

@graphql(UpdateImageMutation, { name: 'updateImageMutation' })

export default class UploadImage extends Component {

  constructor(props) {
    super(props);
    this._renderUploadImage = this._renderUploadImage.bind(this);
    this._renderMainDisplay = this._renderMainDisplay.bind(this);
    this.state = {
      brandingImage: undefined,
      brandingName: '',
      brandingDetail: '',
      id: undefined
    };
  }

    componentDidMount=async () => {
        await this.setState({ id: this.props.navigation.getParam('id', 'NO-ID') });
        console.log('id merchant: ', this.state.id);
    }

    onSaveImage= async () => {
            // create formdata
            const data = await new FormData();
            console.log('state', this.state);
            await data.append('photo', {
              uri: this.state.uriImage,
              type: 'image/jpeg',
              name: this.state.brandingImage
            });
            const headers = await {
              'Content-Type': 'multipart/form-data'
            };

            const { id, brandingImage, brandingName, brandingDetail } = await this.state;

            console.log("tt :", id +"--"+ brandingImage);
            await this.props.updateImageMutation({
                variables: {
                    id,
                    brandingImage,
                    brandingName,
                    brandingDetail
                },
              }).then(res => console.log(res));
            // post your data.
            await api.post('/upload', data, {
              onUploadProgress: (e) => {
                console.log(e);
                const progress = e.loaded / e.total;
                console.log(progress);
              },
              headers
            })
            .then(async (res) => {
                console.log('after upload: ', res);

                await this.props.navigation.navigate('Offer');
            }
        );
    }

    chooseImage=() => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            mediaType: "photo"
            }).then(image => {
            console.log(image);
            this.setState({
                uriImage: image.path,
                brandingImage: image.path
            })
        });
    }

    _renderMainDisplay() {
      return (
        <View>
          <View style={styles.mainDisplay}>
            <View style={styles.titleMain}>
              <Text style={styles.textMain}>{I18n.t('signup.upload_image.main_display')}</Text>
              <Text style={styles.account}>MERCHANT ACCOUNT</Text>
            </View>
            <ButtonNext
              style={styles.editButton}
              onPress={this.onSaveImage.bind(this)}
              iconName={'chevron-right'}
              iconSize={15} title={I18n.t('signup.upload_image.edit')}
              childText={I18n.t('signup.upload_image.display')}
            />
          </View>
          <View style={styles.containe} >
              <Text style={styles.nameInput} > {I18n.t('signup.upload_image.consummer_view')}</Text>
              <View>
                <TextInputData
                  style={styles.inputStore}
                  onChange={(text) => this.setState({ brandingName: text })}
                  text={this.state.brandingName}
                  label={I18n.t('signup.upload_image.Your_Name_Store')}
                  placeholderColor={'#303849'}
                  underline={'transparent'}
                />
              </View>
          </View>
        </View>
      );
    }

    _renderUploadImage() {
      return (
        <View style={styles.editProfile}>
          <TouchableOpacity onPress={this.chooseImage}>
            <View style={styles.boxImage}>
              <Icon name={'camera'} style={styles.icon} />
              <Text style={styles.textImage}>{I18n.t('signup.upload_image.branding_image')}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.addProfile}>
            <Text style={styles.textAdd}>{I18n.t('signup.upload_image.add')}</Text>
            <Text style={styles.textProfile}>{I18n.t('signup.upload_image.branding_image')}</Text>
          </View>
          <Text style={styles.textChild}>{I18n.t('signup.upload_image.recommender_image_size')}</Text>
          <Text style={styles.textChild}>{I18n.t('signup.upload_image.500px_by_500px')}</Text>
        </View>
      );
    }

    render() {
        return (
        <View style={styles.main} >
          <HeaderBar
            name={I18n.t('signup.first_Step.main.header_name')}
            title={I18n.t('signup.first_Step.main.header_title')}
            onPress={() => this.props.navigation.goBack()}
            style={styles.headerBar}
          />
          <ScrollView>
            <View style={styles.finalsvg}>
              <Image
                source={require('../../../../../assets/images/icono_local_dealM.svg')}
                style={styles.imageBanner}
              />
              <View style={styles.rightBanner}>
                <Text style={styles.titleBanner}>{I18n.t('signup.upload_image.set_your_brand')}</Text>
                <Text style={styles.textUpload}>{I18n.t('signup.upload_image.upload_your')}</Text>
                <Text style={styles.textBrand}>{I18n.t('signup.upload_image.branding_image_banner')}</Text>
              </View>
            </View>
            <View style={styles.content}>
              {this._renderUploadImage()}
              {this._renderMainDisplay()}

              <View style={styles.containe} >
                <Text style={styles.detail} > {I18n.t('signup.upload_image.detail')}</Text>
                <View>
                  <TextInputData
                    style={styles.inputDetail}
                    onChange={(text) => this.setState({ brandingDetail: text })}
                    text={this.state.brandingDetail}
                    label={I18n.t('signup.upload_image.Detail_Store')}
                    placeholderColor={'#303849'}
                    underline={'transparent'}
                  />
                </View>
              </View>
              <View style={styles.footer}>
                <ButtonNext
                  style={styles.nextButton}
                  onPress={this.onSaveImage.bind(this)}
                  iconName={'chevron-right'}
                  iconSize={15} title={I18n.t('signup.upload_image.Save_bold')}
                  childText={I18n.t('signup.upload_image.profile')}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      );
  }
}
