import { useQuery } from "@apollo/client";

import { getDataQuery } from "../apollo/querys";

export const useApolloClient = ( ) =>{

  const { loading, error, data } = useQuery(getDataQuery,{
    variables : {
      page : 1,
    }
  });

}