import React,{useState,useEffect} from 'react'
import MainImg from '../assets/hero-img.svg'
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
    
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
        <div className='container mx-auto mt-32 p-0'>
            <div className='flex flex-col gap-20 md:flex-row md:gap-0 items-center justify-center'>
                <div className='md:w-2/6 text-3xl lg:text-4xl  ' >
                    <h1>Hi !</h1>I'm <span className='text-blue-700 lg:text-5xl'>Lakshay Aggarwal</span>,<br />a <span>{Thing}</span>
                </div>
                <div className='w-96 lg:w-3/6'>
                    <img src={MainImg} alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Banner