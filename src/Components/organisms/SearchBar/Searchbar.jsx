import React, { useState } from 'react';
import style from "./searchbar.module.scss";

const Searchbar = (props) => {

    const {onSearch} = props
    const [search, setSearch] = useState('');

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        const pokemon = onSearch(search)
        console.log("pokemon:", search)

        
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

        </div>
    )
}

export default Searchbar;