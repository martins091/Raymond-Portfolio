
import React from 'react';



import "./Projects.css";
import Project1 from "../../assets/images/project1.jpg";
import Project2 from "../../assets/images/project2.jpg";
import Project3 from "../../assets/images/project3.jpg";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Projects = () =>{

    const data = [
        {
            src: Project1,
            url: "https://www.behance.net/gallery/197642639/FoodHub-A-Delectable-Online-Marketplace-"
        },
        {
            src: Project2,
            url: "https://www.behance.net/gallery/194400829/Express-Bank-App"
        },
        {
            src: Project3,
            url: "https://www.behance.net/gallery/187105467/Errand-App"
        },
     
    ]
    return(
        <section id="projects">
            <div className="project-heading">
                <h3>Recent Projects</h3>
                <p>*Some are group project while some are personal project, click on it to take you to the website*</p>
                
            </div>

            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
            data.map(project => (
                <SwiperSlide key={project.src}>
                    <div className="project-box">
                        <a href={project.url}>
                            <img src={project.src} alt="project"/>
                            <div className="p-overlayer">
                                <strong>Outserved Reports</strong>

                            </div>

                        </a>

                    </div>
                    
                </SwiperSlide>

            ))
        }
        
       
      </Swiper>


            <div className="github-link">
                <a href="https://drive.google.com/file/d/1-LbqMHSsi3xqgO1Bz732r7J4lqwVN3rH/view?usp=sharing" className="btn-link">
                My Resume
                </a>

            </div>
            
        </section>
    )
}
export default Projects; 