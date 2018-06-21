import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RowButton } from '../../index';
import styles from './styles';
import { DeleteConfirmDialog } from '../../../../shared';
import Colors from '../../../../../constants/colors';


class DeleteRowButton extends Component {
    state = { modalVisible: false }

    onDeletePressed() {
      if (this.props.onRedirect !== undefined) {
        this.props.onRedirect();
      } else {
        this.setState({ modalVisible: true })
      }
    }

    onConfirmedDeletePressed() {
      this.setState({ modalVisible: false })
      this.props.handleDelete()
    }

    onCancelPressed() {
      this.setState({ modalVisible: false })
    }

    render() {
      return (
          <RowButton onPress={this.onDeletePressed.bind(this)} bgColor={Colors.deleteRed} >
              <DeleteConfirmDialog
                  modalVisible={this.state.modalVisible}
                  exitFunc={this.onCancelPressed.bind(this)}
                  handleDelete={this.onConfirmedDeletePressed.bind(this)}
                  confirmDialogTitle={this.props.confirmDialogTitle}
              />
              <FontAwesome style={styles.buttonIcon} name="minus" />
          </RowButton>
      );
  }
};

export default DeleteRowButton;
