import { FC, useLayoutEffect } from "react";

import { Provider } from "react-redux";

import { MainRoutes } from "./routes/MainRoutes";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apolloClient";

import store from "./store";

import "../index.css";
import "./styles/class/index.css";

export const RickAndMortyApp : FC = () => {
  useLayoutEffect(() => {
    


  }, [])

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>

        <MainRoutes /> 
      </Provider>
    </ApolloProvider>
  )
}
