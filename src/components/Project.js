import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import FileImg from '../assets/filemanagement.png'
import MovieImg from '../assets/movie.png'
import CodeImg from '../assets/codebook.png'

function Project({ projectName, projectDescLess, projectDescComplete, projectLink }) {

    const [desc, setDesc] = useState(projectDescLess)
    const [read, setRead] = useState("Read More")

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


    const changeReadSize = () => {
        if (read === "Read More") {
            setRead("Read Less");
            setDesc(projectDescComplete);
        } else {
            setRead("Read More");
            setDesc(projectDescLess);
        }
    }

    return (
        <>
            <div className="w-9/12 lg:w-5/6 m-auto" data-aos="zoom-in" data-aos-duration="500">
                <img src={projectImg} className="md:w-5/6 m-auto md:border-4 md:border-black md:p-2 md:rounded-2xl hover:cursor-grab " alt="Project" />
                <div className="mt-2 md:mt-6">
                    <h5 className="text-blue-600 text-xl md:text-2xl md:font-bold">{projectName}</h5>
                    <p className=" md:mt-2 text-sm md:text-lg">{desc}<button className='text-blue-900 hover:cursor-pointer' onClick={changeReadSize} >{read}</button></p>
                    <a className="md:text-lg hover:cursor-pointer underline text-blue-900" href={projectLink} target="_blank" rel="noreferrer"> Live Demo</a>
                </div>
            </div>
        </>
    )
}

export default Project