import React, { useState } from 'react';
import style from "./searchbar.module.scss";



const Searchbar = (props) => {

    const [search, setSearch] = useState('ditto');
    const {onSearchHandler} = props

    const onChangeHandler = (e) => {
        setSearch(e.target.value.toLowerCase())
        if(e.target.value.toLowerCase() === 0){
            onSearchHandler(undefined)
        }
   }

    const onButtonClickHandler = () => {
         onSearchHandler(search)

        
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