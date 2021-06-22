import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
    <nav id="navbar" className='navbar navbar-light navbar-expand-md' >
        <div className='container'>
            <ul className='nav navbar-nav'>
                <NavLink className='nav-link' exact to='/'>Pagrindinis</NavLink>
                <NavLink className='nav-link' exact to='/entity1s'>All entity1s</NavLink>
                <NavLink className='nav-link' exact to='/entity1s/new'>Create entity1</NavLink>
                <NavLink className='nav-link' exact to={`/admin`}>Admin</NavLink>
                <NavLink className='nav-link' exact to='/new'>New</NavLink>
            </ul>
        </div>
    </nav >
)

export default Navigation;