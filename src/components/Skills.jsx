import React from "react";
import "../Skills.css";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "ReactJS",
    "Tailwind CSS",
    "Git & GitHub",
    "Vercel",
    "Railway",
    "Responsive Design",
    "DOM Manipulation",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Mongo DB",
    "Mongoose"
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
