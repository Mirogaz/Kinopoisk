import React, { FC } from 'react';
import { UsePaginationReturn } from '../../types/IUsePagination';
import './PaginationComponent.style.scss';

const PaginationComponent: FC<UsePaginationReturn> = ({page, totalPages, prevPage, setPage, nextPage}) => {

    return (
        <div className="pagination">
                <p className="pagination__text">
                {page}/{totalPages}
                </p>
                <button onClick={prevPage} className="pagination__button">
                &larr;
                </button>
                {/* @ts-ignore */}
                {[...Array(totalPages).keys()].map((el) => (
                <button
                    onClick={() => setPage(el + 1)}
                    key={el}
                    className={`pagination__button ${page === el + 1 ? "active" : ""}`}
                >
                    {el + 1}
                </button>
                ))}
                <button onClick={nextPage} className="pagination__button">
                &rarr;
            </button>
      </div>
    );
};

export default PaginationComponent;