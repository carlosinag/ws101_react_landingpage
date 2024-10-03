import React from 'react';
import './Styles.css';
import Photo7 from '../Images/image-removebg-preview (13).png';
import Photo8 from '../Images/image-removebg-preview (12).png';
import Photo9 from '../Images/image-removebg-preview (16).png';
import Photo10 from '../Images/image-removebg-preview (14).png';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-container-title">
          <h1><span>Contacts</span></h1>
        </div>
        <div className="contact-box">
          <img src={Photo7} alt="Facebook" />
          <div className="contact-layer">
            <h4>Facebook</h4>
            <p>Click here to send message.</p>
            <a href="https://web.facebook.com/johncarlo.sinag/">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
        <div className="contact-box">
          <img src={Photo8} />
          <div className="contact-layer">
            <h4>Instagram</h4>
            <p>Click here to send message.</p>
            <a href="https://www.instagram.com/_johntamad/">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
        <div className="contact-box">
          <img src={Photo9} alt="Gmail" />
          <div className="contact-layer">
            <h4>Gmail</h4>
            <p>Click here to send message.</p>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
        <div className="contact-box">
          <img src={Photo10} alt="Telegram" />
          <div className="contact-layer">
            <h4>Telegram</h4>
            <p>Click here to send message.</p>
            <a href="https://t.me/janjanjanj4n/">
              <i className='bx bx-link-external'></i>
            </a>
          </div>
        </div>
        <p>Get in touch to learn more about web development.</p>
      </div>    
    </section>
  );
};

export default Contact;
