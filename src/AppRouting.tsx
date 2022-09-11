import React from 'react';
import { Route, Routes } from 'react-router';
import Content from './pages/Content';

function AppRouting() {
    return (
        <Routes>
            <Route path='/' element={<Content />} />
        </Routes>
    );
}

export default AppRouting;