import { FC } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';


import styles from "../../styles/components/ui/navbar.module.css";

interface Props{
  handleNavigateToStart : () => void;
}

export const Navbar : FC<Props> = ({handleNavigateToStart}) => {
  
  const { favorites }  = useSelector((state : RootState) => state.rickMorty );
  
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  return (
    <>
      <nav className={styles.navbar_container}>
        <ul className={styles.navbar_items}>
          <li 
            onClick={()=>navigate({
              pathname : "/"
            })}
            className={[ styles.navbar_item ,"pointer" , pathname === "/" ? styles.navbar_item_active : "" ].join(" ")}
            onDoubleClick={()=>handleNavigateToStart()}
          >
            Home 
          </li>
          <li
            onClick={()=>navigate({
              pathname : "/favorites"
            })}
            className={[ styles.navbar_item , "pointer", pathname === "/favorites" ? styles.navbar_item_active : "" ].join(" ")}
          >
            Favorites { `(${ favorites.length })`} 
          </li>
        </ul>
      </nav>
    </>
  )
}
