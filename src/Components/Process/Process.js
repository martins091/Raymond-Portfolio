import React from "react";
import "./Process.css";


const Process = () =>{

    const data = [
        {
            id: "01",
            title: "Product Management.",
            contents: ["Product Development: Led the development and mentorship of students, from concept to delivery, resulting in desirable outcomes, e.g.,25% increase in growth of the companies. Product Strategy: Defined and executed product vision, mission, and roadmap, aligning with business goals and objectives"] 
        },
        
        {
            id: "02",
            title: "Product Design Facilitation & Training",
            contents: ["Design Thinking Workshops: Facilitated design thinking workshops and training sessions for students at Leinad Studio. Mentorship & Coaching: Mentored and guided students in designing and prototyping products, from ideation to testing"] 
        },
        {
            id: "03",
            title: "Product Design",
            contents: ["Implemented a design approach to improve the user experience through user-centered design principles. Executed the creation of comprehensive wireframes, navigation flows, and visually captivating design mockups; facilitated user testing sessions to gather valuable feedback, resulting in a 25% improvement in user satisfaction."] 
        }
    ]
    return(
        <section id="process" data-aos="fade">
            <div className="process-heading">
                <h3>Projects</h3>
                <div className="process-container">
                    {
                        data.map(process=>(
                            <div className="process-box" key={process.id}>
                                <span>{process.id}</span>
                                <strong>{process.title}</strong>
                                <ul>
                                    {
                                        process.contents.map(content =>(
                                            <li key={content}>{content}</li>
                                        ) )
                                    }
                                </ul>

                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}
export default Process;