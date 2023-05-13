import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {

   return (
      <div className={style.cardsStyle}>
         {
            characters.map((personaje) => {
               return <Card 
                  key={personaje.id}
                  id={personaje.id}
                  name={personaje.name}
                  status={personaje.status}
                  species={personaje.species}
                  gender={personaje.gender}
                  origin={personaje.origin.name}
                  image={personaje.image}
                  onClose={onClose}
               />
            })
         }
      </div>
   );
}
