// lib/withApollo.js
import withApollo from "next-with-apollo";
import { ApolloProvider, ApolloLink } from "@apollo/react-hooks";
import { split, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import nextCookie from "next-cookies";

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `ws://localhost:4000/graphql`,
      options: {
        reconnect: true,
      },
    })
  : null;
const authLink = setContext((req, { headers }) => {
  // return the headers to the context so httpLink can read them
  const { token } = nextCookie(req);
  return {
    headers: {
      ...headers,
      authorization: token || "",
    },
  };
});

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: ApolloLink.from([authLink, splitLink]),
      cache: new InMemoryCache().restore(initialState || {}),
      credentials: "include",
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
