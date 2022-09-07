import { fireEvent, render, screen  } from "@testing-library/react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apolloClient";

import { Provider } from "react-redux";
import store from "../store";

import { AddFavoriteButtonComponent } from "../components/CharacterPage/AddFavoriteButtonComponent";

import { Character } from "../interfaces/character";



test("Add Favorite Button Component Works Correctly",()=>{
  const character = {
    id : "1", 
    image : "https://rick.png" , 
    name : "Rick Sanchez"
  };
  render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        
        <Routes>
          <Route path="/" element={<AddFavoriteButtonComponent character={character as Character}/>}/>
        </Routes>
        
      </ApolloProvider>
    </Provider>,
    {
      wrapper : BrowserRouter
    } 
  );

  const button = screen.getByText("Add Favorite");
  fireEvent.click(button);
  expect(button).toHaveTextContent("Favorite");
})