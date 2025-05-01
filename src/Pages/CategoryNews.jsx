import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData()
  console.log(id , data);
  useEffect(()=>{
    const filterNews = data.filter(news => news.category_id == id)
    console.log(filterNews)
  },[data , id])
  return (
    <div>
      <h1 className="font-bold">Dragon News Home </h1>
    </div>
  );
};

export default CategoryNews;
