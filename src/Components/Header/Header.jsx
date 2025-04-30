import React from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div>
            <div className='flex justify-center flex-col items-center'>
                <img className='w-[250px] md:w-[450px]' src={logo}/>
                <p className='font-semibold text-accent'>Journalism Without Fear or Favour</p>
                </div>
        </div>
    );
};

export default Header;