import React from "react";
import { FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs"; // Bookmark icon

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  const formattedDate = new Date(author?.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-300 mb-2 p-4">
        {/* Author info */}
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={author?.img}
            alt={author?.name}
          />
          <div>
            <h4 className="font-semibold text-sm">{author?.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Bookmark & Share */}
        <div className="flex items-center gap-3 text-gray-500">
          <BsBookmark className="cursor-pointer hover:text-blue-600" size={18} />
          <FiShare2 className="cursor-pointer hover:text-blue-600" size={18} />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 font-bold text-lg text-gray-800 leading-snug">
        {title}
      </h3>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="thumbnail"
        className="w-full px-4 h-60 object-cover my-3"
      />

      {/* Description */}
      <div className="px-4 text-sm text-gray-700">
        {details?.slice(0, 150)}...
        <span className="text-orange-600 font-semibold cursor-pointer"> Read More</span>
      </div>

      <hr className="mt-4 border-gray-300" />

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-4 text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center space-x-1 text-orange-500">
          {Array.from({ length: Math.round(rating?.number || 0) }, (_, idx) => (
            <FaStar key={idx} />
          ))}
          <span className="ml-1 text-gray-700 font-medium">{rating?.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <AiOutlineEye size={18} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
