import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';

const App: React.FC = () => {
    return (
        <>
            <Nav />
            <div
                style={{
                    display: 'flex',
                }}
            >
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
