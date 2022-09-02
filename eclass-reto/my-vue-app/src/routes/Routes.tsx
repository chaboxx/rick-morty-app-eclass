import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RickAndMortyApp } from '../01-rickandmorty';

export const AppRoutes : FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RickAndMortyApp/>} />
      </Routes>
    </BrowserRouter>
  )
}
