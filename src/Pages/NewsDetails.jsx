import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsdetailsCard from '../Components/NewsdetailsCard';
import { useLoaderData, useParams } from 'react-router';
const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [ news , setNews ] =  useState({});
    useEffect(() => {
        const NewsDetails = data.find(singleNews => singleNews.id == id);
        setNews(NewsDetails)
    }, [data , id] )
    return (
        <div>
            <header className='py-3 container mx-auto'>
                <Header></Header>
            </header>
            <main className='container mx-auto grid grid-cols-12 gap-5 py-10'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>Dragon News</h2>
                    <NewsdetailsCard news = {news}></NewsdetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;