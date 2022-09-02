import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getFavoritesQuery } from '../apollo/querys';
import { CharacterCard } from '../components/ui/CharacterCard';
import { Navbar } from '../components/ui/Navbar';
import { DataCharacterById } from '../interfaces/charactersById';
import { RootState } from '../store';


import styles from "../styles/pages/favoritesPage.module.css";

export const FavoritesPage : FC = () => {
  const { favorites } = useSelector((store: RootState)=>store.rickMorty);

  const { loading, error, data , refetch } = useQuery<DataCharacterById>(getFavoritesQuery,{
    variables : {
      ids : favorites,
    }
  });
  
  console.log({loading,error,data});

  return (
    <>
      <Navbar/>
      <div className={styles.favorites_page_container}>
        {
          data?.charactersByIds.map(character=>(
            <CharacterCard key={character.id}  character={character}/>
          ))
        }
      </div>
    </>
  )
}
