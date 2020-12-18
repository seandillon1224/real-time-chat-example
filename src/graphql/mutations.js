import { gql } from "apollo-boost";

const MAKE_MESSAGE = gql`
  mutation makeMessage($user: String!, $content: String!) {
    makeMessage(user: $user, content: $content) {
      id
      content
      user
    }
  }
`;

export { MAKE_MESSAGE };
