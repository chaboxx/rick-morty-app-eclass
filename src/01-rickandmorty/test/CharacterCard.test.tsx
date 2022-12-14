import { render, screen  } from "@testing-library/react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apolloClient";

import { Provider } from "react-redux";
import store from "../store";

import { CharacterCard } from "../components/ui/CharacterCard";



test("Renders Character Card Correctly",()=>{
  const character = {
    id : "1", 
    image : "https://rick.png" , 
    name : "Rick Sanchez"
  };


  
  render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        
        <Routes>
          <Route path="/" element={<CharacterCard character={character}/>}/>
        </Routes>
        
      </ApolloProvider>
    </Provider>,
    {
      wrapper : BrowserRouter
    } 
  );

  const text = screen.getByRole("character-name");
  const image = screen.getByAltText(character.name);
  expect(text).toHaveTextContent(character.name); 
  expect(image).toBeVisible();
})