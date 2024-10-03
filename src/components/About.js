import React from 'react';
import './Styles.css';
import Photo2 from '../Images/photo2.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={Photo2} alt="About section image" />
      </div>
      <div className="about-content">
        <h2 className="heading"><span>About</span></h2>
        <p>
          Web development plays a key role in building and maintaining websites that connect people, share information, and drive success. A well-designed website not only improves visibility but also enhances user experience, builds trust, and helps achieve goals effectively. 
          With the right web development skills, you can create responsive, visually appealing, and fast websites that cater to users on any device.
          As the online landscape continues to grow, web development remains a valuable and impactful field, offering endless opportunities to innovate and make a difference.
        </p>
        <div className="dlbtn">
          <a href="#works" className="btn">See more</a>
        </div>
      </div>
    </section>
  );
};

export default About;
