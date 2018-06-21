import React, { Component } from 'react';
import {
  View,ScrollView
} from 'react-native';
import { styles } from './styles';
import ListCategory from '../ListCategory';

class CategoryItems extends Component {

  render() {
    return (
      <View style={styles.checkCategory}>
        {this.props.item.map(obj=>{
          return (
            <ListCategory key={obj.id} name={obj.name} />
          )
        })}
        
      </View>
    );
  }
}
export default CategoryItems;
