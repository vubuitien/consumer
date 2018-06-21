import React, { Component } from 'react';
import { View } from 'react-native';
import { BottomBarButton } from '..';
import bottomStyles from './styles';

class BottomBar extends Component {

    constructor(props) {
      super(props);
      this.state = { seeMore: false };
    }

    handleSeeMorePress() {
      this.setState({ seeMore: true });
    }

    handleSeeLessPress() {
      this.setState({ seeMore: false });
    }

    render() {
      const childrenToBeShown = React.Children.toArray(this.props.children).filter((child) => !child.props.hide);
      console.log('Children to be shown: ' + childrenToBeShown);
      let toogleMoreButton = <BottomBarButton onPress={this.handleSeeMorePress.bind(this)} iconName='dots-horizontal' label= 'More'  />
      let additionalBottomBarButtons = <View />
      if (this.state.seeMore) {
        const childrenInSecondRow = childrenToBeShown.slice(5, 9)
        const childrenInThirdRow = childrenToBeShown.slice(9, 11)
        toogleMoreButton = <BottomBarButton onPress={this.handleSeeLessPress.bind(this)} iconName='close' label= 'Less' />
        console.log("children in second row: " + childrenInSecondRow)
        console.log("children in third row: " + childrenInThirdRow)
        additionalBottomBarButtons = (
          <View>
              <View style={bottomStyles.row}>
                  { childrenInThirdRow }
              </View>
            <View style={bottomStyles.row}>
              { childrenInSecondRow }
            </View>

          </View>
        );
      }

      let content = childrenToBeShown;
      console.log(content);
      console.log(childrenToBeShown.length);
      if (childrenToBeShown.length > 5) {
        const childrenInFirstRow = childrenToBeShown.slice(0, 4);
        console.log('children in the first row: ' + childrenInFirstRow);
        content = (
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View>
                    {additionalBottomBarButtons}
                </View>

                <View>

                    <View style={bottomStyles.row}>
                        { childrenInFirstRow }
                        { toogleMoreButton }
                    </View>

                </View>

           </View>

        );
      } else {
        content = (
          <View>
              <View style={bottomStyles.row}>
                    {childrenToBeShown}
              </View>
          </View>
        );
      }
      return (
        <View style={bottomStyles.bottomBar}>
          {content}
        </View>
      );
    }

}

export default BottomBar;
