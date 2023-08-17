import React from "react";
import styles from "./pagination.module.scss";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return(
        <div className={styles.paginationContainer}>
            <button className={styles.paginationContainer__left} onClick={onLeftClick}><div>⇦</div></button>
            <div>{page} de {totalPages}</div>
            <button className={styles.paginationContainer__right} onClick={onRightClick}><div>⇨</div></button>


        </div>
    )

}

export default Pagination