import { FC, useLayoutEffect } from "react";

import { MainRoutes } from "./routes/MainRoutes";

import { ApolloProvider } from "@apollo/client";

import client from "./apollo/apolloClient";

import "../index.css";
import "./styles/class/index.css";

export const RickAndMortyApp : FC = () => {
  useLayoutEffect(() => {
    
    

  }, [])

  return (
    <ApolloProvider client={client}>
      <MainRoutes /> 
    </ApolloProvider>
  )
}
