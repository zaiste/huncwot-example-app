import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const defaultClient = new ApolloClient({
  link: new HttpLink({
    uri: '/graphql',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

import Vue from 'vue';
import VueApollo from 'vue-apollo';
Vue.use(VueApollo);

const apolloProvider = new VueApollo({ defaultClient });
const provide = apolloProvider

export default provide;
