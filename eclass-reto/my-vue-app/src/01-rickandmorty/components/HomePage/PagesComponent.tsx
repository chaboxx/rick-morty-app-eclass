import { FC, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/slices/rickMortyAppSlice';

import { getNumberPagesQuery } from '../../apollo/querys';
import { DataPages } from '../../interfaces/pages';


import styles from "../../styles/components/HomePage/pagesComponent.module.css";
import { RootState } from '../../store';

export const PagesComponent : FC = () => {
  
  const dispatch = useDispatch();
  const { page }= useSelector(( store: RootState )=> store.rickMorty);

  const { loading ,error ,data ,refetch } = useQuery<DataPages>(getNumberPagesQuery,{
    variables : {
      page : 1,
    }
  });

  useEffect(() => {

    if ( !error ){
      return;
    }
    refetch({
      page : 1,
    })

  }, [error]);
  

  if ( loading ){
    return null;
  }

  return (
    <div className={styles.pages_component_container}>
      <ul className={styles.pages_list}>
        {
          [...new Array(data?.characters.info.pages)].map((_,index)=>(
            <li
              className={[ styles.page_item, page ===index+1 ? styles.page_item_active : "", "pointer" ].join(" ")} 
              key={index} 
              onClick={()=>dispatch(setCurrentPage(index+1))}
            >
              {index+1}
            </li>
          )) 
        }
      </ul>
    </div>
  )
}
