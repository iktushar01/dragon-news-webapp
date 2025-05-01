import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div className='container mx-auto my-3'>
           <Header/>
           <section>
            <LatestNews></LatestNews>
           </section>
           <nav>
            <Navbar></Navbar>
           </nav>
            <main>
                <section className='left_nav'></section>
                <section className='main'>
                    <Outlet/>
                </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;