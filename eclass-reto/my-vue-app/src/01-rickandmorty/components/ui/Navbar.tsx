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
          <li 
            onClick={()=>navigate({
              pathname : "/"
            })}
            className={[ styles.navbar_item ,"pointer" ].join(" ")}
          >
            Home 
          </li>
          <li
            onClick={()=>navigate({
              pathname : "/favorites"
            })}
            className={[ styles.navbar_item , "pointer" ].join(" ")}
          >
            Favoritos { `(${ favorites.length })`} 
          </li>
        </ul>
      </nav>
    </>
  )
}
