import { FC, useEffect, useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setInitalState } from '../store/slices/rickMortyAppSlice';

import { Routes ,Route } from "react-router-dom";

import { HomePage } from '../pages/HomePage';
import { CharacterPage } from '../pages/CharacterPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { RootState } from '../store';


export const MainRoutes : FC= () => {
 
  const dispatch = useDispatch();
  
  useEffect(() => {
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
