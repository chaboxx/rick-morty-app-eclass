import { FC } from 'react';

import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/slices/rickMortyAppSlice';

import { getNumberPagesQuery } from '../../apollo/querys';
import { DataPages } from '../../interfaces/pages';

export const PagesComponent : FC = () => {
  
  const dispatch = useDispatch();

  const { loading ,error ,data } = useQuery<DataPages>(getNumberPagesQuery,{
    variables : {
      page : 1,
    }
  });
  console.log({loading,data});
  return (
    <div>
      <ul>
        {
          [1,2,3].map(page=>(
            <li onClick={()=>dispatch(setCurrentPage(page))}>{page}</li>
          ))
        }
      </ul>
    </div>
  )
}
