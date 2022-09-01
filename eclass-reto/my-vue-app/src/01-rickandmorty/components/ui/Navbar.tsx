import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';


import styles from "../../styles/components/ui/navbar.module.css";

export const Navbar : FC = () => {
  const { favorites }  = useSelector((state : RootState) => state.rickMorty );
  
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.navbar_container}>
        <ul className={styles.navbar_items}>
          <li className={styles.navbar_item}>
            Home 
          </li>
          <li
            onClick={()=>navigate({
              pathname : "favorites"
            })}
            className={styles.navbar_item}
          >
            Favoritos { `(${ favorites.length })`} 
          </li>
        </ul>
      </nav>
    </>
  )
}
