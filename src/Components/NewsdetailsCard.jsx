import React from 'react';
import { Link } from 'react-router-dom';

const NewsdetailsCard = ({ news }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <img
                className="w-full h-[400px] md:h-[550px] object-cover rounded-lg"
                src={news?.image_url}
                alt={news?.title || 'News Image'}
            />
            <h1 className="text-3xl font-bold text-gray-800">{news?.title}</h1>
            <p className="text-gray-700 leading-relaxed text-lg">{news?.details}</p>
            <Link to={`/category/${news.category_id}`}>
                <button className="btn btn-primary mt-4">Back to Category</button>
            </Link>
        </div>
    );
};

export default NewsdetailsCard;
