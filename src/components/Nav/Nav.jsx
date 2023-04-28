//import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch}) => {
    return (
        <>
        <SearchBar onSearch={onSearch}/>
        </>
    )
}

export default Nav;