import gql from 'graphql-tag';
import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { Query } from 'react-apollo';
import RowPicker from "./rowpicker";
// Define query types

const getAllCountries = gql`
  query getAllCountries{
    getAllCountries{
      id
      name
    }
  }
`;

export const CountryQuery = ({change}) => {
  return (
    <Query
      query={getAllCountries}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, networkStatus }) => 
      {
        if (networkStatus === 4) return <ActivityIndicator />;
        if (loading) return (<ActivityIndicator />);
        if (error) { console.log('data: ', error); }
        
        return (
          <RowPicker 
            data={data.getAllCountries}
            change={change}
            name="Country *"
          />
        );
        
      }}
    </Query>
  );
};

const getAllStatesOfCountry = gql`
  query getAllStatesOfCountry($countryId :Int){
    getAllStatesOfCountry (countryId:$countryId){
      id 
      name
    }
  }
`;

export const StateQuery = ({countryId: countryId ,change}) => {
  return (
    <Query
      query={getAllStatesOfCountry}
      variables={{ countryId: countryId }}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, networkStatus }) => 
      {
        if (networkStatus === 4) return <ActivityIndicator />;
        if (loading) return (<ActivityIndicator />);
        if (error) { console.log('data: ', error); }
        
        return (
          <RowPicker 
            data={data.getAllStatesOfCountry}
            change={change}
            name="State *"
          />
        );
        
      }}
    </Query>
  );
};

const getAllCitiesOfState = gql`
  query getAllCitiesOfState($stateId:Int){
    getAllCitiesOfState (stateId:$stateId){
      id 
      name
    }
  }

`;

export const CityQuery = ({stateId: stateId ,change}) => {
  return (
    <Query
      query={getAllCitiesOfState}
      variables={{ stateId: stateId }}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, networkStatus }) => 
      {
        if (networkStatus === 4) return <ActivityIndicator />;
        if (loading) return (<ActivityIndicator />);
        if (error) { console.log('data: ', error); }
        
        return (
          <RowPicker 
            data={data.getAllCitiesOfState}
            change={change}
            name="City *"
          />
        );
        
      }}
    </Query>
  );
};

export const MerchantQuery =gql`
  query getMerchantById($id:Int!){
    getMerchantById(id:$id){
      id
      confirmed 
    }
  }
`;

