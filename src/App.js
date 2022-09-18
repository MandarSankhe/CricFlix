import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import EditSeason from "./components/edit-season.component";
import CreateSeason from "./components/create-season.component";
import CreateMovie from "./components/create-movie.component";

function App() {
    return (

        <BrowserRouter>
            <Navbar />
            <br />
            <div className="container">
                
                <Routes>


                    <Route path="/" exact element={<Home />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/edit/:id" element={<EditSeason />} />
                    <Route path="/create" element={<CreateSeason />} />
                    <Route path="/movie" element={<CreateMovie />} />

                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
