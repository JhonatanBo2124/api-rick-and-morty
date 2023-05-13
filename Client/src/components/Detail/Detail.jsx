import { useParams } from 'react-router-dom'
import style from './Detail.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

const Detail = () => {
    const { id } = useParams();
    let [ character, setCharacter ] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     console.log(character.specie);
    return (
        <>
        <div className={style.container}>
            <div className={style.borde}>
                <div>
                    <img className={style.imagen} src={character.image} alt='' />
                    <h1 className={style.nombre}>{character.name ? character.name : null}</h1>
                </div>
                <div className={style.info}>
                    <h2>Status: {character.status ? character.status : null}</h2>
                    <h2>Spacie: {character.specie ? character.specie : 'Not found'}</h2>
                    <h2>Gender: {character.gender ? character.gender : null}</h2>
                    <h2>Origin: <br/>{character.origin ? character.origin.name : null}</h2>
                    <h2>ID: {character.id ? character.id : null}</h2>
                </div>
            </div>
        </div> 
        </>
    )
}
export default Detail;