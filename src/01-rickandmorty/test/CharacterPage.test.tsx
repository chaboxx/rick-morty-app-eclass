import { render, screen, waitFor  } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apolloClient";

import { CharacterPage } from "../pages/CharacterPage";



test("Renders Character Page With Path Correctly",async()=>{
  const character1 = {
    id : "1", 
    image : "https://rick.png" , 
    name : "Rick Sanchez"
  };

  render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Link role="redirect" to="/character/1">Go Character Page</Link>
        <Routes>
          <Route path="/character/:id" element={<CharacterPage/>}/>
        </Routes>
        
      </ApolloProvider>
    </Provider>,
    {
      wrapper : BrowserRouter
    } 
  );

  //FIRE EVENT 
  const user = userEvent.setup();
  expect(screen.getByRole("redirect")).toBeInTheDocument();
  await user.click(screen.getByRole("redirect"));

  //CHARACTER PAGE
  const img = await waitFor(()=>screen.getByAltText(character1.name));
  const title = await waitFor(()=>screen.getByText(character1.name));
  const description = await waitFor(()=>screen.getByRole("character-description"));
  expect(img).toBeVisible();
  expect(title).toBeVisible();
  expect(description).toBeVisible();

})