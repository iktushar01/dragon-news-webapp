import React from 'react';

const Career = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>

            <p className="mb-4 text-lg">
                At <strong>The Dragon News</strong>, we believe in the power of journalism, storytelling, and technology to shape the future. We're on a mission to inform, inspire, and innovate — and we're always looking for passionate individuals to grow with us.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Why Work With Us?</h2>
            <ul className="list-disc pl-6 mb-4 text-lg">
                <li>Work in a fast-paced, impact-driven media environment</li>
                <li>Collaborate with creative and tech-savvy professionals</li>
                <li>Opportunities for remote work and flexible hours</li>
                <li>Room for personal growth, learning, and leadership</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Open Positions</h2>
            <p className="mb-4 text-lg">
                We're currently hiring for the following roles:
            </p>
            <ul className="list-disc pl-6 mb-4 text-lg">
                <li>News Writer (Tech & Startup Focus)</li>
                <li>Video Content Creator</li>
                <li>Social Media Manager</li>
                <li>Junior Frontend Developer (React)</li>
                <li>Intern - Research & Fact Checking</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">How to Apply</h2>
            <p className="text-lg">
                If you're excited to be part of a growing media startup and help shape the future of news, send your resume and a short cover letter to: <strong>careers@thedragonnews.com</strong>
            </p>

            <p className="text-lg mt-4">
                Let’s build something meaningful together.
            </p>
        </div>
    );
};

export default Career;
