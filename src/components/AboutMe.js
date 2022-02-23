import React, { useEffect } from 'react'
import "../styles/aboutme.css"
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <div className='container about-me'>
                <div className='about-me-title text-center fw-bold' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">About Me</div>
                <div className='about-me-content' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="2100">
                    My name is Lakshay Aggarwal. I’m currently pursuing B.Tech in Computer Science and Engineering from Guru Tegh Bahadur Institute of Technology. I see myself as a relentless problem-solver, and I’m always looking for a new challenge. I’ve recently gotten interested in Web Development using MERN stack. I have a high motivational spirit in terms of learning, seeking experiences. I am able to work well, honestly and responsibly. Passionate about computer science and how it can bring about changes in the world.
                </div>
            </div>
        </>
    )
}

export default AboutMe