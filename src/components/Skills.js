import React,{useEffect} from 'react'
import "../styles/skills.css"
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
    
    return (
        <>
        <div className='container skills'>
            <div className='skills-title text-center fw-bold' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">Skills</div>
            <div className='skills-container d-flex justify-content-center align-items-center flex-wrap'>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={HTMLLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={CSSLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={JSLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={ReactLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={NodeLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={MongoLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={FBLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={CppLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={JavaLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={TWLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={BSLogo} alt="..."/>
                </div>
                <div className='skill-item text-center ' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1600">
                    <img src={GithubLogo} alt="..."/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills