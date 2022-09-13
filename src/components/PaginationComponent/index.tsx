import React, { FC } from 'react';
import './PaginationComponent.style.scss';

interface PaginationComponent {
    nextPage?: () => void;
    lastPage?: () => void;
    page: number;
}

const PaginationComponent: FC<PaginationComponent> = ({nextPage, lastPage, page}) => {

    return (
        <div className="pagination">
                <p className="pagination__text">
                </p>
                <button onClick={lastPage} className="pagination__button">
                &larr;
                </button>
                <button
                    className={`pagination__button ${1 ? "active" : ""}`}
                >
                    {page}
                </button>
                <button onClick={nextPage} className="pagination__button">
                &rarr;
            </button>
      </div>
    );
};

export default PaginationComponent;