import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

export function getAllPlanets() {
    return client.query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
    })
}