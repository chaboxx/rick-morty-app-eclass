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

