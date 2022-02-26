import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {

    const [navType, setNavType] = useState("false");
    const [btnType, setBtnType] = useState("open");

    const toggleNav = () => {
        if (navType === "false") {
            setNavType("true");
            setBtnType("close")
        }
        else {
            setNavType("false");
            setBtnType("open")
        }
    }
    const setActive = (e) => {
        let liItems = document.querySelectorAll(".nav-item");
        liItems = Array.from(liItems);
        liItems.map((e) =>
            e.classList.remove("text-blue-600")
        )
        e.target.classList.add("text-blue-600");
    }

    return (
        <>
            <div className='container fixed top-0 left-0 right-0 z-40 mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg shadow-blue-500/50 text-black p-0'>
                <button className='nav-toggle bg-white bg-opacity-90 rounded-md shadow-lg shadow-black/90' >
                    <i className="bi bi-list nav-btn hidden" showopen={btnType} onClick={toggleNav}></i>
                    <i className="bi bi-x nav-btn hidden" showclose={btnType} onClick={toggleNav}></i>
                </button>
                <nav>
                    <ul id='primary-navigation' isopen={navType} className='flex gap-4 items-center text-xl justify-end list-none m-0 p-0 mr-2'>
                        <li onClick={setActive}>
                            <a className='cursor-pointer nav-item text-blue-600' href='/'>Home</a>
                        </li>
                        <li onClick={setActive}>
                            <Link className='cursor-pointer nav-item' to='/about'>About</Link>
                        </li>
                        <li onClick={setActive}>
                            <Link className='cursor-pointer nav-item' to='/skills'>Skills</Link>
                        </li>
                        <li onClick={setActive}>
                            <Link className='cursor-pointer nav-item' to='/projects'>Project</Link>
                        </li>
                        <li onClick={setActive}>
                            <Link className='cursor-pointer nav-item' to='/contact'>Contact Me</Link>
                        </li>
                        <li >
                            <a className='cursor-pointer' href='https://drive.google.com/file/d/1nhyc8DjxI88dqVc26wKgDAd7zb3B63BE/view?usp=sharing' target="_blank" rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar