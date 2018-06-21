import React, { Component } from "react";
import { Picker, Form, Icon } from "native-base";
import { styles } from "./style";


export default class RowPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };
  }
  
  
  onValueChange= (value)=>{
    this.setState({
      selected: value
    });
    console.log("log check:",value)
    this.props.change(value);
    
  }
  
  render() {
    return (    
          <Form style={styles.selects} >
            <Picker
              iosHeader="Select one"
              placeholder={this.props.name}
              placeholderStyle={{ color: "#bfc6ea" }}
              textStyle = {styles.pickerPleholder}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
              style={styles.picker}
            >             
              {this.props.data.map((obj)=>{
                return <Picker.Item label={obj.name} 
                value={obj.id} key={obj.id}               
                />
              })}
              
            </Picker>
          </Form>
        
    );
  }
}