import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


function About() {
  
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <div className='container  mx-auto mt-20 p-0'>
                <div className='text-center text-blue-700 text-3xl lg:text-6xl ' data-aos="fade-up" data-aos-duration="400">About Me</div>
                <div className='w-5/6 lg:w-4/6 lg:text-center m-auto mt-4 md:text-xl lg:mt-8 lg:text-2xl'data-aos="zoom-in" data-aos-duration="500" >
                    My name is Lakshay Aggarwal. I’m currently pursuing B.Tech in Computer Science and Engineering from Guru Tegh Bahadur Institute of Technology. I see myself as a relentless problem-solver, and I’m always looking for a new challenge. I’ve recently gotten interested in Web Development using MERN stack. I have a high motivational spirit in terms of learning, seeking experiences. I am able to work well, honestly and responsibly. Passionate about computer science and how it can bring about changes in the world.
                </div>
            </div>
        </>
    )
}

export default About