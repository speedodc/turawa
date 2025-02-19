import React from 'react';
import { Link } from 'react-router-dom';
import './owu.css';

import owuImage from '../images/owuu.png';
import sokotoIlorinImage from '../images/sokoto-ilorin.png';
import anniversaryImage from '../images/aniversary.png';
import owuPostImage from '../images/owu.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import logo from '../images/logo1.png';


const OwuWaterfall = () => {
  const stories = [
    { id: 1, title: 'Sokoto Ilorin City Connect', image: sokotoIlorinImage },
    { id: 2, title: 'Our 4th anniversary', image: anniversaryImage },
    { id: 3, title: 'The caliphate hangout', image: anniversaryImage },
  ];
  
  return (
    <div className="owu-container">
      <img src={owuImage} alt="Owu Waterfall" className="owu-image" />
      <h3>Visit to Owu Waterfall</h3>
      <p>January 10, 2025</p>

      <div className="text-container">
        <h7>
          Inspector Turawa & Friends Tour Visits Owu Waterfall Nestled in the heart
          of Kwara State lies one of Nigeria’s most breathtaking natural
          wonders—Owu Waterfall. As part of our mission to bring captivating and
          educational experiences to our community, Inspector Turawa & Friends Tour
          recently organized an unforgettable trip to this serene and picturesque
          destination.
        

          Journey to Nature’s Masterpiece
        
          Our journey to Owu Waterfall began early in the morning, as our excited
          group gathered, ready for a day filled with adventure and discovery.
        </h7>

        <p className="sub-heading">The Majestic Owu Waterfall</p>
        <h7>
          Standing at an impressive 120 meters (394 feet) in height, Owu Waterfall
          is the tallest waterfall in West Africa.
        </h7>

        <p className="sub-heading">Activities and Experiences</p>
        <ul>
          <li><strong>Guided Exploration:</strong> Our local tour guides shared fascinating stories about the history and significance of Owu Waterfall.</li>
          <li><strong>Photography:</strong> Many participants took advantage of the stunning scenery to capture unforgettable moments.</li>
          <li><strong>Hiking:</strong> For the adventurous, a short hike to the waterfall base offered a closer view of the cascading water.</li>
        </ul>

        <p className="sub-heading">Join Us on Our Next Adventure!</p>
        <h7>
          Inspector Turawa & Friends Tour is dedicated to creating memorable journeys
          that inspire and educate. Follow us for updates and be part of our next adventure.
        </h7>
      </div>

      <div className="related-posts">
        <h1>RELATED POSTS</h1>
      </div>
      <div>
<button onClick={() => alert(`Subscribed with: ${email}`)}>
<span className="arrow">&lt;</span>
 </button>
 </div>

      <div className="story-cards">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.title} className="story-image" />
            <h3 className="story-title">{story.title}</h3>
            {story.title === 'Visit to Owu waterfall' ? (
              <Link to="/owu" className="read-more-btn">Read more</Link>
            ) : (
              <button className="read-more-btn">Read more</button>
            )}
          </div>
          
          
        ))}
         <div>
<button onClick={() => alert(`Subscribed with: ${email}`)}>
<span className="arrow">&gt;</span>
 </button>
 </div>
      </div>
      <div className='contact'><h1>Contact us on Social Media      <img src={facebook} alt="Owu Waterfall" className="owu-image" />
      <img src={twitter} alt="Owu Waterfall" className="owu-image" /> <img src={instagram} alt="Owu Waterfall" className="owu-image" />
      </h1></div>
      <div>
     

      </div>
      <div className="stats-section">
      <div className="stats-content">
        {/* Left Section - Contact Info */}
        <div className="contact-info">
        <img src={logo} alt="Owu Waterfall" className="logo" />
        <h7>+234 901 230 3233</h7>
          <h7>Gra Ilorin, Kwara State, Nigeria.</h7>
          <h7>inspector@gmail.com</h7>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Stories</a></li>
            <li><a href="#">Opportunities</a></li>
            <li><a href="#">Volunteers</a></li>
            <li><a href="#">Blog Post</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Business Hours */}
        <div className="business-hours">
          <h3>Business Hours</h3>
          <p>Monday to Friday <br /> 7:00am – 8:00pm</p>
          <p>Saturday <br /> 7:00am – 5:00pm</p>
          <p>Sunday <br /> Closed</p>
        </div>
      </div>
       
          
        
       </div>
    </div>
  );
};

export default OwuWaterfall;
