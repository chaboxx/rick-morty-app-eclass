import { FC, useEffect, useLayoutEffect } from 'react';

import { BrowserRouter,Routes , Route } from "react-router-dom";

import { HomePage } from '../pages/HomePage';

import { Navbar } from '../components/ui/Navbar';
import { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { setInitalState } from '../store/slices/rickMortyAppSlice';
import { CharacterPage } from '../pages/CharacterPage';
import { FavoritesPage } from '../pages/FavoritesPage';

export const MainRoutes : FC= () => {
 
  const dispatch : AppDispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setInitalState())
  }, [])
  return (
    <>
      <BrowserRouter>

        {/* 01-rickandmortyapp */}
        <Routes>
          <Route path="/">
              <Route index element={<HomePage/>}/>
              <Route path="character/:id" element={<CharacterPage/>} />
              <Route path="favorites" element={<FavoritesPage/>} />
          </Route>
        </Routes>
        {/* ... */}
        
      </BrowserRouter>
    </>
  )
}
