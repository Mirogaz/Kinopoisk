import React, { useEffect } from 'react';
import getCinema from '../../api/cinema';
import CinemaCard from '../../components/CinemaCard';
import PaginationComponent from '../../components/PaginationComponent';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import usePagination from '../../hooks/usePagination';

import './Cinema.style.scss';

const CinemaList = () => {
    const dispatch = useAppDispatch();
    const {cinema, isLoading, error} = useAppSelector(state => state.cinemaReducer)

    useEffect(() => {
        dispatch(getCinema())
    }, [ ])

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
      } = usePagination({
        contentPerPage: 8,
        count: cinema.length,
      });


    return (
        <div className='main'>
            <div className='main__cinema'>
                {
                    cinema && cinema
                                .slice(firstContentIndex, lastContentIndex)
                                .map(cinema =>
                                <CinemaCard key={cinema.id} cinema={cinema}/>
                                )
                }
            </div>
            <PaginationComponent page={page} nextPage={nextPage} prevPage={prevPage} setPage={setPage} totalPages={totalPages}/>
        </div>

    );
};

export default CinemaList;