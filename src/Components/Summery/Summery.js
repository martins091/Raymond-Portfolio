import React from "react";
import "./Summery.css";

const Summery = () => {
  return (
    <section id="summery" data-aos="fade-right">
      <div className="summery-heading">
        <strong>My Skills</strong>
        <h2>Product Design</h2>
        <h2>Product Management</h2>
        <h2>Communication</h2>
        <h2>Collaboration</h2>
        <a
          href="https://drive.google.com/file/d/1-LbqMHSsi3xqgO1Bz732r7J4lqwVN3rH/view?usp=sharing"
          download
          className="btn-link"
        >
          {" "}
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="summery-details" data-aos="fade-left">
        <p>
          Figma, InDesign, Miro, Trello, Asana, Adobe illustrator, Adobe
          Photoshop, Sketch, Google Form, Go-to-market strategy, product
          promotion, competitive analysis, thinking skills,B2C, B2B, B2C
          marketing strategy, tech training, user experience, mobile user
          experience, customer relationship management(crm), user interface,
          training delivery, (KPI) key performance indicator, product Life
          cycle. Product Life, product design, product launch, wireframing, user
          centered design, user stories, attention to details, design thinking
          and facilitation, team coordination, product roadmapping and
          prioritization, cross-functional team collaboration, mentorship and
          coaching, problem solving
        </p>
      </div>
    </section>
  );
};
export default Summery;
