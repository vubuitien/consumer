import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import _ from 'lodash';
import t from 'tcomb-form-native';
import {
  Form,
  LoadingOverlay
} from '../../shared';
import { successFeedback } from '../SuccessFeedback';

export function tcombForm(fields, stylesheet) {
  return (WrappedComponent) => {
    @successFeedback()
    class FormWapper extends Component {
      constructor(props) {
        super(props);
        this.state = {
          submitting: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showOverlaySuccess = this.showOverlaySuccess.bind(this);
        this.hideOverlay = this.hideOverlay.bind(this);
      }

      get form() {
        return this.refs.tcombForm.getForm();
      }

      async handleSubmit(submit, context) {
        this.setState({ submitting: true });
        const value = this.form.getValue();
        if (value != null) {
          await submit(value, context);
        } else {
          this.setState({ submitting: false });
          const validate = this.form.validate();
          setTimeout(() => {
            Alert.alert('Notice', validate.firstError().message);
          }, 200);
        }
      }

      async showOverlaySuccess() {
        this.setState({ submitting: false });
        await this.props.showSuccessFeedback();
      }

      hideOverlay() {
        this.setState({ submitting: false });
      }

      render() {
        if (Object.keys(this.props).some((p) => {
          return this.props[p] && this.props[p].loading;
        })) {
          return <ActivityIndicator />;
        }

        const fields_form = fields(this.props);
        const type = {};
        const initialValues = {};

        _.forEach(fields_form, (value, key) => {
          const { validators } = value;
          let validate = value.type;
          if (validators) {
            const getValidationErrorMessage = (v) => {
              let message;
              const len = validators.length;
              for (let i = 0; i < len; i++) {
                const validator = validators[i];
                message = validator(v, value);
                if (message !== true) {
                  break;
                }
              }
              return message;
            };
            validate = t.refinement(value.type, v => {
              let valid = true;
              const len = validators.length;
              for (let i = 0; i < len; i++) {
                const validator = validators[i];
                if (validator(v) !== true) {
                  valid = false;
                  break;
                }
              }
              return valid;
            });
            validate.getValidationErrorMessage = getValidationErrorMessage;
          }
          type[key] = validate;
          if (value.value) {
            initialValues[key] = value.value;
          }
          if (value.style) {
            fields_form[key].stylesheet = {
              default: value.style
            };
          }
        });
        const options = {
          disableOrder: true,
          fields: fields_form
        };

        if (stylesheet) {
          options.stylesheet = stylesheet;
        }

        return (
          <View style={{ flex: 1 }}>
            <Form
              ref='tcombForm'
              type={type}
              options={options}
              initialValues={initialValues}
            >
              {(locals) => {
                return (
                  <WrappedComponent
                    {...locals}
                    {...this.props}
                    showOverlaySuccess={this.showOverlaySuccess}
                    hideOverlay={this.hideOverlay}
                    handleSubmit={this.handleSubmit}
                  />
                );
              }}
            </Form>
            <LoadingOverlay visible={this.state.submitting} />
          </View>
        );
      }
    }
    return FormWapper;
  };
}
