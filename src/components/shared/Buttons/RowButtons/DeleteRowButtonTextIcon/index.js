import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DeleteConfirmDialog } from '../../../../shared';
import delRowStyles from './styles';

class DeleteRowButtonTextIcon extends Component {
  state = { modalVisible: false }

  onDeletePressed() {
    this.setState({ modalVisible: true });
  }

  onConfirmedDeletePressed() {
    this.setState({ modalVisible: false });
    this.props.handleDelete();
  }

  onCancelPressed() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View style={delRowStyles.container}>
        <DeleteConfirmDialog
            modalVisible={this.state.modalVisible}
            exitFunc={this.onCancelPressed.bind(this)}
            handleDelete={this.onConfirmedDeletePressed.bind(this)}
        />
        <TouchableOpacity onPress={this.onDeletePressed.bind(this)} style={delRowStyles.icon}>
          <View style={{ flexDirection: 'row', borderWidth: 0 }}>
            <Icon
              color='#FF0000' size={13}
              name='minus-circle' style={{ paddingTop: 2 }}
            />
            {this.props.buttonText !== undefined ?
              <Text style={delRowStyles.buttonText}>{this.props.buttonText}</Text> : null
            }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeleteRowButtonTextIcon;
