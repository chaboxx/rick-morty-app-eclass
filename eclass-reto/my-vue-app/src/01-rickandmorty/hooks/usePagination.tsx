import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCurrentPage } from "../store/slices/rickMortyAppSlice";


export const usePagination = ( pages : number ) =>{
  
  const { page } = useSelector((store : RootState) => store.rickMorty );
  const dispatch = useDispatch();
  const [links, setLinks] = useState<number[]>([]);

  const backPage = ( ) =>{
    if ( page === 1 ){
      return;
    }
    dispatch(setCurrentPage(page-1));

    setLinks(links=>links.map(link=>link-1));
  
  }
  
  const nextPage = () =>{
    if ( page+5 > pages ){
      return;
    }
    dispatch(setCurrentPage(page+1));
    setLinks(links=>links.map(link=>link+1));
    
  }

  const setInitalPage = () =>{
    const array : number[] = [];
    for ( let i= 0 ; i < 5 ; i ++ ){
      array.push(i+page);
    }
    setLinks(array);
    dispatch(setCurrentPage(1));

  }

  const setFinalPage = () =>{
    const array : number[] = [];
    for ( let i = 38 ; i < 43 ; i ++ ){
      array.push(i);
    }
    setLinks(array);
    dispatch(setCurrentPage(42));
  }
  useEffect(() => {
    const array : number[] = [];
    if ( page+5 > pages ){
      for ( let i= (pages - page) - 4 ; i < ( pages - page ) +1  ; i ++ ){
        array.push(i+page);
      }
    }else{
      for ( let i =0 ; i <5 ;i++ ){
        if ( i+page <= pages ){
          array.push(i+page);
        }
      }

    }
    
    setLinks(array);
  }, [page,pages])
  
  return{
    links,
    setInitalPage,
    setFinalPage,
    backPage,
    nextPage,
  }


}