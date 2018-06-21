import gql from 'graphql-tag';

const loginMutation = gql`
  mutation loginMerchant($email: String!, $password: String!) {
    loginMerchant(email: $email, password: $password) {
      merchant{
      email
      password}
      token
    }
  }
`;

export default loginMutation;
