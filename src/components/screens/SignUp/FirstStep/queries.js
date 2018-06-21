import gql from 'graphql-tag';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';

// Define query types
const getCategoriesQuery = gql`
  query getCategories {
    getAllCategories{
      id
      name
    }
  }
`;

export const CategoryQuery = ({ children }) => {
  return (
    <Query
      query={getCategoriesQuery}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, networkStatus }) => 
      {
        if (networkStatus === 4) return <ActivityIndicator />;
        if (loading) return (<ActivityIndicator />);
        if (error) { console.log('data: ', error); }
        console.log('data: ', data)
        return children(data, loading);
      }}
    </Query>
  );
};