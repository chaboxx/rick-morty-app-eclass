import { createSlice } from '@reduxjs/toolkit';
import { Result } from '../../interfaces/characters';


export interface RickMortyInitalState{

  favorites : Result[];
  page : number;
}

const initialState: RickMortyInitalState = {
  favorites : [],
  page : 1,
};



interface SetFavoritesAction {
  payload: Result; //ID Character
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
      
      const favorites : Result[] = JSON.parse(localStorage.getItem("favorites") || "");
      if ( !favorites ){
        return;
      }
      const regExp = new RegExp("^[0-9]+$");
      const favoritesCleaned : Result[] = favorites.filter(favorite=>regExp.test(favorite.id));
      localStorage.setItem("favorites",JSON.stringify(favoritesCleaned));
      if ( favoritesCleaned.length > 0 ){
        
        state.favorites = favoritesCleaned;
      }
      
      
    },
    setFavorites( state : RickMortyInitalState , action  : SetFavoritesAction ){
      

      const isRepeted = state.favorites.some( favorite => favorite.id === action.payload.id );
      if ( !isRepeted ) {
        state.favorites.push(action.payload);
      }else{
        state.favorites = state.favorites.filter( favorite => favorite.id !== action.payload.id );
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