import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
export default class Navbar extends Component {

    render() {
        return (
            <div className="sidebar">
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} style={{ width: 160 + 'px' }} alt="logo" />
                    </Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/dashboard" className="nav-link">Seasons</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Add Seasons</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/movie" className="nav-link">Add Movies</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}