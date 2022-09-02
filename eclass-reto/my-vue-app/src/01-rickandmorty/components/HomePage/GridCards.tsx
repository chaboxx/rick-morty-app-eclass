import { FC, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { getDataQuery } from '../../apollo/querys';


import { Data } from '../../interfaces/characters';


import { LoadingComponent } from './LoadingComponent';
import { CharacterCard } from '../ui/CharacterCard';


import styles from "../../styles/components/HomePage/gridCards.module.css";


interface Props{
  page : number;
}

export const GridCards : FC<Props> = ({page}) => {
  

  const { loading, error, data , refetch } = useQuery<Data>(getDataQuery,{
    variables : {
      page,
    }
  });

  useEffect(() => {
    if ( !error ){
      return;
    }
    
    refetch({
      page : 1
    });


  }, [error])

  if ( loading ){
    return <LoadingComponent/>
  }

  
  
  return (
    <main className={styles.grid_cards_container}>
      <div className={styles.data_list}>
        {
          data!.characters.results.map(element=>(
            <CharacterCard character={element}/>
          ))
        }
      </div>
    </main>
  )
}
