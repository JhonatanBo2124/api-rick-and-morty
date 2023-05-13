import { NavLink } from 'react-router-dom';
import style from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function Card(props) {
   let [isFav, setIsFav] = useState(false);

   const myFavorites = useSelector((state) => state.myFavorites)
   const dispatch = useDispatch();

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = (event) => {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(props.id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   }

   return (
      <div className={style.cardStyle}>
         <div className={style.buttons}>
            { isFav ? (<button className={style.boton} onClick={handleFavorite}>💛</button>)
             : (<button className={style.boton} onClick={handleFavorite}>🤍</button>)}
            { props.onClose && <button className={style.boton} onClick={() => props.onClose(props.id)}>X</button>}
         </div>
         <NavLink className={style.nombre} to={`/detail/${props.id}`}>
            <h2 className={style.nombre}>{props.name}</h2>
         </NavLink>
         <h2>{props.status}</h2>
         <h2>{props.specie}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img className={style.imagen} src={props.image} alt='' />
      </div>
   );
}
