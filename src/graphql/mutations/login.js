import { gql } from "apollo-boost";

const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        name
        email
        _id
      }
    }
  }
`;

export default LOGIN;
