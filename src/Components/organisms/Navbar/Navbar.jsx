import React from "react";
import style from "../Navbar/navbar.module.scss";

const Navbar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return(
        <>
            <div className={style.navbar}>
               <img className={style.img}
               alt="pokeapi-logo" 
               src={logoImg}
               />
            </div>
        </>
    )
}

export default Navbar