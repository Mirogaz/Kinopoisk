import React from 'react';
import { Route, Routes } from 'react-router';
import CinemaInformation from './pages/CinemaInformation';
import Content from './pages/Content';


function AppRouting() {
    return (
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='film/:id' element={<CinemaInformation />} />
        </Routes>
    );
}

export default AppRouting;