import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.REACT_APP_Graphql_Link,
    uri: "https://profile-backend-go-tpy8r.ondigitalocean.app/query",
    // uri: "http://localhost:8080/query",

    cache: new InMemoryCache(),
});
