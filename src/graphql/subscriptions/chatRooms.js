import { gql } from "apollo-boost";

const CHATROOMS = gql`
  subscription chatrooms($user: String!) {
    chatrooms(user: $user) {
      _id
      messages {
        _id
        content
      }
    }
  }
`;

export default CHATROOMS;
