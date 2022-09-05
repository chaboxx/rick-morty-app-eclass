import { FC, PropsWithChildren } from "react";

import { Provider} from "react-redux";

import "../index.css";
import { MainRoutes } from "../routes/MainRoutes";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apolloClient";
import store from "../store";
import { BrowserRouter, Route, Routes } from "react-router-dom";


interface Props extends PropsWithChildren{

}
export const RickAndMortyAppTesting : FC<Props> = ({children}) => {
  
  return (

      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={children}/>
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    
  )
}