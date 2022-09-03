import { FC, useEffect ,useMemo } from 'react';

import { useSelector } from 'react-redux';

import { useQuery } from '@apollo/client';
import { getFavoritesQuery } from '../apollo/querys';
import { RootState } from '../store';

import { CharacterCard } from '../components/ui/CharacterCard';
import { Navbar } from '../components/ui/Navbar';

import { DataCharacterById } from '../interfaces/charactersById';


import styles from "../styles/pages/favoritesPage.module.css";

export const FavoritesPage : FC = () => {
  const { favorites } = useSelector((store: RootState)=>store.rickMorty);

  const { loading, error, data , refetch ,client } = useQuery<DataCharacterById>(getFavoritesQuery,{
    variables : {
      ids : favorites, 
    },
    fetchPolicy : "cache-first",
    
  });
  

  
  useEffect(() => {

    refetch({
      ids : favorites,
    })
    
  }, [favorites])
  
  useEffect(() => {
    if ( !error ){
      return;
    }
    
    refetch({
      ids : favorites,
    })
    
  }, [error])
  
  if( loading ){
    return <h1 style={{
      marginTop : "90px",
      display:"grid",
      placeItems : "center",
    }}> Cargando... </h1>
  } 

  return (
    <>
      <Navbar handleNavigateToStart={()=>{}}/>
      <div className={styles.favorites_page_container}>
        <div className={styles.favorites_page_content}>

          {
            favorites.length === 0 
            ?
            <h4>No hay Favoritos</h4>
            :
            data?.charactersByIds.map(character=>(
              <CharacterCard key={character.id}  character={character}/>
              ))
          }
        </div>
      </div>
    </>
  )
}
