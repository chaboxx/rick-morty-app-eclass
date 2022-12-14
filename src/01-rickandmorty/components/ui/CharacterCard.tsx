import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setFavorites } from '../../store/slices/rickMortyAppSlice';


import { Result } from '../../interfaces/characters';


interface Props {
  character : Result;
}

import styles from "../../styles/components/ui/characterCard.module.css";

export const CharacterCard : FC<Props> = ({character}) => {

  const { favorites }  = useSelector((state : RootState) => state.rickMorty );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetFavorite = ( e: React.MouseEvent<HTMLDivElement, MouseEvent>, id : string )=>{
    e.stopPropagation();    
    dispatch(setFavorites(id));
  }


  
  return (
    <div 
      className={[ styles.data_item, "pointer" ].join(" ")} key={character.id}
      onClick={()=>navigate({
        pathname : `/character/${ character.id }`
      })}
    >
      <div
        onClick={(e)=>handleSetFavorite(e,character.id)}
        className={[styles.add_favorite_icon , favorites.includes( character.id ) ? styles.add_favorite_icon_active : styles.add_favorite_icon_not_active ].join(" ")}
      >
      </div>
      <div className={styles.image_container}>
        <img draggable={false} className={styles.img_item} src={character.image} alt={character.name} />

      </div>
      <div className={styles.information_item_container}>

        <h5 role="character-name" className={styles.title}>{character.name}</h5>
      </div>
    </div>
  )
}
