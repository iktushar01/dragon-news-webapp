import React from 'react';

const About = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-4xl font-bold mb-6">About The Dragon News</h1>

            <p className="mb-4 text-lg">
                <strong>The Dragon News</strong> is a modern digital news platform that aims to keep you informed, engaged, and ahead of the curve. Founded with a passion for storytelling and truth, our goal is to bring you the news that matters — quickly, accurately, and with clarity.
            </p>

            <p className="mb-4 text-lg">
                In an era of misinformation and fast-spreading rumors, The Dragon News stands for integrity. Our team of writers, editors, and tech enthusiasts work round the clock to verify facts, track developments, and publish content that educates and empowers our readers.
            </p>

            <p className="mb-4 text-lg">
                From breaking headlines and in-depth reports to expert opinions and feature stories, we cover a broad range of categories:
            </p>

            <ul className="list-disc pl-6 mb-4 text-lg">
                <li>Technology and Innovation</li>
                <li>Software Development & Programming</li>
                <li>Startups and Entrepreneurship</li>
                <li>Cybersecurity and AI</li>
                <li>Science and Education</li>
                <li>Gaming, Gadgets, and Reviews</li>
                <li>World Events and Trending Topics</li>
            </ul>

            <p className="mb-4 text-lg">
                <strong>Why "The Dragon"?</strong> Dragons symbolize power, wisdom, and a watchful presence — just like how we aim to be a vigilant and reliable voice in the media space. We don't just report the news — we analyze, explain, and break it down so anyone can understand.
            </p>

            <p className="text-lg">
                Join thousands of readers who trust us daily. Follow us on social media, subscribe to our newsletter, and be a part of a growing community that values knowledge and truth.
            </p>
        </div>
    );
};

export default About;
