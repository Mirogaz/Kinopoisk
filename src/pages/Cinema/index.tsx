import React, { useEffect } from 'react';
import getCinema from '../../api/cinema';
import CinemaCard from '../../components/CinemaCard';
import PaginationComponent from '../../components/PaginationComponent';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { paginationSlice } from '../../redux/reducer/PaginationSlice';

import './Cinema.style.scss';

const CinemaList = () => {
    const dispatch = useAppDispatch();
    const {cinema, isLoading, error} = useAppSelector(state => state.cinemaReducer);
    const {page} = useAppSelector(state => state.paginationReducer);
    let limit = 8;


    useEffect(() => {
        dispatch(getCinema(page, limit));
    }, [ ])

    const nextPage = () => {
        dispatch(paginationSlice.actions.openNextPage)
        console.log(page)
    }


    return (
        <div className='main'>
            <div className='main__cinema'>
                {
                    cinema && cinema
                                .map(cinema =>
                                <CinemaCard key={cinema.id} cinema={cinema}/>
                                )
                }
            </div>
            <PaginationComponent
                nextPage={nextPage}
                lastPage={() => dispatch(getCinema(Number(dispatch(paginationSlice.actions.openLastPage)), limit))}
                page={page}
            />
        </div>

    );
};

export default CinemaList;