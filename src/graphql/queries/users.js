import { gql } from "apollo-boost";

const USERS = gql`
  query users {
    users {
      _id
      email
      name
    }
  }
`;

export default USERS;
