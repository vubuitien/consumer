import React, { Component } from 'react';
import { View, ScrollView, RefreshControl, Text, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import { HeaderBar, RefreshBar } from '..';
import Row from './Row';
import I18n from '../../../../I18n';

class ProfileMenu extends Component {

  render() {
    const { user }  = this.props;
    var width = Dimensions.get('window').width;

    return (

        <View style={styles.container}>
            <View style={styles.menuContainer}>
                <View style={[styles.header, { width }]}>
                    <Text style={styles.profileText}> Profile </Text>
                    <Text style={styles.username}> {user && user.name ? this.props.user.name : 'username'} </Text>
                </View>
                <Row
                  iconName='account' title={I18n.t('profile_settings')}
                  onPress={() => {}}
                />
                <Row
                  iconName='thumb-up' title={I18n.t('profile_settings')}
                  onPress={() => {}}
                />
                <Row
                  iconName='email' title={I18n.t('toolbar.email.inbox')}
                  onPress={() => {}}
                />
                <Row
                  iconName='help-circle' title={I18n.t('help')}
                  onPress={() => {}}
                />
                <Row
                  iconName='decagram' title={I18n.t('profile_settings')}
                  onPress={() => {}}
                />
                <Row
                  iconName='logout' title={I18n.t('profile_settings')}
                  onPress={() => this.props.navigation.navigate('Setting')}
                />
            </View>
        </View>
    );
  }

}

export default ProfileMenu;
