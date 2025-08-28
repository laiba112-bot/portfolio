// src/components/Testimonials.jsx
import React from "react";
import testimonials from "../data/testimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Testimonials = () => {
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // ek time pe 1 testimonial
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // agar arrows nahi chahiye
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-slider">
        <Slider {...settings}>
          {testimonials.map(({ id, name, role, feedback, image }) => (
            <div key={id} className="testimonial-card">
              <img src={image} alt={name} className="testimonial-img" />
              <p className="testimonial-feedback">"{feedback}"</p>
              <h4 className="testimonial-name">{name}</h4>
              <p className="testimonial-role">{role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
