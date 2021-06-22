import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
    <nav id="navbar" className='navbar navbar-dark navbar-expand-md' >
        <div className='container'>
            <ul className='nav navbar-nav'>
                <NavLink className='nav-link' exact to='/'>Klientai</NavLink>
                <NavLink className='nav-link' exact to='/clients/new'>Sukurti klientą</NavLink>
            </ul>
        </div>
    </nav >
)

export default Navigation;