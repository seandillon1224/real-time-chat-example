import { gql } from "apollo-boost";

const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      user {
        _id
        name
        email
      }
      token
    }
  }
`;

export default CREATE_USER;
