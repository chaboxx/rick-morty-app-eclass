
import { useQuery } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataQuery } from "../../apollo/querys";
import { Data } from "../../interfaces/characters";




const getDataApi = async () => {
  try {
    const { loading, error, data } = useQuery<Data>(getDataQuery,{
      variables : {
        page : 1,
      }
    });
    console.log({loading , error , data});
    return { } as Data;
    
  } catch (error) {
    throw new Error("Error");
  }

}



export const getData = createAsyncThunk( "getData",getDataApi );