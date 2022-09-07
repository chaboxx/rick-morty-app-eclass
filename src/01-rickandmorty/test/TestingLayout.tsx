import { FC, PropsWithChildren } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider} from "react-redux";
import store from "../store";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apolloClient";

interface Props extends PropsWithChildren{
  // element : JSX.Element | JSX.Element[];
  path: string;
}
export const RickAndMortyAppTesting : FC<Props> = ({children,path}) => {
  
  return (

      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path={path} element={children}/>
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    
  )
}