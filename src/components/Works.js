import React from 'react';
import './Styles.css';
import Photo3 from '../Images/1.png';
import Photo4 from '../Images/2.png';
import Photo5 from '../Images/3.png';
import Photo6 from '../Images/4.png';


const Works = () => {
  return (
    <section className="works" id="works">
      <div className="works-container">
        <div className="works-container-title"> 
          <h1><span>Importance</span></h1>
        </div>
        <div className="works-box">
          <img src={Photo3} alt="Work 1" />
          <div className="works-layer">
            <p>Click here to see more.</p>
            <a href="https://www.fifteendesign.co.uk/blog/what-is-the-importance-of-web-development/">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
        <div className="works-box">
          <img src={Photo4} alt="Work 2" />
          <div className="works-layer">
            <p>Click here to see more.</p>
            <a href="https://www.fifteendesign.co.uk/blog/what-is-the-importance-of-web-development/">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
        <div className="works-box">
          <img src={Photo5} alt="Work 3" />
          <div className="works-layer">
            <p>Click here to see more.</p>
            <a href="https://www.fifteendesign.co.uk/blog/what-is-the-importance-of-web-development/">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
        <div className="works-box">
          <img src={Photo6} alt="Work 4" />
          <div className="works-layer">
            <p>Click here to see more.</p>
            <a href="https://www.fifteendesign.co.uk/blog/what-is-the-importance-of-web-development/">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
