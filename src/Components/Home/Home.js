import React from "react";
import "./Home.css";
import raymond from "../../assets/images/raymond.jpg";

const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, I'm</strong>
        <h1>RAYMOND OKOH</h1>
        <p>
          I am a seasoned Product Designer and Project Manager with over three
          years of experience, committed to delivering exceptional digital
          solutions. Skilled in both design and project management, I excel at
          transforming creative concepts into user-friendly and visually
          appealing products. My expertise includes user-centered design
          principles, ensuring that every project balances aesthetics with
          functionality. Proficient in leading cross-functional teams and
          managing project timelines, I ensure that all aspects of development
          are executed efficiently and effectively. My focus on aligning design
          strategies with business goals has consistently resulted in successful
          project outcomes and enhanced user experiences. 
        </p>
        <a href="#summery" className="btn-link">
          Scroll Down
        </a>
      </div>
      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={raymond} alt="martins" />
          <h2>
            Raymond Okoh <br /> <br />
            {/* <span> FullStack Developer </span> */}
          </h2>
          <div className="social">
            {/* <a href="https://www.facebook.com/profile.php?id=100086715874671">
              <i className="fa-brands fa-facebook"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/martins-ejiofor-a9b32b26a/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            {/* <a href="https://github.com/martins091">
              <i className="fa-brands fa-github"></i>
            </a> */}
          </div>
          <a href="mailto:raymondokoh18@gmail.com" className="hire-me">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
