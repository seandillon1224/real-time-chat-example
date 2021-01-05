import { gql } from "apollo-boost";

const REFRESH_TOKEN = gql`
  mutation refreshUserToken($userId: ID!) {
    refreshUserToken(userId: $userId) {
      token
      user {
        _id
      }
    }
  }
`;

export default REFRESH_TOKEN;
