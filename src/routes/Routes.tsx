// import { ListNicknames } from '../extra/EjercicioDos';
import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RickAndMortyApp } from '../01-rickandmorty';

export const AppRoutes : FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RickAndMortyApp/>} />
      </Routes>
      {/* <Routes>
        <Route 
          element={<ListNicknames names={["Triviño TI", "Homer Dev"," ","a","z", " Ragnar Front", "Loki UX"]} order="DES"/>}
          path="extra-exercise-2" 
        /> 
      </Routes> */}
    </BrowserRouter>
  )
}
