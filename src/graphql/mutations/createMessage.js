import { gql } from "apollo-boost";

const CREATE_MESSAGE = gql`
  mutation createMessage($messageInput: MessageInput!) {
    createMessage(input: $messageInput) {
      _id
      content
    }
  }
`;

export default CREATE_MESSAGE;
