import React, { Component } from 'react';
import { View, ScrollView, RefreshControl, Text, NativeModules, LayoutAnimation } from 'react-native';
import Modal from 'react-native-modal';
import mainScreenContentWrapperStyles from './styles';
import { HeaderBar, RefreshBar } from '..';
import ProfileMenu from './ProfileMenu';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const CustomLayoutAnimation = {
  duration: 1000,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
};

class MainScreenContentWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      modalVisible: false
    };
  }

  handleRefresh() {
    this.setState({ refreshing: true });
    if (this.props.onRefresh !== undefined) {
      this.props.onRefresh();
    }
    this.setState({ refreshing: false });
  }

  onBackDropPressed(event) {
    LayoutAnimation.configureNext(CustomLayoutAnimation);
    this.setState({ modalVisible: false });
    if (this.props.showHidePopup) {
      this.props.showHidePopup();
    }
  }

  onSettingPressed() {
    LayoutAnimation.configureNext(CustomLayoutAnimation);
    this.setState({ modalVisible: ! this.state.modalVisible })
  }

  renderRefreshControl(){
    return (<RefreshControl
      refreshing={this.state.refreshing}
      onRefresh={this.handleRefresh.bind(this)}
      onStartShouldSetResponder={(event) => true}
      onResponderGrant={this.onBackDropPressed.bind(this)}
    />)
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
        onStartShouldSetResponder={(event) => true}
        onResponderGrant={this.onBackDropPressed.bind(this)}
      >
        <HeaderBar navigation={this.props.navigation} settingCallback={this.onSettingPressed.bind(this)} />
        {
          this.state.modalVisible ?
          (
            <ProfileMenu navigation={this.props.navigation} />
          ) : null
        }

        <View onStartShouldSetResponder={(event) => true} onResponderGrant={this.onBackDropPressed.bind(this)}>
          {this.props.title !== undefined ?
          <RefreshBar
            func={this.handleRefresh.bind(this)}
            title={this.props.title}
            hasIcon
            iconName={this.props.iconName}
          /> : null
          }
          <ScrollView
            onStartShouldSetResponder={(event) => true}
            onResponderGrant={this.onBackDropPressed.bind(this)}
            refreshControl={this.renderRefreshControl()}
          >

          <View style={mainScreenContentWrapperStyles.imageStyle}
            onStartShouldSetResponder={(event) => true} onResponderGrant={this.onBackDropPressed.bind(this)}
          >
            <Text>Ad</Text>
          </View>
            <View
              style={mainScreenContentWrapperStyles.background}
              onStartShouldSetResponder={(event) => true}
              onResponderGrant={this.onBackDropPressed.bind(this)}
            >
              {this.props.children}
            </View>
            <View
              style={mainScreenContentWrapperStyles.imageBottomStyle}
              onStartShouldSetResponder={(event) => true}
              onResponderGrant={this.onBackDropPressed.bind(this)}
            >
              <Text>Ad</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

}

export default MainScreenContentWrapper;
