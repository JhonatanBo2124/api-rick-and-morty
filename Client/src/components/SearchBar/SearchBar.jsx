import { useState } from 'react';
import style from './SearchBar.module.css'
import { Link } from 'react-router-dom';

export default function SearchBar({onSearch}) {
   let [ id, setId ] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
      console.log('este es el nuevo id', id);
   }

   return (
      <div className={style.container}>
         <Link to='about'><button className={style.boton}>About</button></Link>
         <Link to='/home'><button className={style.boton}>Home</button></Link>
         <Link to='/favorites'><button className={style.boton}>Favorites</button></Link>
         <input className={style.input} type='search' onChange={handleChange} value={id} placeholder='ID PERSONAJE'/>
         <button className={style.boton} onClick={() => onSearch(id)}>Agregar</button>
         <button className={style.boton} onClick={() => onSearch(Math.floor(Math.random()*826))}>Random</button>
      </div>
   );
}
