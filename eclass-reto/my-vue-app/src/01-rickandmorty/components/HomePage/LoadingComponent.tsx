import { FC } from 'react';

import styles from "../../styles/components/HomePage/loadingComponent.module.css";

interface Props {
  component : "GridCards" | "CharacterPage";
}
export const LoadingComponent : FC = () => {
  
  return (
    <div className={styles.loading_component_container}>
      <h5 className={styles.loading_text}>Cargando...</h5>
    </div>
  )
}
