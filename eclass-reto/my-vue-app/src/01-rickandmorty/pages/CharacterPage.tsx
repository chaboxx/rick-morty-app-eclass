import { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { getCharacterData } from '../apollo/querys';

import { DataCharacter } from '../interfaces/character';


import styles from "../styles/pages/characterPage.module.css";
import { LoadingComponent } from '../components/CharacterPage/LoadingComponents';
import { Navbar } from '../components/ui/Navbar';

export const CharacterPage : FC = () => {

  const { id } = useParams();

  const { loading , error , data , refetch } = useQuery<DataCharacter>(getCharacterData,{
    variables : {
      id,
    },
  });
  
  useEffect(() => {
    if ( !error ){
      return;
    }
    refetch({
      id,
    })
  }, []);

  // const verRef = useRef<HTMLParagraphElement>(null);
  const episodesText = useRef<HTMLParagraphElement>(null);
  
  const handleVerMas = (e : React.MouseEvent<HTMLParagraphElement, MouseEvent> ) =>{

    if ( e.currentTarget.textContent === "Ver mas..." ){
      e.currentTarget.textContent = "Ver menos..."
      episodesText!.current!.style.maxHeight = "100%";

    }else{
      e.currentTarget.textContent = "Ver mas..."
      episodesText!.current!.style.maxHeight = "calc(22px * 6)";

    }


  } 

  if ( loading ){
    return <LoadingComponent/>
  }

  
  return (
    <>
      <Navbar/>
      <main className={styles.character_page_container}>
        <div className={styles.image_container}>
          <img className={styles.image} src={data?.character.image} alt={data?.character.name} />
        </div>
        <div className={styles.character_info_container}>
          <p className={styles.character_status}>{data?.character.status}</p>
          <h3 className={styles.character_name}>{data?.character.name}</h3>
          <div className={styles.episodes_info_container}>
            <p className={styles.episodes_label} >Episodes:</p>
            <div ref={episodesText} className={styles.episodes}>
              <p className={styles.episodes_text}>
                {
                  data!.character.episode.map(episode=>episode.name).join(", ")
                }
              </p>
            </div>
            <p 
              className={[ data!.character.episode.map(episode=>episode.name).join(", ").length > 640 ? "show pointer" : "hide" , styles.ver_text ].join(" ")}
              onClick={handleVerMas}
            >
              Ver mas...
            </p>
          </div>
          <div className={styles.created}>Created : {new Date(data?.character.created!).toLocaleDateString("es-PE")}</div>
        </div>
      </main>
    </>
  )
}
