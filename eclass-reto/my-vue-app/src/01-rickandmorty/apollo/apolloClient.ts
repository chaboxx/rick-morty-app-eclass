import { ApolloClient, gql, InMemoryCache } from "@apollo/client";



const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache : new InMemoryCache(),
});


client.query({
  query: gql`
    query getData($page:Number!) {
      results {
        id
        name
        image
      }
    }
  `,

  
}).then((result) => console.log(result));


export default client;