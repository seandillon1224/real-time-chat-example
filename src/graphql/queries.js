import { gql } from "apollo-boost";

const MESSAGES = gql`
  subscription {
  messages{
    id
    content
    user
  }
}
`;

export { MESSAGES };
