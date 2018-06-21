import { View } from 'react-native';
import React, { Component } from 'react';

import { BottomBarButton } from '../../index';
import { DeleteConfirmDialog } from '../../../../shared';

class DeleteBottomBarButton extends Component {
    state = { modalVisible: false }

    onDeletePressed() {
      this.setState({ modalVisible: true })
    }

    onConfirmedDeletePressed() {
      this.setState({ modalVisible: false })
      this.props.onPress()
    }

    onCancelPressed() {
      this.setState({ modalVisible: false })
    }

    render() {
      return (
        <View>
          <BottomBarButton 
            onPress={this.onDeletePressed.bind(this)}
            image={this.props.image}
            label= {this.props.label}
          />
        
          <DeleteConfirmDialog
            modalVisible={this.state.modalVisible}
            exitFunc={this.onCancelPressed.bind(this)}
            handleDelete={this.onConfirmedDeletePressed.bind(this)}
            confirmDialogTitle={this.props.confirmDialogTitle}
          />
        </View>

      );
  }
};

export default DeleteBottomBarButton;
