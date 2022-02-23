import React,{useState,useEffect} from 'react'
import MainImg from '../assets/hero-img.svg'
import "../styles/hero.css"
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {

    const [Thing, setThing] = useState("Software Engineer");
    const things=["Software Engineer","Web Developer","Tech Enthusiast"]

    useEffect(() => {
        AOS.init();
        let i = 0;
        const id = setInterval(()=>{
            if(i>2){ i = 0;}
            setThing(things[i]);
            i++;
        },2000)
    
      return () => clearInterval(id);
      // eslint-disable-next-line
    }, [])
    

    return (
        <>
            <div className='container hero'>
                <div className='d-flex justify-content-center align-items-center hero-content'>
                    <div className='hero-item hero-item-1' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1400">
                        <h1>Hi !</h1>I'm <strong className='name'>Lakshay Aggarwal</strong>,<br/>a <span>{Thing}</span>
                    </div>
                    <div className='hero-item' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400">
                        <img src={MainImg} alt="..."/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero