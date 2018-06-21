import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import React, { Component } from 'react';

import {
  ProfileImage,
  SidebarNavigationLink,
  SidebarNavigationSubLink,
} from '../../../components/shared';
import { navStyles } from './styles';

class Navbar extends Component {

  findRouteName() {
    const route = this.props.navigation.state.routes[this.props.navigation.state.index]
    return route.routeName
  }

  render() {
    // check state signin to show login/logout here

    return (
      <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfile')} style={navStyles.navHeader} >
              <ProfileImage
                imageSource='http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/cute-girls-profile-pics-1024x724.jpg'
                hasSpecificSize
                specificSize={33}
              />
              <View style={navStyles.navHeaderInfo}>
                <Text style={navStyles.navHeaderUserName}>username here</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={navStyles.navContainer}>
            <SidebarNavigationLink
              onPress={() => this.props.navigation.navigate('Login')}
              iconName='format-list-bulleted-type'
              label='shared.new_top_bar.overview'
              hasSubNavigation
              focused={this.findRouteName() === 'Login'}
            >
              <View style={navStyles.navSubContainer}>
                <Text style={navStyles.navLabel}>Offer</Text>
                <SidebarNavigationSubLink
                  onPress={() => this.props.navigation.navigate('Login')}
                  label={'Team name (Missing)'}
                />
                <SidebarNavigationSubLink
                  onPress={() => this.props.navigation.navigate('Login')}
                  label='Login'
                />
              <View style={navStyles.navSeparator}></View>
                <Text style={navStyles.navLabel}>sub menu</Text>
                <SidebarNavigationSubLink
                  label={'Name (Missing)'}
                />
              </View>
            </SidebarNavigationLink>

            <SidebarNavigationLink
              onPress={() => this.props.navigation.navigate('Account')}
              iconName='calendar'
              label='Account'
              hasSubNavigation
              focused={this.findRouteName() === 'Account'}
            >
              <View style={navStyles.navSubContainer}>
                <SidebarNavigationSubLink
                  onPress={() => this.props.navigation.navigate('Account')}
                  label='submenu account'
                  focused={this.findRouteName() == 'Account'}
                />
                <SidebarNavigationSubLink
                  onPress={() => this.props.navigation.navigate('Account')}
                  label='submenu account 2'
                />
              </View>
            </SidebarNavigationLink>

            <SidebarNavigationLink
              onPress={() => this.props.navigation.navigate('Login')}
              iconName='account-multiple'
              label='Login'
              hasSubNavigation
              focused={this.findRouteName() == 'Login'}
            >
              <View style={navStyles.navSubContainer}>
                <SidebarNavigationSubLink
                  onPress={() => this.props.navigation.navigate('Login')}
                  label='submenu Login'
                  focused={this.findRouteName() == 'Login'}
                />
                <SidebarNavigationSubLink
                  onPress={() => this.props.navigation.navigate('Login')}
                  label='submenu Login 2'
                  focused={this.findRouteName() == 'Login'}
                />
              </View>
            </SidebarNavigationLink>

            <SidebarNavigationLink
              onPress={() => this.props.navigation.navigate('Home')}
              iconName='email-outline'
              label='Home'
              hasSubNavigation
              focused={this.findRouteName() == 'Home'}
            >
              <View style={navStyles.navSubContainer}>
              <SidebarNavigationSubLink
                onPress={() => this.props.navigation.navigate('Home')}
                label='submenu Home'
                focused={this.findRouteName() == 'Home'}
              />

              <SidebarNavigationSubLink
                onPress={() => this.props.navigation.navigate('Home')}
                label='submenu Home 2'
                focused={this.findRouteName() == 'Home'}
              />
              </View>
            </SidebarNavigationLink>

          </View>
          <View style={ navStyles.navBottom }>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://google.com')}
              style={navStyles.navBottomLink}
            >
              <Text style={navStyles.navBottomLinkText}>
                {'youtube' + ' (MISSING)' }
              </Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Navbar;


// import React, { Component } from 'react';
// import { ScrollView, StyleSheet, Text } from 'react-native'
// import { DrawerItems, SafeAreaView } from 'react-navigation';

// export class Navbar extends Component {
//   render() {
//     return(
//       <ScrollView>
//         <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//           <DrawerItems {...this.props} />
//         </SafeAreaView>
//       </ScrollView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
