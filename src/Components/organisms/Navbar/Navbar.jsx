import React, {useContext} from "react";
import style from "../Navbar/navbar.module.scss";
import FavoriteContext from "../Contexts/favoritesContext";

const Navbar = () => {

    const {favoritePokemon} = useContext(FavoriteContext);
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return(
        <>
            <div className={style.navbar}>
               <img className={style.navbar__img}
               alt="pokeapi-logo" 
               src={logoImg}
               />
            <div className={style.navbar__home}>🕌 Home </div>
            <div className={style.navbar__heart}>{favoritePokemon ? favoritePokemon.length: 0}❤️ Favorite</div>
            </div>
            
        </>
    )
}

export default Navbar