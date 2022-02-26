import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='container mx-auto mt-8 lg:mt-20 p-0 mb-4 lg:mb-24'>
                <div className='text-center text-blue-700 text-3xl lg:text-6xl '>Contact Me</div>
                <div className=' flex flex-col gap-2 md:gap-0 md:flex-row justify-evenly items-center md:text-2xl mt-4 md:mt-6 underline text-blue-900'>
                    <div className='contact-item'>
                        <i className="bi bi-envelope-fill"></i> <a href='mailto:lakshayaggarwal2507@gmail.com' target='_blank' rel="noreferrer" >Mail</a>
                    </div>
                    <div className='contact-item'>
                        <i className="bi bi-github"></i><a href='https://github.com/LakshayAggarwal25' target='_blank' rel="noreferrer" >Github</a>
                    </div>
                    <div className='contact-item'>
                        <i className="bi bi-linkedin"></i><a href='https://www.linkedin.com/in/lakshayaggarwal25/' target='_blank' rel="noreferrer" >Linked In</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact