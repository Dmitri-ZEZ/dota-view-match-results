import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeroesPage from "./components/page/HeroesPage";
import StatPage from "./components/page/StatPage";
import HeroPage from "./components/page/HeroPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<StatPage/>}/>
                <Route path="hero" element={<HeroesPage/>}/>
                <Route path="hero/:heroId" element={<HeroPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
