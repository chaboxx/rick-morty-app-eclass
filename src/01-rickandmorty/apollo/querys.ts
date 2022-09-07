import { gql } from "@apollo/client";

export const getDataQuery = gql`
  query getData($page: Int!) {
    characters(page: $page ){
      results {
        id
        name
        image
      }  

    }
   
 
}`;


export const getCharacterData = gql`
  query getCharacter( $id: ID! ) {
    character(id : $id){
      id
      name
      image
      status
      episode {
        name
      }
      created
      location {
        name
      }
    } 
  }   
`;

export const getNumberPagesQuery = gql`
  query getNumberPages( $page: Int! ) {
    characters(page: $page){
      info{
        pages
      }
  } 
  
}`;

export const getFavoritesQuery = gql`
  query getFavorites( $ids: [ID!]! ) {
    charactersByIds(ids : $ids){
      id
      name
      image
    }
  } 
  
`;


