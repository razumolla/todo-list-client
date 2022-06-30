import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li><Link to="/home">Home</Link></li>
        {/* <li><Link to="/todolist">ToDo-List</Link></li> */}
        <li><Link to="/completedtasks">Completed-Tasks</Link></li>
        <li><Link to="/calender">Calender</Link></li>
        <li><Link to="/about">About</Link></li>
    </>

    return (
        <div className="navbar bg-gradient-to-r from-blue-50 to-blue-200">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-primary lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem}
                </ul>
            </div>
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItem}
            </ul>
        </div>

    </div>
    );
};

export default Navbar;