import { fireEvent, render, screen, waitFor  } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import store from "../store";
import client from "../apollo/apolloClient";
import { FavoritesPage } from "../pages/FavoritesPage";
import { AddFavoriteButtonComponent } from "../components/CharacterPage/AddFavoriteButtonComponent";
import { Character } from "../interfaces/character";

test("Renders Favorites Page Correctly", async()=>{
  const character1 = {
    id : "1", 
    image : "https://rick.png" , 
    name : "Rick Sanchez"
  };
  
  render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AddFavoriteButtonComponent character={character1 as Character}/> 
        <Routes>
          <Route path="/" element={<FavoritesPage/>}/>
        </Routes>
        
      </ApolloProvider>
    </Provider>,
    {
      wrapper : BrowserRouter
    } 
  );

  //FIRE EVENT
  const button = screen.getByText("Add Favorite");
  fireEvent.click(button);

  //FAVORITES PAGE
  const title = await waitFor(()=>screen.getByRole("character-name"));
  const img = await waitFor(()=>screen.getByAltText(character1.name));
  expect(img).toBeVisible();
  expect(title).toBeVisible();

})