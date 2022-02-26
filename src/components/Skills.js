import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import HTMLLogo from "../assets/htmllogo.png"
import CSSLogo from "../assets/csslogo.png"
import JSLogo from "../assets/jslogo.png"
import ReactLogo from "../assets/reactlogo.png"
import NodeLogo from "../assets/nodelogo.png"
import MongoLogo from "../assets/mongologo.jpg"
import FBLogo from "../assets/firebaselogo.png"
import CppLogo from "../assets/cpplogo.png"
import JavaLogo from "../assets/javalogo.png"
import TWLogo from "../assets/tailwindlogo.png"
import BSLogo from "../assets/bootstraplogo.png"
import GithubLogo from "../assets/githublogo.png"

function Skills() {
    useEffect(() => {
        AOS.init();
    }, [])

    const imgContainerStyle = 'w-20 lg:w-2/6 m-auto';
    const imgStyle = 'w-16 lg:w-full md:hover:scale-125 ease-in-out duration-200'

    return (
        <>
            <div className='container mx-auto mt-8 lg:mt-20 p-0'>
                <div className='text-center text-blue-700 text-3xl lg:text-6xl ' data-aos="fade-up" data-aos-duration="400">Skills</div>
                <div className='grid gap-3 lg:gap-10 grid-cols-3 lg:grid-cols-4 place-content-center mt-8 lg:mt-16'>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500" >
                        <img src={HTMLLogo} alt="html" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={CSSLogo} alt="css" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <a href='https://github.com/LakshayAggarwal25/JavaScript' target="_blank" rel="noreferrer">
                            <img src={JSLogo} alt="js" className={imgStyle} />
                        </a>
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={ReactLogo} alt="react" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={NodeLogo} alt="node" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={MongoLogo} alt="mongo" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={FBLogo} alt="firebase" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={CppLogo} alt="cpp" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={JavaLogo} alt="java" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={TWLogo} alt="tailwind" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={BSLogo} alt="bootstrap" className={imgStyle} />
                    </div>
                    <div className={imgContainerStyle} data-aos="zoom-in" data-aos-duration="500">
                        <img src={GithubLogo} alt="github" className={imgStyle} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills