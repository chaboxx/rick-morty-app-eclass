import { FC, MutableRefObject, useRef } from "react";
import { useSelector } from "react-redux";

import { GridCards } from "../components/HomePage/GridCards";
import { PagesComponent } from "../components/HomePage/PagesComponent";
import { Navbar } from "../components/ui/Navbar";
import { RootState } from "../store";

import styles from "../styles/pages/homePage.module.css";

export const HomePage : FC = () => {

  const { page } = useSelector((store : RootState )=>store.rickMorty )

  const homePageStart = useRef<HTMLDivElement>(null);

  const handleNavigateToStart = () =>{
    homePageStart.current?.scrollIntoView();
  }

  return (
    <>
      <Navbar handleNavigateToStart={handleNavigateToStart}/>
      <div ref={homePageStart} className={styles.home_page_container}>
        <div className={styles.home_page_content}>

          <GridCards page={page}/>
          <PagesComponent/>
        </div>
      </div>
    </>
  )
}
