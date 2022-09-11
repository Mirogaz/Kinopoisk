import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouting from './AppRouting';
import Content from './pages/Content';
import NavBar from './pages/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouting />
      </div>
    </BrowserRouter>
  );
}

export default App;
