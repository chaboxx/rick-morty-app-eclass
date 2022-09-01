import { FC } from "react";

import { GridCards } from "../components/HomePage/GridCards";

import styles from "../styles/pages/homePage.module.css";

export const HomePage : FC = () => {
  return (
    <div className={styles.home_page_container}>
      <GridCards/>
      
    </div>
  )
}
