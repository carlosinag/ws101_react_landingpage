import React from 'react';
import './Styles.css';
import Photo from '../Images/photo.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1><span>Web Development</span></h1>
        <h3 className="text-animation">Let's learn <span>Web Development.</span></h3>
        <p>Web development is more than just making websites. It's about creating great experiences online. Explore why web development is so important today.</p>
        <div className="btn-group">
          <a href="#works" className="btn">See more</a>
        </div>
      </div>
      <div className="home-img">
        <img src={Photo} alt="photo" />
      </div>
    </section>
  );
}

export default Home;
