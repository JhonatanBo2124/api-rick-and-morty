import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css';
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
    const myFavorites = useSelector(state => state.myFavorites);
    const allCharacters = useSelector(state => state.allCharacters);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
                {allCharacters.length > 0 && <div>
                    <select className={style.options} onChange={handleOrder}>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                    <select className={style.options} onChange={handleFilter}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                </div>}
                <div className={style.favStyle}>
                    {
                        myFavorites?.map(fav => {
                            return <Card 
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            status={fav.status}
                            species={fav.species}
                            gender={fav.gender}
                            origin={fav.origin?.name}
                            image={fav.image}
                        />
                        })
                    }
                </div>
        </div>
    )
}
export default Favorites;