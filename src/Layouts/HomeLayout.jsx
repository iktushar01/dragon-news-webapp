import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/Header/LatestNews';

const HomeLayout = () => {
    return (
        <div>
           <Header/>
           <section className='container mx-auto my-3'>
            <LatestNews></LatestNews>
           </section>
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