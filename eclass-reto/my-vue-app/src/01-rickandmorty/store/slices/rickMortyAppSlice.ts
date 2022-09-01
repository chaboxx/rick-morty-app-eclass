import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Characters, Data, Result } from '../../interfaces/characters';
import { getData } from '../reducers/rickMortyAppReducer';


export interface RickMortyInitalState{

  favorites : string[];
  page : number;
}

const initialState: RickMortyInitalState = {
  favorites : [],
  page : 1,
};



interface SetFavoritesAction {
  payload: string; //ID Character
  type: string;
}
interface SetCurrentPage {
  payload : number;
  type : string;
}
export const rickMorySlice = createSlice({
  name: 'rickMortyData',
  initialState,
  reducers: {
    setInitalState( state : RickMortyInitalState ){
      const favorites = localStorage.getItem("favorites")?.split(",");

      if ( favorites && favorites.length > 0 ){
        state.favorites = favorites;
      }

    },
    setFavorites( state : RickMortyInitalState , action  : SetFavoritesAction ){
      
      const isRepeted = state.favorites.includes( action.payload );
      
      if ( !isRepeted) {
        state.favorites.push(action.payload);
      }else{
        state.favorites = state.favorites.filter( favorite => favorite !== action.payload );
      }

      localStorage.setItem("favorites",state.favorites.join(","));
    },
    setCurrentPage( state : RickMortyInitalState , action : SetCurrentPage ){
      state.page = action.payload;
    }
  },
  extraReducers : (builder)=> {
    builder.addCase(getData.pending,(state : RickMortyInitalState ,action)=>{
      console.log("pending");
    }),
    builder.addCase(getData.fulfilled,(state : RickMortyInitalState ,action : PayloadAction<Data>)=>{
      console.log("fullfilled");

    }),
    builder.addCase(getData.rejected,(state : RickMortyInitalState ,action)=>{
      console.log("rejected");

    })

  }
})


export const { setInitalState, setFavorites, setCurrentPage } = rickMorySlice.actions;

export default rickMorySlice.reducer;