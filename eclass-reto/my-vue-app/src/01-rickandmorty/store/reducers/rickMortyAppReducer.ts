
import { QueryResult, useQuery } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataQuery } from "../../apollo/querys";
import { Data } from "../../interfaces/characters";
import { RickMortyInitalState } from "../slices/rickMortyAppSlice";






const getDataApi = async () => {
  try {
    
    
    // const resp = await fetch("")
      
   

    
    return {} as Data;
    
  } catch (error) {
    throw new Error("Error");
  }

}



export const getData = createAsyncThunk( "getData",getDataApi );