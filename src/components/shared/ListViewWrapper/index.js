import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import linksListStyles from './styles';

class ListViewWrapper extends Component {
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log('length add', this.props.data);
    content = <View />;
    if (this.props.data.length > 0) {
      content = <ListView
        style={linksListStyles.listContainer}
        dataSource={ds.cloneWithRows(this.props.data)}
        renderRow={(data) => <this.props.row {...data} 
          addCheck={this.props.addCheck}
          delCheck={this.props.delCheck} 
          dataCheck={this.props.dataCheck}
        />}
      />;
    }
    return content;
  }
}

export default ListViewWrapper;
