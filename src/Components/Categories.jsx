import React, { use } from 'react';
const categoryPromise = fetch("/categories.json")
.then((res) => res.json())

const Categories = () => {
    const categories = use(categoryPromise);

    console.log(categoryPromise)
    return (
        <div>
            <h1 className='font-bold'>All Categories {categories.length}</h1>
        </div>
    );
};

export default Categories;