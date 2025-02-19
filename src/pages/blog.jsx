import React from 'react';
import './Blog.css'; // Add your CSS styles here
import { Link } from "react-router-dom";

const Blog = () => {
  const stories = [
    {
      id: 1,
      title: 'Sokoto Ilorin City Connect',
      image: '../src/images/sokoto-ilorin.png', // Replace with actual image paths
    },
    {
      id: 2,
      title: 'Our 4th anniversary',
      image: '../src/images/aniversary.png',
    },
    {
      id: 3,
      title: 'The caliphate hangout',
      image: '../src/images/aniversary.png',
    },
    {
      id: 4,
      title: 'Visit to Owu waterfall',
      image: '../src/images/owu.png',
    },
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-title">Our Stories</h2>
      <div className="story-cards">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.title} className="story-image" />
            <h3 className="story-title">{story.title}</h3>
            {story.title === 'Visit to Owu waterfall' ? (
              <Link to="/owu" className="read-more-btn">
                Read more
              </Link>
            ) : (
              <button className="read-more-btn">Read more</button>
            )}
          </div>
        ))}
      </div>
      <button className="load-more-btn">Load more</button>

      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>Event Hosted</h3>
            <p>108</p>
          </div>
          <div className="stat-item">
            <h3>Travel Tours</h3>
            <p>15</p>
          </div>
          <div className="stat-item">
            <h3>Community Reached</h3>
            <p>49</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
