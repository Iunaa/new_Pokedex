import style from "./pokedex.module.scss";
import React from "react";
import Pokemon from "../PokemonCard/Pokemon";
import Pagination from "../Pagination/Pagination";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;
    // const [pokemon, setPokemon] = useState('');
    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const onRightClickHandler = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1);
        }
    };
    return (
        <div className={style.pokedex}>
            <div className={style.pokedex__header}>
                <h1 className={style.pokedex__header__title}>Pokedéx</h1>
                <Pagination //só recebe por componentes pais
                    page={page + 1} //página atual
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className={style.pokedex__grid}>
                    {pokemons &&
                        pokemons.map((pokemon, index) => {
                            return <Pokemon key={index} pokemon={pokemon} />;
                        })}
                </div>
            )}
        </div>
    );
};

export default Pokedex;
