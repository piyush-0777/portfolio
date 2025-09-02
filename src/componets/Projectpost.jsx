import React ,{useEffect} from 'react'
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";




const Projectpost = ({project}) => {


  return (
    <div className="w-[80vw] px-11 mx-auto md:flex gap-4 bg-black text-gray-200 
    rounded-2xl shadow-lg p-6 border border-gray-800">
      {/* Project Screenshot */}
      <div className='md:w-1/3 flex items-center justify-center'>
      <img
        src={project?.image} // replace with your project image
        alt="Project Screenshot"
        className="rounded-lg mb-4"
      />
      </div>

      {/* Title */}
      <div className='flex md:w-2/3 flex-col justify-start gap-4'>
      <h2 className="text-2xl font-bold text-white mb-2">
        <span className="text-gray-300">{project?.title}</span>
        {/* <span className="text-white">Sync</span> */}
      </h2>

      {/* Description */}
      <p className="text-gray-400 mb-4">
        {/* Realtime Chat Application with full user authentication, messaging, and
        creating multiple chats. */}
        {project?.about}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project?.fremwork.map(
          (tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-gray-800 rounded-lg border border-gray-700"
            >
              {tech}
            </span>
          )
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
        target='_blank'
          href={project?.github}
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
        >
          <FaGithub /> Source Code
        </a>
        {project?.liveurl && <a
          href={project?.liveurl}
          target='_blank'
          className="flex items-center gap-2
           bg-gradient-to-r from-pink-500 to-purple-500 
        shadow-[0_0_20px_rgba(236,72,153,0.8),0_0_40px_rgba(168,85,247,0.8)]
        hover:shadow-[0_0_25px_rgba(236,72,153,1),0_0_50px_rgba(168,85,247,1)]
             transition-all duration-300
             animate-pulse
           px-4 py-2 rounded-lg "
        >
          <ExternalLink size={18} /> Live Demo
        </a>}
        
      </div>
      </div>
    </div>
  )
}

export default Projectpost
