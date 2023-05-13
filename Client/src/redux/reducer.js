import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state, 
                myFavorites: action.payload, allCharacters: action.payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload
            }
        case FILTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters.filter(character => character.gender === action.payload)]
            }
        case ORDER:
            const orderCharacters = state.allCharacters.sort((a,b) => {
                if(action.payload === 'A'){
                    if(a.id < b.id) return -1;
                    return 1;
                } if(action.payload === 'D'){
                    if(a.id > b.id) return -1;
                    return 1;
                }
            });
            return {
                ...state,
                myFavorites: [...orderCharacters]
            }
            // if(action.payload === 'A'){
            //     return {
            //         ...state,
            //         myFavorites: state.allCharacters.sort((a,b) => {
            //             if(a.id < b.id) return -1;
            //             return 1;
            //         })
            //     }
            // } else if(action.payload === 'D') {
            //     return {
            //         ...state,
            //         myFavorites: state.allCharacters.sort((a,b) => {
            //             if(a.id > b.id) return -1;
            //             return 1;
            //         })
            //     }
            // }
            // break;
        default:
            return state;
    }
}

export default reducer;