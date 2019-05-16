import React from 'react';
import "./../css/Footer.css";

const Footer = () => {
  return(
    <div className="footer-container">
      <div className="contact">
        <h1>Contact</h1>
        <p>46 E. Main Street Buckhannon, WV,<br/> 26201</p>
        <p>info@jesterline.com</p>
        <span className="social-icons">
          <a href="https://www.facebook.com/JesterLineGT/"><i className="fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/jesterlinegt/"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/JesterLineGT"><i className="fab fa-twitter-square"></i></a>
        </span>
      </div>
      <div className="hours">
        <h1>Hours (During School Days)</h1>
        <p>Monday - Friday: 3:00p.m. - 10:00 p.m.</p>
        <p>Saturday: 12:00p.m. - 11:00p.m.</p>
        <p>Sunday: 3:00p.m. - 8:00p.m.</p>
      </div>
      <div className="hours">
        <h1>Hours (During Out of School Days)</h1>
        <p>Monday - Thursday: 12:00p.m. - 10:00 p.m.</p>
        <p>Friday - Saturday: 12:00p.m. - 11:00 p.m.</p>
        <p>Sunday: 3:00p.m. - 8:00p.m.</p>
      </div>
      <div className="vexel-credits">
        <h1>Credits</h1>
        <p><a href="https://www.vexels.com/vectors/preview/153162/gaming-mouse-icon"> Gaming mouse icon </a> | Designed by Vexels</p>
        <p><a href="https://www.vexels.com/vectors/preview/152324/augmented-reality-space-illustration"> Augmented reality space illustration </a> | Designed by Vexels</p>
        <p><a href="https://www.vexels.com/vectors/preview/150850/baby-balloon-circle-icon"> Baby balloon circle icon </a> | Designed by Vexels</p>
      </div>
    </div>
  );
}

export default Footer;
