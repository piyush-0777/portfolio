import React from 'react'
import dev_img from '../images/Developer.jpg'
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { useEffect , useState } from 'react';

const Home = () => {

  const name = "ull Stack Developer"; // 👈 your name
  const [subIndex, setSubIndex] = useState(0);
  const [write , setWrite] = useState(true);

useEffect(() => {
    if (subIndex < name.length && write == true) {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 250); // typing speed
      if(subIndex == name.length -1 ) setWrite(false);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, 250); // typing speed
      if(subIndex == 1) setWrite(true);
      return () => clearTimeout(timeout);
      
    }
  }, [subIndex]);


  const hendalClick = (e) =>{
    console.log(e)
  }

  return (
    <div className='bg-black text-white h-[90vh] w-screen px-2 md:flex select-none
    md:overflow-hidden overflow-y-scroll
    '>


      < div 
      className='md:w-[50%] w-full flex flex-col md:gap-5 gap-10 md:pt-40 pt-20 ' >
          
            <span className='text-yellow-300 text-lg'>HELLO EVERYONE</span>
          
          
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-sans font-bold '>I'm piyush,</h1>
            <h1 className='md:text-5xl sm:text-4xl font-sans text-3xl font-bold'>
              {/* Full Stack Developer */}
               F{name.substring(0, subIndex)}_
               {/* <span className="border-r-2 border-white animate-pulse ml-1"></span> */}
              </h1>
              
          <p className='text-xl font-mono'>Bulding dynamic and responsive web applications with a passion for clean code and intuitive user experience.</p>
   
        <div className='flex gap-12  '>
          <div 
          className='
          cursor-pointer text-2xl
            md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full flex justify-center items-center 
            bg-gradient-to-r from-pink-500 to-purple-500 
        shadow-[0_0_20px_rgba(236,72,153,0.8),0_0_40px_rgba(168,85,247,0.8)]
        hover:shadow-[0_0_25px_rgba(236,72,153,1),0_0_50px_rgba(168,85,247,1)]
             transition-all duration-300
             animate-pulse
          '>
           <a href="https://www.linkedin.com/in/gecgce2024piyush" target='_blank'> <FaLinkedin className='text-2xl blur-none' /></a>
          </div>
          <div
          className='
          cursor-pointer text-2xl
             md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full flex justify-center items-center 
            bg-gradient-to-r from-pink-500 to-purple-500 
        shadow-[0_0_20px_rgba(236,72,153,0.8),0_0_40px_rgba(168,85,247,0.8)]
        hover:shadow-[0_0_25px_rgba(236,72,153,1),0_0_50px_rgba(168,85,247,1)]
             transition-all duration-300
             animate-pulse
            '>
              <a href="https://github.com/piyush-0777" target='_blank'>
            <FaGithub className='text-2xl blur-none' />
            </a>
          </div>
           <div
          className='
          cursor-pointer  text-2xl 
            backdrop-blur-md bg-blur-xs  md:w-[50px] md:h-[50px] w-[40px] h-[40px]
            rounded-full flex justify-center items-center 
            bg-gradient-to-r from-pink-500 to-purple-500 
        shadow-[0_0_20px_rgba(236,72,153,0.8),0_0_40px_rgba(168,85,247,0.8)]
        hover:shadow-[0_0_25px_rgba(236,72,153,1),0_0_50px_rgba(168,85,247,1)]
         transition-all duration-300
        animate-pulse
        
            '>
              <a href="https://www.instagram.com/piyush__r__k/" target='_blank'>
            <FaInstagramSquare className='
            text-2xl blur-none
            
            ' />
            </a>
          </div>
          <a href="/about"  >
            <button 
           
            className='
            text-xl cursor-pointer shadow- p-4 rounded-xl w-[150px] px-5
            bg-gradient-to-r from-pink-500 to-purple-500 
        shadow-[0_0_20px_rgba(236,72,153,0.8),0_0_40px_rgba(168,85,247,0.8)]
        hover:shadow-[0_0_25px_rgba(236,72,153,1),0_0_50px_rgba(168,85,247,1)]
        transition-all duration-300
        animate-pulse
            '> Contact </button>
          </a>
        </div>
      </div>

      {/* image */}
      <div className=' md:w-[50%] w-full h-[90vh] '>
        <img className='h-[90vh] w-[100%] ' src={dev_img} alt="" />
      </div>
    </div>
  )
}

export default Home
