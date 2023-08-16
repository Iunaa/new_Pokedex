import React, {useContext} from "react";
import style from "../Navbar/navbar.module.scss";
import FavoriteContext from "../Contexts/favoritesContext";

const Navbar = () => {

    const {favoritePokemons} = useContext(FavoriteContext);
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return(
        <>
            <div className={style.navbar}>
               <img className={style.img}
               alt="pokeapi-logo" 
               src={logoImg}
               />
            </div>
            <div>{favoritePokemons.length}❤️</div>
        </>
    )
}

export default Navbar