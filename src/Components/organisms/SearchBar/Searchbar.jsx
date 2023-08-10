import React, { useState } from 'react';
import style from "./searchbar.module.scss";

const Searchbar = () => {

    const [Search, setSearch] = useState('');

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        
    }
    return(
        <div className={style.searchbar}>
            <div className={style.searchbar__input}>
                <input placeholder="Search Pokemon"
                onChange={onChangeHandler}/>
            </div>
            <div className={style.searchbar__btn}>
                <button onClick={onButtonClickHandler}>Search</button>

            </div>

        </div>
    )
}

export default Searchbar;