import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { CheckBox } from 'native-base';
import { styles } from './styles';

class Row extends Component {
  constructor(props){
    super(props)
    this.state = {
      check: this.props.dataCheck.filter(item=>(item.id == this.props.id)).length >0
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    if (nextProps === this.props && nextState === this.state ) {
      return false;
    }
    return true;
  }
  
  checkBox=()=> {  
     
    if (!this.state.check) {
      this.props.addCheck({
        id:this.props.id,
        name:this.props.name
      })
      this.setState({
        check: !this.state.check
      });
    }else{
      this.props.delCheck({
        id:this.props.id,
        name:this.props.name
      })
      this.setState({
        check: !this.state.check
      });
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.checkBox()}>
        <View style={styles.row}>
           <CheckBox
             checked={this.state.check}
             onPress={() => this.checkBox()}
             style={styles.checkbox}
           />
           <Text style={styles.textName}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default Row;
