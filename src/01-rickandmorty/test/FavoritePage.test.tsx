import { render, screen  } from "@testing-library/react";

import { FavoritesPage } from "../pages/FavoritesPage";

import { RickAndMortyAppTesting } from "./TestingLayout";

test("Renders Character Card Correctly",()=>{
  const character = {
    id : "1", 
    image : "https://rick.png" , 
    name : "Rick Sanchez"
  };

  render(<RickAndMortyAppTesting path="/">
    <FavoritesPage />
  </RickAndMortyAppTesting>);

  const text = screen.getByRole("character-name");
  const image = screen.getByAltText(character.name);
  expect(text).toHaveTextContent(character.name); 
  expect(image).toBeVisible();
})