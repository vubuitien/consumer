import {
  LayoutAnimation,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import styles from './styles';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

let CustomLayoutAnimation = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 1.9,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 1.9
  },
};

const x = 0;

class SidebarNavigationLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDescOpen: false

    };
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    if (this.state.isDescOpen) {
      return (
        (this.props.children)
      );
    }
    return null;
  }

  _onDescriptionPressed() {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    LayoutAnimation.configureNext(CustomLayoutAnimation);
    this.setState({ isDescOpen: !this.state.isDescOpen });
  }

  render() {
    const descToggleIcon = (this.state.isDescOpen) ? 'minus' : 'plus';

    let subNavigationIcon;
    if (this.props.hasSubNavigation) {
      subNavigationIcon = (
        <View style={styles.collapseIconContainer}>
        <TouchableOpacity
          onPress={this._onDescriptionPressed.bind(this)}
          style={styles.collapseIconButton}
        >
          <Icon name={descToggleIcon} size={15} style={styles.collapseIcon} />
        </TouchableOpacity>
        </View>
      );
    }

    let containerStyle = styles.container;
    if (this.props.lastSidebarNavigationLink) {
      containerStyle = '';
    }
    return (
      <View style={containerStyle}>
        <View style={styles.sidebarNavigationContainer}>
          <TouchableHighlight
            underlayColor='rgba(168, 190, 199, 0.1)'
            onPress={this.props.onPress}
            style={this.props.hasSubNavigation ? styles.sidebarNavigationWithSub : styles.sidebarNavigation}
          >
            <View style={{ flexDirection: 'row' }} >
              <Icon style={this.props.focused ? styles.textIconFocused : styles.textIcon} name={this.props.iconName} />
              <Text style={this.props.focused ? styles.textFocused : styles.text}>{this.props.label.toUpperCase()}</Text>
            </View>
          </TouchableHighlight>
          {subNavigationIcon}
        </View>
        {this.renderContent()}
      </View>

    );
  }
}

export default SidebarNavigationLink;
