import { FC, useEffect ,useMemo } from 'react';

import { useSelector } from 'react-redux';

import { InMemoryCache, useQuery } from '@apollo/client';
import { getFavoritesQuery } from '../apollo/querys';
import { RootState } from '../store';

import { CharacterCard } from '../components/ui/CharacterCard';
import { Navbar } from '../components/ui/Navbar';

import { DataCharacterById } from '../interfaces/charactersById';


import styles from "../styles/pages/favoritesPage.module.css";

export const FavoritesPage : FC = () => {
  const { favorites } = useSelector((store: RootState)=>store.rickMorty);

  // const favorites = useMemo(() =>{
  //   const { favorites } = useSelector((store: RootState)=>store.rickMorty);
  //   return favorites;

  // } , [])

  const { loading, error, data , refetch ,called ,client } = useQuery<DataCharacterById>(getFavoritesQuery,{
    variables : {
      ids : favorites,
    },
    fetchPolicy : "cache-first",
    onCompleted: (data) =>{
      console.log({data});
    }
    
  });
  
  useEffect(() => {
    // 
  }, [data])
  
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
      marginTop : "90px"
    }}> Cargando... </h1>
  } 

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
