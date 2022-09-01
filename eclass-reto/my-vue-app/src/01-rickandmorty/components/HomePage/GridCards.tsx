import { FC } from 'react';

const data = [
  {
    id : 1,
    name : "Rick Sanchez",
  },
  {
    id : 2,
    name : "Rick Sanchez",
  },
  {
    id : 3,
    name : "Rick Sanchez",
  },
  {
    id : 4,
    name : "Rick Sanchez",
  },
  {
    id : 5,
    name : "Rick Sanchez",
  },
]


import styles from "../../styles/components/HomePage/gridCards.module.css";

export const GridCards : FC = () => {
  return (
    <main className={styles.grid_cards_container}>
      <div className={styles.data_list}>
        {
          data.map(element=>(
            <div className={styles.data_item} key={element.id}>
              <img className={styles.img_item} src="https://sm.ign.com/ign_de/screenshot/default/blob_ejyt.jpg" alt="img" />
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
