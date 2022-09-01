import { FC } from "react";
import { useSelector } from "react-redux";

import { GridCards } from "../components/HomePage/GridCards";
import { PagesComponent } from "../components/HomePage/PagesComponent";
import { Navbar } from "../components/ui/Navbar";
import { RootState } from "../store";

import styles from "../styles/pages/homePage.module.css";

export const HomePage : FC = () => {

  const { page } = useSelector((store : RootState )=>store.rickMorty )

  return (
    <>
      <Navbar/>
      <div className={styles.home_page_container}>
        <GridCards page={page}/>
        <PagesComponent/>
      </div>
    </>
  )
}
