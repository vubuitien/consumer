import React from 'react';
import t from 'tcomb-form-native';
import { ApolloConsumer } from 'react-apollo';

export function apolloForm() {
  return (WrappedComponent) => {
    class ApolloForm extends t.form.Component {
      render() {
        return (
          <ApolloConsumer>
            {(client) => {
              return (
                <WrappedComponent
                  client={client}
                  {...this.props}
                />
              );
            }}
          </ApolloConsumer>
        );
      }
    }
    return ApolloForm;
  };
}
