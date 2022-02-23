import React from 'react'
import "../styles/navbar.css"
import {Link  } from 'react-router-dom';
import Profile from '../assets/profile.png'


function Navbar() {
    const setActive = (e) => {
        let liItems = document.querySelectorAll(".nav-link");
        liItems = Array.from(liItems);
        liItems.map((e) => 
            e.classList.remove("active")
        )
        e.target.classList.add("active");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <Link to="/" className="navbar-brand"><img src={Profile} width="45px" height="45px" alt='profile'/></Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-auto ms-lg-3 ms-sm-0">
                                <Link to='/' className="nav-link active" onClick={setActive} >Home</Link>
                            </li>
                            <li className="nav-item mx-auto ms-lg-3 ms-sm-0">
                                <Link to='/about' className="nav-link" onClick={setActive} >About</Link>
                            </li>
                            <li className="nav-item mx-auto ms-lg-3 ms-sm-0">
                                <Link to='/skills' className="nav-link" onClick={setActive} >Skills</Link>
                            </li>
                            <li className="nav-item mx-auto ms-lg-3 ms-sm-0">
                                <Link  to='/projects' className="nav-link" onClick={setActive} >Projects</Link>
                            </li>
                            <li className="nav-item mx-auto ms-lg-3 ms-sm-0">
                                <Link to='/contact' className="nav-link" onClick={setActive} >Contact Me</Link>
                            </li>
                            <li className="nav-item mx-auto ms-lg-3 ms-sm-0">
                                <a href='https://drive.google.com/file/d/1nhyc8DjxI88dqVc26wKgDAd7zb3B63BE/view?usp=sharing' target='_blank' rel="noreferrer" className="nav-link"  >Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar