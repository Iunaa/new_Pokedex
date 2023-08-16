import React, { useState } from 'react';
import style from "./searchbar.module.scss";
import { searchPokemon } from '../../../api/index';


const Searchbar = () => {


    
    const [search, setSearch] = useState('ditto');
    const [pokemon, setPokemon] = useState('');
    console.log(pokemon)


     const onChangeHandler = (e) => {
        
        setSearch(e.target.value.toLowerCase())
   }

    const onButtonClickHandler = async() => {
         const pokemon =  await searchPokemon(search)
        setPokemon(pokemon)

        
     }

   const onSearchHandler = async(pokemon) => {
   const result = await searchPokemon(pokemon)
    

 }

    
    return(
        <div className={style.searchbar}>
            <div className={style.searchbar__search}>
                <input className={style.searchbar__input} placeholder="Search Pokemon"
                onChange={onChangeHandler}/>
            </div>
            <div className={style.searchbar__btn}>
                <button className={style.searchbar__button} onClick={onButtonClickHandler}>Search</button>
            </div>

            {pokemon ? (
                <div>
                    <div>{pokemon.name}</div>
                    <div>{pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            ) : null
           
}

        </div>
    )
}

export default Searchbar;