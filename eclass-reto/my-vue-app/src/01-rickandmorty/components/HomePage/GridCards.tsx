import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

import { useQuery } from '@apollo/client';
import { getDataQuery } from '../../apollo/querys';

import { LoadingComponent } from '../ui/LoadingComponent';

import { Data } from '../../interfaces/characters';

import { setFavorites } from '../../store/slices/rickMortyAppSlice';

import styles from "../../styles/components/HomePage/gridCards.module.css";

export const GridCards : FC = () => {
  
  const { favorites }  = useSelector((state : RootState) => state.rickMorty );
  const { loading, error, data , refetch } = useQuery<Data>(getDataQuery,{
    variables : {
      page : 1,
    }
  });
  const dispatch : AppDispatch = useDispatch();

  const navigate = useNavigate();

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
            <div 
              className={[ styles.data_item, "pointer" ].join(" ")} key={element.id}
              onClick={()=>navigate({
                pathname : `character/${ element.id }`
              })}
            >
              <div
                onClick={()=>dispatch(setFavorites(element.id))}
                className={[styles.add_favorite_icon , favorites.includes( element.id ) ? styles.add_favorite_icon_active : "" ].join(" ")}
              >
                <span >
                  {
                    favorites.includes( element.id ) ?
                    "*" : "+"
                  }
                </span>
              </div>
              <div>
                <img draggable={false} className={styles.img_item} src={element.image} alt={element.name} />

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
