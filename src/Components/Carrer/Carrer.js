import React from "react";
import "./Carrer.css";



const Carrer = () =>{

    const carrers = [
        {
            title: "Product Design",
            name: "Senior",
            year: "2020-2022"
        },
        {
            title: "Product Management.",
            name: "Senior",
            year: "2022-2024"
        },

    ]
    const educations = [
        {
            title: "University of Lagos, Nigeria",
            name: "Bachelor of Science of Cell Biology and Genetics",
            year: "2017 - 2024"
        },
        {
            title: "Academic project",
            name: "Isolation and detection of genetic variabilityg",
            year: "2023-2024"
        },
    ]
    return (
        <section id="carrer">
            <div className="carrer-education">
                <div className="carrer" data-aos="fade-right">
                    <h3>Carrer</h3>
                    <div className="c-b-container">
                        {
                            carrers.map((carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{carrer.title}</h4>
                                    <strong>{carrer.name}</strong>
                                    <span>{carrer.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                <div className="carrer edu" data-aos="fade-left">
                    <h3>Education</h3>
                    <div className="c-b-container">
                        {
                            educations.map((carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{carrer.title}</h4>
                                    <strong>{carrer.name}</strong>
                                    <span>{carrer.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                
            </div>
            <div className="btn-c">
                    <a href="https://drive.google.com/file/d/1-LbqMHSsi3xqgO1Bz732r7J4lqwVN3rH/view?usp=sharing" download className="btn-link">
                        Get CV <i className="fa-solid fa-download"></i>
                    </a>

                </div>
            
        </section>
    )
}
export default Carrer;