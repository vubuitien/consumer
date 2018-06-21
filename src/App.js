/*
 * @flow
 */
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from 'apollo-utilities'
// Error Toys should decalre a screen Line 15 fix later
import MainNavigator from './navigation/MainNavigator';

//Create Apollo client default uri is localhost:3000/graphql
const serverURL = 'http://27.78.16.8:8087/graphql';

//test on local when server is not avaialble
const localURL = 'http://localhost:8003/graphql';

const dataIdFromObject = object => `${object.__typename}__${object.id || object.tweet_id}`;

const getSessionToken = () => {
  return AsyncStorage.getItem('token');
};

const wsLink = new WebSocketLink({
  uri: `ws://192.168.1.10:8003/subscriptions`,
  options: {
    reconnect: true
  }
});

const hasSubscriptionOperation = ({ query: { definitions } }) =>
  definitions.some(
    ({ kind, operation }) =>
      kind === 'OperationDefinition' && operation === 'subscription'
  );

const authHeader = setContext(
  request =>
    new Promise((success, fail) => {
      getSessionToken().then(token => success({ headers: { authorization: `Bearer ${token}` } }));
    })
);

const linkApollo = ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        }

        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      authHeader,
    ]).split(
      hasSubscriptionOperation,
      wsLink,
      new HttpLink({
        uri: serverURL,
        credentials: 'same-origin'
      })
    );

// const linkApollo = ApolloLink.split(
//   hasSubscriptionOperation,
//   wsLink,
//   new HttpLink({
//     uri: localURL,
//     credentials: 'same-origin'
//   }),
//   authHeader
// );

// const link = concat(linkApollo, authHeader);
console.disableYellowBox = true;

const client = new ApolloClient({
  link: linkApollo,
  cache: new InMemoryCache()
});
// const client = new ApolloClient({
//   link: ApolloLink.from([
//     onError(({ graphQLErrors, networkError }) => {
//       if (graphQLErrors) {
//         graphQLErrors.map(({ message, locations, path }) =>
//           console.log(
//             `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//           ),
//         );
//       }

//       if (networkError) console.log(`[Network error]: ${networkError}`);
//     }),
//     authHeader,
//     wsLink,
//     new HttpLink({
//       uri: localURL,
//       credentials: 'same-origin'
//     })
//   ]),
//   cache: new InMemoryCache()
// });

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <MainNavigator />
      </ApolloProvider>

      // <View>
      //   <Text> test typescript </Text>
      // </View>
    );
  }
}
