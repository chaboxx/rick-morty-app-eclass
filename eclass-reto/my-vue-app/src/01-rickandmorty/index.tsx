import { FC } from "react";

import { connect, Provider} from "react-redux";

import { MainRoutes } from "./routes/MainRoutes";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apolloClient";

import store from "./store";

import "../index.css";


export const RickAndMortyApp : FC = () => {
  
  return (

      <Provider store={store}>
        <ApolloProvider client={client}>
          <MainRoutes /> 
        </ApolloProvider>
      </Provider>
    
  )
}