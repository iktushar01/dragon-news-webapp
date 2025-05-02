import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userpng from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext) 
    return (
        <div className='flex justify-between items-center my-4'>
            <div className=''>{user && user.email}</div>
            <div className="nav flex gap-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrer'>Carrer</NavLink>
                <NavLink to='/terms'>Terms</NavLink>
            </div>
            <div className="login_btn flex gap-2 items-center">
                <img src={userpng} alt="user" />
                <Link to= "/auth/login">
                <button className='btn btn-primary px-10'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;