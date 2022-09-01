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
