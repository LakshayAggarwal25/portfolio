import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Project from './Project';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function ProjectsContainer() {
    const pagination = {
        clickable: true,
    };

    useEffect(() => {
        AOS.init();
    }, [])

    const projectsList = [
        {
            projectName: "File Management System",
            projectDescLess: "As the name suggests this is a file management system, in which a user can create a nested folder structure, currently a user can also create, manage and update text files and albums.  ",
            projectDescComplete:"As the name suggests this is a file management system, in which a user can create a nested folder structure, currently a user can also create, manage and update text files and albums. Tech Used - HTML, CSS and JavaScript. Currently this project uses Local Storage to store user data. Working on this project improved my understanding of vanilla JavaScript, and how to create a boilerplate html so that can be used again.  ",
            projectLink: "https://file-management-system.netlify.app/",

        },
        {
            projectName: "Movies App",
            projectDescLess: "Movies App is a responsive movies recommendation application in which a user can get the latest trending movies in various categories with features like infinite scroll and dark mode.  ",
            projectDescComplete:"Movies App is a responsive movies recommendation application in which a user can get the latest trending movies in various categories with features like infinite scroll and dark mode. Tech Used - ReactJs, TailwindCSS. TMDB's api was used to gather movie data. Working on this project I got to learn react, react-router-dom and how hooks, components are used in an application, also learned how to consume third party API's in a project.  ",
            projectLink: "https://movie-app-class-components.netlify.app/",

        },
        {
            projectName: "Code Book",
            projectDescLess: "In most of the Coding interviews one needs to explain some algorithm and then code the same, so I created this website containing a whiteboard and a code editor so the interviewee does not need to switch applications back and forth.  ",
            projectDescComplete: "In most of the Coding interviews one needs to explain some algorithm and then code the same, so I created this website containing a whiteboard and a code editor so the interviewee does not need to switch applications back and forth. In Code Book a user can save their data, which includes the whiteboard content and the code. Created this website using HTML, CSS, JavaScript and Firebase. While working on this project I learned about server-less backends and how to use them.  ",
            projectLink: "https://code-book-fd505.firebaseapp.com/",

        }
    ]

    return (
        <>
            <div className='container mx-auto mt-8 lg:mt-20 p-0'>
                <div className='text-center text-blue-700 text-3xl lg:text-6xl mb-6 md:mb-12' data-aos="fade-up" data-aos-duration="400">Projects</div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide ><Project projectName={projectsList[0].projectName} projectDescLess={projectsList[0].projectDescLess} projectDescComplete = {projectsList[0].projectDescComplete} projectLink={projectsList[0].projectLink} /></SwiperSlide>
                    <SwiperSlide ><Project projectName={projectsList[1].projectName} projectDescLess={projectsList[1].projectDescLess} projectDescComplete = {projectsList[1].projectDescComplete} projectLink={projectsList[1].projectLink} /></SwiperSlide>
                    <SwiperSlide ><Project projectName={projectsList[2].projectName} projectDescLess={projectsList[2].projectDescLess} projectDescComplete = {projectsList[2].projectDescComplete} projectLink={projectsList[2].projectLink} /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default ProjectsContainer