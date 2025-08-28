// src/components/Services.jsx

import React from "react";
import services from "../data/services";
import "../App.css";

const Services = () => {
  return (
    <section className="custom-services-section" id="services">
      <h2 className="section-title">What I Do</h2>
      <div className="custom-services-wrapper">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`custom-service-block ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
          >
            <div className="custom-service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="custom-service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
