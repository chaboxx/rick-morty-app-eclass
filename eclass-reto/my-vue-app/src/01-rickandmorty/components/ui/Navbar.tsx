import { FC } from 'react';


import styles from "../../styles/components/ui/navbar.module.css";

export const Navbar : FC = () => {
  return (
    <nav className={styles.navbar_container}>
      <ul className={styles.navbar_items}>
        <li className={styles.navbar_item}>
          Home 
        </li>
        <li className={styles.navbar_item}>
          Favoritos
        </li>
      </ul>
    </nav>
  )
}
