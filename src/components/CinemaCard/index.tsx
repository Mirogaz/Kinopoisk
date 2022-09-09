import React, { FC } from 'react';
import { ICinema } from '../../types/ICinema';

import './CinemaCard.style.scss'
interface CinemaCardProps {
    cinema: ICinema;
}

const CinemaCard: FC<CinemaCardProps> = (props) => {
    const {cinema} = props;
    console.log(cinema)

    return (
        <div className='card'>
            <p className='card__name'>{cinema.name}</p>
            <p className='card__rate'>{cinema.rate}/100</p>
            <img className='card__poster' src={cinema.poster}/>
        </div>
    );
};

export default CinemaCard;