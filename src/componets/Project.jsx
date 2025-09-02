import React from 'react'
import Projectpost from './Projectpost'
import { useEffect } from 'react'
import { useState } from 'react';


const Project = () => {





const [projects , setProjects] = useState([]);
const API_URL = import.meta.env.VITE_API_KEY;



const fetchproject =async() => {
  fetch(`${API_URL}/project` , {
  method: 'GET',
  credentials:'include'
})
.then((Response=> Response.json()))
.then(data=>{
  console.log('data' , data)
  setProjects(data);
  // console.log(projects);

})

}

useEffect(()=>{
  fetchproject();
} , [])


  return (
    <div className='
    bg-black text-white h-[90vh] w-screen px-2 pt-2 flex select-none flex-col
     overflow-y-scroll overflow-x-hidden' 
    >
      {/* heading */}
      <div className='w-full text-center m-3 mb-20 '>
        <h2 className='text-5xl  from-pink-500 to-purple-500'>Projects</h2>
      </div>

      <div className='flex flex-col gap-5'>
      {projects && projects.map((project)=>{
       return <Projectpost project = {project}/>
      })}

        {/* <Projectpost /> */}
        

      </div>
    </div>
  )
}

export default Project
