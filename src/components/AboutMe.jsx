import React from 'react';
import '../AboutMe.css';
import profileImg from '../assets/aiman.png';

const AboutMe = () => {
  return (
    <section className="about-section" id='about'>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="content">
          <div className="image-box">
            <img
              src={profileImg}
              alt="Aiman Maroof"
              className="profile-img"
            />
          </div>
          <div className="text-box">
            <p>
              Hi! I'm <strong>Aiman Maroof</strong>, a Full-Stack MERN Developer and Tech Content Creator from Karachi, Pakistan. I build responsive and user-focused web applications using MongoDB, Express.js, React, Node.js, and have strong skills in HTML, CSS, and JavaScript.
            </p> <br />
             <p>
              I’m currently pursuing a BSCS from the University of Karachi and expanding my expertise in Data Science through Saylani Mass IT Training Program.
            </p> <br />
            <p>I’ve developed real-world projects and run two YouTube channels:</p>
            <p><b>•</b> <strong>Aiman’s IT Zone</strong> – simplifying concepts in technology, programming, and web development.</p>
            <p><b>•</b> <strong>WebGenix</strong>– a professional IT solutions agency specializing in UI/UX design, web development, graphic design, and data science. We are committed to guiding beginners in mastering web development while delivering innovative and result-driven digital solutions.</p><br />
            <p>
             Outside of coding, I enjoy art, design, and creative expression.
I’m passionate about making a difference through tech and open to freelance or collaborative work.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
