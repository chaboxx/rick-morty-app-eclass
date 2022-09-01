import { FC } from 'react';

import { BrowserRouter,Routes , Route } from "react-router-dom";

import { HomePage } from '../pages/HomePage';

import { Navbar } from '../components/ui/Navbar';

export const MainRoutes : FC= () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>

          <Route path="/">
              <Route index element={<HomePage/>}/>
          </Route>
        </Routes>    
      </BrowserRouter>
    </>
  )
}
