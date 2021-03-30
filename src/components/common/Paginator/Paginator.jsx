import React from 'react';
import classes from './Paginator.module.css';

const Paginator = ({ currentPage, totalCountPages, countPerPage, changePage, ...props }) => {
    const pageNumbers = [];
    const pagesCount = Math.ceil(totalCountPages / countPerPage);

    for (let i = 1; i <= pagesCount; i += 1) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map((num) => <span className={(currentPage === num) ? classes.currentPage : ''} onClick={(e) => { changePage(num); }}>{num + '  '}</span>)}
        </div>
    )

};

export default Paginator;
