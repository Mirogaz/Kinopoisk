import React, { FC } from 'react';
import { ICinema } from '../../types/ICinema';
import './CinemaInformation.style.scss';
import { useParams } from 'react-router';

interface ICinemaInformation {
    cinema?: ICinema;
}

const CinemaInformation: FC<ICinemaInformation> = () => {
    const {id, name, post, rate} = useParams();

    return (
        <div className='information'>
            {id}
            {name}
        </div>
    );
};

export default CinemaInformation;