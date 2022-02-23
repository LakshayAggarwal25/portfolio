import React, { useEffect } from 'react'
import "../styles/project.css"
import AOS from "aos";
import "aos/dist/aos.css";
import FileImg from '../assets/filemanagement.png'
import MovieImg from '../assets/movie.png'
import CodeImg from '../assets/codebook.png'

function Project({ projectName, projectDesc, projectLink }) {

    useEffect(() => {
        AOS.init();
    }, [])

    let projectImg;

    if (projectName === "File Management System") {
        projectImg = FileImg;
    } 
    else if (projectName === "Movies App") {
        projectImg = MovieImg
    }
    else if (projectName === "Code Book") {
        projectImg = CodeImg
    }

    return (
        <>
            <div className="container project-box" style={{ maxWidth: '80%' }} data-aos="zoom-in-right" data-aos-duration="2300">
                <div className="d-flex flex-column justify-content-between align-items-center">
                    <div className="align-middle project-item project-img">
                        <img src={projectImg} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="details">
                        <div className="project-item">
                            <h5 className="title">{projectName}</h5>
                            <p className="text">{projectDesc}</p>
                            <a className="text" href={projectLink} target="_blank" rel="noreferrer"> Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project