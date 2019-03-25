import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

export const client = new ApolloClient({
  link: new HttpLink({
    credentials: "include",
   // uri: process.env.REACT_APP_SERVER_URL
   uri: "https://polar-journey-65278.herokuapp.com/"
  }),
  cache: new InMemoryCache()
});
