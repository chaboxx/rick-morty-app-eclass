import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { getDataQuery } from '../../apollo/querys';

import { LoadingComponent } from '../ui/LoadingComponent';

import styles from "../../styles/components/HomePage/gridCards.module.css";
import { Data } from '../../interfaces/characters';

export const GridCards : FC = () => {
  
  const { loading, error, data } = useQuery<Data>(getDataQuery,{
    variables : {
      page : 1,
    }
  });
  console.log({loading , error , data});
  
  if ( loading ){
    return <LoadingComponent/>
  }

  return (
    <main className={styles.grid_cards_container}>
      <div className={styles.data_list}>
        {
          data!.characters.results.map(element=>(
            <div className={styles.data_item} key={element.id}>
              <div>
                <img className={styles.img_item} src={element.image} alt={element.name} />

              </div>
              <div className={styles.information_item_container}>

                <h5 className={styles.title}>{element.name}</h5>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}
