import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/slices/rickMortyAppSlice';
import { RootState } from '../../store';

import { useQuery } from '@apollo/client';
import { getNumberPagesQuery } from '../../apollo/querys';

import { usePagination } from '../../hooks/usePagination';

import { DataPages } from '../../interfaces/pages';

import styles from "../../styles/components/HomePage/pagesComponent.module.css";

export const PagesComponent : FC = () => {
  
  const dispatch = useDispatch();
  const { page }= useSelector(( store: RootState )=> store.rickMorty);

  const { loading ,error ,data ,refetch } = useQuery<DataPages>(getNumberPagesQuery,{
    variables : {
      page : 1,
    }
  });

  const { links, backPage, nextPage, setInitalPage, setFinalPage } = usePagination(data?.characters.info.pages!);

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
        <li
          onClick={()=>backPage()}
          className={[ styles.page_item, "pointer"].join(" ")}
        >
          {"<"}
        </li>
        <li
          onClick={()=>setInitalPage()}
          className={[ styles.page_item, "pointer", page > 5 ? "show" : "hide"  ].join(" ")}
        >
          ...
        </li>
        {
          links.map((link)=>(
            <li
              className={[ styles.page_item, page ===link ? styles.page_item_active : "", "pointer" ].join(" ")} 
              key={link} 
              onClick={()=>dispatch(setCurrentPage(link))}
            >
              {link}
            </li>
          )) 
        }
        <li
          onClick={()=>setFinalPage()}
          className={[ styles.page_item, "pointer", page < 37 ? "show" : "hide" ].join(" ")}
        >
          ...
        </li>
        <li
          onClick={()=>nextPage()}
          className={[ styles.page_item, "pointer" ].join(" ")}
        >
          {">"}
        </li>
      </ul>
    </div>
  )
}
