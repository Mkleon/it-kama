import React, { useState } from 'react';
import classes from './Paginator.module.css';

const Paginator = ({ currentPage, totalItemsCount, countPerPage, changePage, portionSize = 10, ...props }) => {
    const pages = [];
    const pagesCount = Math.ceil(totalItemsCount / countPerPage);

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightportionPageNumber = portionNumber * portionSize;


    return (
        <div className={classes.paginator}>
            {portionNumber > 1 &&
                <button onClick={ () => { setPortionNumber(portionNumber - 1)} } >PREV</button>}
            <div>
                {pages
                    .filter((p) => p >= leftPortionPageNumber && p <= rightportionPageNumber)
                    .map((p) => <span 
                        className={(currentPage === p) ? classes.currentPage : ''} 
                        onClick={(e) => { changePage(p) }}>{p + '  '}
                    </span>)
                }
            </div>
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    )

};

export default Paginator;
