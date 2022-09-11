import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.style.scss';

const NavBar = () => {
    return (
        <div className='nav'>
            <div className='nav__content'>
                <Link to='/'><h1 className='nav__content-title'>Кинопоиск</h1></Link>
            </div>
        </div>
    );
};

export default NavBar;