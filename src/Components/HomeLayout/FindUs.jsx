import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="p-4 rounded-xl bg-white shadow-md w-full max-w-sm mx-auto mt-6">
      <h1 className="font-bold mb-4">Find Us On</h1>
      <div className="flex flex-col gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaFacebookF size={20} />
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition"
        >
          <FaInstagram size={20} />
          Instagram
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
        >
          <FaLinkedinIn size={20} />
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
        >
          <FaGithub size={20} />
          GitHub
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-lg hover:opacity-90 transition"
        >
          <FaXTwitter size={20} />
          X
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          <FaYoutube size={20} />
          YouTube
        </a>
      </div>
    </div>
  );
};

export default FindUs;
