import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-4'>
            <div className=''></div>
            <div className="nav flex gap-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrer'>Carrer</NavLink>
                <NavLink to='/terms'>Terms</NavLink>
            </div>
            <div className="login_btn flex gap-2 items-center">
                <img src={user} alt="user" />
                <Link to= "/auth/login">
                <button className='btn btn-primary px-10'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;