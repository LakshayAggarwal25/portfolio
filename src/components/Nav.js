import React, { useContext } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import { FaGitAlt } from 'react-icons/fa'
import { IoIosContact } from 'react-icons/io'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { MdOutlineDarkMode } from 'react-icons/md'
import {BsSun} from 'react-icons/bs'

import "../styles/Nav.css"
import { ThemeContext } from '../App'

function Nav() {

    const {theme,setTheme} = useContext(ThemeContext);
    const linkStyle = `bg-transparent p-2 md:p-4 hover:bg-${(theme==="white")?"white":"black"} hover:text-${(theme==="white")?"black":"white"} rounded-2xl a-nav-item `;

    const toggleTheme = () =>{
        if(theme === "white"){
            setTheme("black");
        }else{
            setTheme("white");
        }
    }

    document.body.style.backgroundColor = theme;

    // const setActive = (e) => {
    //     let aNavItems = document.querySelectorAll(".a-nav-item");
    //     aNavItems = Array.from(aNavItems);
    //     aNavItems.map((ele) =>{
    //             ele.classList.remove("text-blue-400")
    //             ele.classList.add("text-white")
    //         }
    //     )
    //     e.target.classList.add("text-blue-400");
    // }

    return (
        <nav className={`flex bg-${(theme==="white")?"black":"white"} text-${theme} shadow-lg shadow-${(theme==="white")?"blue-500":"red-600"} text-xl px-2 py-2 gap-1 md:text-2xl w-max fixed md:px-7 md:py-3.5 left-1/2 md:gap-3 bottom-8 -translate-x-1/2 rounded-3xl`}  id="navbar">
            <a href='#' className={linkStyle} ><AiOutlineHome /></a>
            <a href='#about' className={linkStyle} ><AiOutlineInfoCircle /></a>
            <a href='#skills' className={linkStyle} ><BiCodeAlt /></a>
            <a href='#projects' className={linkStyle} ><FaGitAlt /></a>
            <a href='#contact' className={linkStyle} ><IoIosContact /></a>
            <a href='https://drive.google.com/file/d/1nhyc8DjxI88dqVc26wKgDAd7zb3B63BE/view?usp=sharing' target="_blank" rel="noreferrer" className={linkStyle} ><AiOutlineFilePdf /></a>
            <button onClick={toggleTheme} className={linkStyle} >{theme==="white"?<MdOutlineDarkMode/>:<BsSun/>}</button>
        </nav>
    )
}

export default Nav