import React from "react";
import "./Home.css";
import martins from "../../assets/images/martins.svg";


const Home = ()=> {
    return(
       <section id="home">
        <div className="home-text" data-aos="fade-down">
            <strong>Hello, I'm</strong>
            <h1>Martins Ejiofor</h1>
            <p> I am a seasoned FullStack Developer with over three years of experience, 
                dedicated to crafting seamless and visually captivating digital experiences. 
                Proficient in Frontend Development, Backend Development, Mern-Stack, Wordpress  etc. 
                I excel in transforming innovative design concepts into interactive and 
                user-friendly interfaces. My deep understanding of user-centered design 
                principles and my ability to bridge the gap between aesthetics and functionality 
                have consistently resulted in engaging and intuitive web applications. 
                With a proven track record of collaborating effectively with multidisciplinary 
                teams and a constant drive to refine my skills, I am committed to delivering impactful 
                and responsive solutions that elevate user engagement and satisfaction.
            </p>
            <a href="#summery" className="btn-link">Scroll Down</a>

        </div>
        <div className="home-img" data-aos="fade-up">
            <div className="img-box">
                <img src={martins} alt="martins"/>
                <h2>Martins Ejiofor <br/> <br/><span> FullStack Developer </span></h2>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100086715874671">
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/martins-ejiofor-a9b32b26a/">
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/martins091">
                    <i className="fa-brands fa-github"></i>
                    </a>

                </div>
                <a href="mailto:agbomartinsejifor@gmail.com" className="hire-me">Hire me</a>

            </div>
            
        </div>

       </section>


    )
}
export default Home;