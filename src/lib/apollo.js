// lib/withApollo.js
import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import {split, HttpLink, ApolloClient, InMemoryCache} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities';
import {WebSocketLink} from '@apollo/client/link/ws'

const wsLink = process.browser ? new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
}) : null;

const httpLink = new HttpLink({
  uri: "http://localhost:4000/",
})

const splitLink = process.browser ? split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
) : httpLink;

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache().restore(initialState || {}),
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
