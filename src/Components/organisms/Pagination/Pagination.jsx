import React from "react";
import styles from "./pagination.module.scss";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return(
        <div className={styles.paginationContainer}>
            <button onClick={onLeftClick}><div>←</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>→</div></button>


        </div>
    )

}

export default Pagination