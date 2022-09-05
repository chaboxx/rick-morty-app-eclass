import { FC, useEffect ,useMemo } from 'react';

import { useSelector } from 'react-redux';

import { useQuery } from '@apollo/client';
import { getFavoritesQuery } from '../apollo/querys';
import { RootState } from '../store';

import { CharacterCard } from '../components/ui/CharacterCard';
import { Navbar } from '../components/ui/Navbar';

import { DataCharacterById } from '../interfaces/charactersById';


import styles from "../styles/pages/favoritesPage.module.css";
import { Result } from '../interfaces/characters';
import { LoadingComponent } from '../components/CharacterPage/LoadingComponents';

export const FavoritesPage : FC = () => {
  const { favorites } = useSelector((store: RootState)=>store.rickMorty);

  const { loading, error, data , refetch ,previousData} = useQuery<DataCharacterById>(getFavoritesQuery,{
    variables : {
      ids : favorites, 
    },
    fetchPolicy : "cache-first",
  });

  console.log({error,data,loading,previousData});
  const favoritesWithNetwork : Result[] = useMemo(() => {
    if (!data){
      return previousData?.charactersByIds.filter(element=>favorites.includes( element.id )) || [];

    }
    return data.charactersByIds.filter(element=>!!element.id);
  }, [favorites,data]);

  useEffect(() => {
    if ( !error ){
      return;
    }
    
    refetch({
      ids : favorites,
    })
    
  }, [error])
  

  return (
    <>
      <Navbar handleNavigateToStart={()=>{}}/>
        <div className={styles.favorites_page_container}>
          <div className={styles.favorites_page_content}>

            {
              loading && favoritesWithNetwork.length === 0 ? 
              <LoadingComponent/>
              :
              favorites.length ===0 && favoritesWithNetwork.length === 0 
              ?
              <h4>No hay Favoritos</h4>
              :
              favoritesWithNetwork.map(character=>(
                <CharacterCard key={character.id}  character={character}/>
              ))
            }
          </div>
        </div>
      
    </>
  )
}
