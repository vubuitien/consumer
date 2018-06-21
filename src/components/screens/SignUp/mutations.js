import gql from 'graphql-tag';

const SignupMutation = gql`
mutation signupMerchant(
  $username: String!,
  $email: String!,
  $password: String!,
  $firstName: String,
  $lastName: String,
  $telephone: String,
  $street: String!,
  $cityId: Int!,
  $stateId: Int!,
  $countryId: Int!,
  $categoryIds: [Int],
  $taxNumber: String,
  ){
  signupMerchant(
    username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName,
    telephone: $telephone, street: $street, cityId: $cityId, stateId: $stateId, countryId: $countryId,
    categoryIds: $categoryIds, taxNumber: $taxNumber)
    {
      id
      username
      email
      password
      firstName
      lastName
      telephone
      taxNumber
    }
  }
`;

export default SignupMutation;
