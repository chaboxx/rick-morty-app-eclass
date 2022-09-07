import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../../interfaces/character';
import { RootState } from '../../store';
import { setFavorites } from '../../store/slices/rickMortyAppSlice';


import styles from "../../styles/components/CharacterPage/addFavoriteButtonComponent.module.css";

interface Props{
  character : Character;
}
export const AddFavoriteButtonComponent : FC<Props> = ({character}) => {

  const { favorites } = useSelector((store:RootState)=>store.rickMorty);
  const dispatch = useDispatch();

  return (
    <button
      role="add-favorite-button"
      onClick={()=>dispatch(setFavorites(character.id ))}
      className={[ styles.button_add_favorite, favorites.includes( character.id ) ? styles.button_active : styles.button_not_active ,"pointer" ].join(" ")}
    >
      {
        favorites.includes( character.id ) ? "Favorite" : "Add Favorite"
      }
    </button>
  )
}
