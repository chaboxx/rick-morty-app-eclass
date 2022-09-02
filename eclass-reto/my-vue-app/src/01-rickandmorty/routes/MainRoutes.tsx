import { FC, useLayoutEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setInitalState } from '../store/slices/rickMortyAppSlice';

import { Routes ,Route } from "react-router-dom";

import { HomePage } from '../pages/HomePage';
import { CharacterPage } from '../pages/CharacterPage';
import { FavoritesPage } from '../pages/FavoritesPage';


export const MainRoutes : FC= () => {
 
  const dispatch = useDispatch();
  
  useLayoutEffect(() => {
    dispatch(setInitalState());
  }, [])

  return (
    
    <Routes>

      <Route path="/">
        <Route index element={<HomePage/>}/>
        <Route path="character/:id" element={<CharacterPage/>} />
        <Route path="favorites" element={<FavoritesPage/>} />
        
      </Route>
            
        
    </Routes>
    
  )
}
