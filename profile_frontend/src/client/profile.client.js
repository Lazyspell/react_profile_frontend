import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.REACT_APP_Graphql_Link,
    // uri: "http://localhost:8080/query",

    cache: new InMemoryCache(),
});
