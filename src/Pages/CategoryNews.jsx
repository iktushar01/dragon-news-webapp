import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams(); // id from URL
  const data = useLoaderData(); // full news data
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const categoryId = parseInt(id);

    if (categoryId === 0) {
      setCategoryNews(data);
    } else if (categoryId === 1) {
      const filteredNews = data.filter(
        (news) => news.others?.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === categoryId
      );
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div className="px-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-800">Dragon News Home</h1>
      

      <div className="grid grid-cols-1 gap-4">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
