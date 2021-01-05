import { gql } from "apollo-boost";

const MESSAGE_ADDED = gql`
  subscription messageAdded($chatroomId: String!) {
    messageAdded(chatroomId: $chatroomId) {
      _id
      content
    }
  }
`;

export default MESSAGE_ADDED;
