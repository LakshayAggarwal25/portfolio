import React,{useState,useEffect} from 'react'
import "../styles/projects.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Project from './Project';
function Projects() {

    const [ProjectNum, setProjectNum] = useState(0)

    
    useEffect(() => {
        AOS.init();
    }, [])
    
    const projectsList = [
        {
            projectName: "File Management System",
            projectDesc: "As the name suggests this is a file management system, in which a user can create a nested folder structure, currently a user can also create, manage and update text files and albums. Tech Used - HTML, CSS and JavaScript. Currently this project uses Local Storage to store user data. Working on this project improved my understanding of vanilla JavaScript, and how to create a boilerplate html so that can be used again.",
            projectLink: "https://file-management-system.netlify.app/",
           
        },
        {
            projectName: "Movies App",
            projectDesc: "Movies App is a responsive movies recommendation application in which a user can get the latest trending movies in various categories with features like infinite scroll and dark mode. Tech Used - ReactJs, TailwindCSS. TMDB's api was used to gather movie data. Working on this project I got to learn react, react-router-dom and how hooks, components are used in an application, also learned how to consume third party API's in a project.",
            projectLink: "https://movie-app-class-components.netlify.app/",
           
        },
        {
            projectName: "Code Book",
            projectDesc: "In most of the Coding interviews one needs to explain some algorithm and then code the same, so I created this website containing a whiteboard and a code editor so the interviewee does not need to switch applications back and forth. In Code Book a user can save their data, which includes the whiteboard content and the code. Created this website using HTML, CSS, JavaScript and Firebase. While working on this project I learned about server-less backends and how to use them.",
            projectLink: "https://code-book-fd505.firebaseapp.com/",
            
        }
    ]


    const previous = () => {
        console.log("previous")
        let x  = ProjectNum % projectsList.length;
        if(ProjectNum<=0){    
            x = x + (projectsList.length);
        }
        console.log(x);
        setProjectNum(parseInt(x-1));
    }

    const next = () => {
        let x  = (ProjectNum+1) % projectsList.length;
        setProjectNum(x);
    }
    return (
        <>
            <div className='container projects'>
                <div className='projects-title text-center fw-bold' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">Projects</div>
                <div className='project-card d-flex justify-content-between align-items-center'>
                <button className='arrow-btn' onClick={previous}><i className="bi bi-caret-left"></i></button>

                <Project projectName={projectsList[ProjectNum].projectName} projectDesc={projectsList[ProjectNum].projectDesc} projectLink={projectsList[ProjectNum].projectLink} />
                
                <button className='arrow-btn' onClick={next}><i className="bi bi-caret-right"></i></button>

                </div>
            </div>
        </>
    )
}

export default Projects