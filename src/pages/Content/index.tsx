import React from 'react';
import CinemaList from '../Cinema';
import NavBar from '../NavBar';
import './Content.style.scss';

const Content = () => {
    return (
        <div className='content'>
            <NavBar />
            <CinemaList />
        </div>
    );
};

export default Content;