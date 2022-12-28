import gql from 'graphql-tag';

// export function createAccountQuery(createAccountInput: CreateAccountInput) {
//     return gql`
//   mutation ($input: ${createAccountInput}) {
//     createAccount(input: $input) {
//       username
//     }
//   }
// `;
// }

export const loginQuery = gql`
  mutation($username:ID!,$password:String!) {
    logIn(username:$username, password:$password){
      customer{
        name
      }
      token
    }
  }
`;
