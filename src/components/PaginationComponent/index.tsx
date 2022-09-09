import React, { FC } from 'react';
import { UsePaginationReturn } from '../../types/IUsePagination';
import './PaginationComponent.style.scss';

const PaginationComponent: FC<UsePaginationReturn> = ({page, totalPages, prevPage, setPage, nextPage}) => {

    return (
        <div className="pagination">
                <p className="text">
                {page}/{totalPages}
                </p>
                <button onClick={prevPage} className="page">
                &larr;
                </button>
                {/* @ts-ignore */}
                {[...Array(totalPages).keys()].map((el) => (
                <button
                    onClick={() => setPage(el + 1)}
                    key={el}
                    className={`page ${page === el + 1 ? "active" : ""}`}
                >
                    {el + 1}
                </button>
                ))}
                <button onClick={nextPage} className="page">
                &rarr;
            </button>
      </div>
    );
};

export default PaginationComponent;