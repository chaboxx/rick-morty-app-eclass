import { createSlice } from '@reduxjs/toolkit';
import { Result } from '../../interfaces/characters';


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
      
      const favorites : string[] = JSON.parse(localStorage.getItem("favorites")!);
      if ( !favorites ){
        return;
      }
      const regExp = new RegExp("^[0-9]+$");
      const favoritesCleaned : string[] = favorites.filter(favorite=>regExp.test(favorite));
      if ( favoritesCleaned.length > 0 ){
        localStorage.setItem("favorites",JSON.stringify(favoritesCleaned));
        state.favorites = favoritesCleaned;
        
      }
      
      
    },
    setFavorites( state : RickMortyInitalState , action  : SetFavoritesAction ){
      

      const isRepeted = state.favorites.includes( action.payload );
      if ( !isRepeted ) {
        state.favorites.push(action.payload);
      }else{
        state.favorites = state.favorites.filter( favorite => favorite !== action.payload );
      }
      
      localStorage.setItem("favorites",JSON.stringify(state.favorites));
    },
    setCurrentPage( state : RickMortyInitalState , action : SetCurrentPage ){
      state.page = action.payload;
    }
  }
})


export const { setInitalState, setFavorites, setCurrentPage } = rickMorySlice.actions;

export default rickMorySlice.reducer;