import React, {useContext} from "react";
import styles from "./pokemon.module.scss";
import FavoriteContext from "../Contexts/favoritesContext";



const Pokemon = (props) => {
    const {favoritePokemon, updateFavoritePokemon} = useContext(FavoriteContext)
    const {pokemon} = props;
    const onHeartClick = () => {
      updateFavoritePokemon(pokemon.name);

    }
    const heart = favoritePokemon.includes(pokemon.name) ? "❤️" : "🖤"
    console.log("bla", favoritePokemon)

    console.log(pokemon.types[0].type)
    return (
        <div className={styles.pokemonCard}
         style={{background: `url('./assets/img/${pokemon.types[0].type.name}.jpeg')`,
          backgroundSize: "cover"}}>
            <div className={styles.pokemonCard__imageContainer}>
                <img alt={pokemon.name} src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} className={styles.pokemonCard__img}/>   
            
            <div className={styles.pokemonCard__cardBody}>
                <div className={styles.pokemonCard__cardBody__cardTop}>
                    <h3>{pokemon.name}</h3>
                    
                    
                </div>
                <div className={styles.pokemonCard__cardBody__cardTypes}>
                    {pokemon.types.map((type, index) => {
                        return(
                            <>
                            <div key={index} className={styles.pokemonCard__cardBody__cardTypes__typeText}  style={{background: `url('./assets/img/${pokemon.types[index].type.name}.jpeg')`,
                             backgroundSize: "cover"}}>{type.type.name}
                            
                            </div> &nbsp;
                           
                    
                            </>

                        )
                    })}
                </div>
                </div>
            </div>
                <div className={styles.pokemonCard__paginacao}>
                  <button className={styles.pokemonCard__paginacao__heartBtn} onClick={onHeartClick}>
                               {heart}
                 </button>
                 <div style={{color: 'white'}}>#{pokemon.id}</div>
               
                </div>
            
        </div>
    )
}

export default Pokemon