import { gql } from "apollo-boost";

const CREATE_CHAT_ROOM = gql`
  mutation createChatRoom($chatroomInput: ChatroomInput!) {
    createChatRoom(input: $chatroomInput) {
      _id
      messages {
        _id
      }
    }
  }
`;

export default CREATE_CHAT_ROOM;
