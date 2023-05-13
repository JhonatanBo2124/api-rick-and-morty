import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import inicio from './images/Rick-And-Morty-Transparent-Images.png';
import logo from './images/Rick-And-Morty-Logo2.png'
import axios from 'axios';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { removeFav } from './redux/actions';

function App() {
   let [characters, setCharacters] = useState([]);

   let { pathname } = useLocation();

   const myFavorites = useSelector(state => state.myFavorites);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   // const EMAIL = 'jhonatan@gmail.com';
   // const PASSWORD = 'user123';

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      // .then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
      // });
   }
   useEffect(() => {
      !access && navigate('/');
   },[access, navigate]);

   const onSearch = async(id) => {
      if(id && !characters.find(character => character.id === Number(id))){
         try {

            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            setCharacters((characters) => [...characters, data]);
         }
         //.then(({ data }) => {
         //})
         catch(error){
            window.alert('¡No hay personajes con este ID!');
         } 
            
      }
   }
   const onClose = (id) => {
      setCharacters(characters.filter((characters) => characters.id !== Number(id)));
      dispatch(removeFav(id));
   }
   return (
      <div className={style.App}>
         {pathname !== '/' && <div className={style.nav}>
            <img className={style.Imagen} src= {logo} alt=''/>
            <Nav onSearch={onSearch}/>
         </div>}
         {characters.length === 0 & pathname === '/home' && <img src={inicio} className={style.logo} alt=''/>}
         {myFavorites.length === 0 & pathname === '/favorites' && <img src={inicio} className={style.logo} alt=''/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
