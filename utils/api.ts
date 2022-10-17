import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

export function getAllPlanets() {
  return client.query({
    query: gql`
      query Planets {
        allPlanets {
          planets {
            id
            gravity
            name
            orbitalPeriod
            population
            terrains
            diameter
            climates
            rotationPeriod
            surfaceWater
          }
        }
      }
    `,
  });
}
