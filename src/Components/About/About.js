import React from "react";
import "./About.css";


const About = ()=>{
    return(
        <section id="about"> 
        <div className="about-container">
            <div className="about-heading" data-aos="flip-left">
                <strong> About me</strong>
                <h3> Designing with Passion for Problem solving </h3>
                <a href="tel:+2347011292564" className="btn-link">
                +2347011292564 <i className="fa-solid fa-phone-flip"></i>
                </a>
            </div> 
            <div className="about-details" data-aos="flip-right"> 
            <p>  With a keen eye for aesthetics and user-centric interfaces, I strive to create visually captivating and functional experiences. Leveraging my skills in product management and product Designing, I am committed to translating complex challenges into elegant solutions that enhance user engagement and satisfaction.</p>
            
            </div>

        </div>

        </section>
    )
}
export default About;