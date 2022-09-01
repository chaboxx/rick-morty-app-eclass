import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '../components/ui/Navbar';
import { RootState } from '../store';



export const FavoritesPage : FC = () => {
  const { favorites } = useSelector((store: RootState)=>store.rickMorty);
  return (
    <>
      <Navbar/>
      <div>
        {
          favorites.map(favorite=>(
            <div key={favorite}>
              <li>{favorite}</li>
            </div>
          ))
        }
      </div>
    </>
  )
}
