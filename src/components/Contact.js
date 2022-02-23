import React, { useEffect } from 'react'
import "../styles/contact.css"
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='container contact'>
                <div className='contact-title text-center fw-bold' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">Contact Me</div>
                <div className=' d-flex contact-items justify-content-around align-items-center'>
                    <div className='contact-item' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                        <i className="bi bi-telephone"></i> <a href='tel:+91-9717746476' target='_blank'rel="noreferrer" >+91-9717746476</a>
                    </div>
                    <div className='contact-item' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                        <i className="bi bi-envelope"></i> <a href='mailto:lakshayaggarwal2507@gmail.com' target='_blank'rel="noreferrer" >lakshayaggarwal2507@gmail.com</a>
                    </div>
                    <div className='contact-item' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                        <i className="bi bi-github"></i><a href='https://github.com/LakshayAggarwal25' target='_blank'rel="noreferrer" >@LakshayAggarwal</a>
                    </div>
                    <div className='contact-item' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                        <i className="bi bi-twitter"></i><a href='https://twitter.com/_Shishimaru__' target='_blank'rel="noreferrer" >_Shishimaru__</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact