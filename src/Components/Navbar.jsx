import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userpng from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user , LogOut} = use(AuthContext) ;
    const handleLogOut = () =>{
        LogOut()
        .then(() => {
            alert("you logged out")
        }).catch((err) => {
            alert(err)
        });
    }
    return (
        <div className='flex justify-between items-center my-4'>
            <div>
                <h1 className='font-bold'>{user && user.email}</h1>
            </div>
            <div className="nav flex gap-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrer'>Carrer</NavLink>
                <NavLink to='/terms'>Terms</NavLink>
            </div>
            <div className="login_btn flex gap-2 items-center">
                <img src={userpng} alt="user" />
                {
                    user ?  <button onClick={handleLogOut} className='btn btn-secondary px-10'>Logout</button> : <Link to= "/auth/login">
                    <button className='btn btn-primary px-10'>Login</button>
                    </Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;