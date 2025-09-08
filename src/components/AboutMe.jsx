import React from 'react';
import '../AboutMe.css';
import profileImg from '../assets/my.jpeg';  // 👈 fixed

const AboutMe = () => {
  return (
    <section className="about-section" id='about'>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="content">
          <div className="image-box">
            <img
              src={profileImg}
              alt="Laiba azeem"
              className="profile-img"
            />
          </div>
          <div className="text-box">
            <p>
              Hi! I'm <strong>Laiba Azeem</strong>, a Full-Stack MERN Developer and Tech Content Creator from Karachi, Pakistan. I build responsive and user-focused web applications using MongoDB, Express.js, React, Node.js, and have strong skills in HTML, CSS, and JavaScript.
            </p> <br />
            <p>
              I’m currently pursuing a BSCS and expanding my expertise in Data Science through Saylani Mass IT Training Program.
            </p> <br />
            <p>I’ve developed real-world projects and run two YouTube channels:</p>
            <p><b>•</b> <strong>Global computer institute of technology</strong> – Alongside my entrepreneurial journey, I proudly serve as a Web and App Development Instructor at Global Computer Institute, where I mentor and guide students in mastering front-end and back-end technologies, mobile application development, and industry best practices. My mission is to inspire and equip the next generation of developers with the skills, confidence, and creativity to excel in the tech world..</p>
            <p><b>•</b> <strong>WebGenix</strong> I am the Founder of WebGenix, a professional IT solutions agency recognized for delivering cutting-edge services in UI/UX design, web development, graphic design, and data science. Under my leadership, WebGenix has established itself as a trusted name for innovative, client-focused, and result-driven digital solutions, empowering businesses with modern technology and design excellence..</p><br />
            <p>
             Outside of coding, I enjoy art, design, and creative expression.
             I’m passionate about making a difference through tech and open to freelance or collaborative work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
