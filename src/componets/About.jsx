import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";


const About = () => {

  const skills = [
    { name: "HTML",about:"Markup language for web structure.", icon: <FaHtml5 size={60} className="text-red-500" />, percent: "98%", color: "red" },
    { name: "CSS",about:"Styling and layout for web pages." ,icon: <FaCss3Alt size={60} className="text-blue-500" />, percent: "98%", color: "blue" },
    { name: "JavaScript",about:"Adds interactivity to websites." ,icon: <FaJs size={60} className="text-yellow-400" />, percent: "98%", color: "yellow" },
    { name: "Node.js",about:"Server-side JavaScript runtime." ,icon: <FaNodeJs size={60} className="text-green-500" />, percent: "98%", color: "green" },
    { name: "React",about:"Build dynamic user interfaces.", icon: <FaReact size={60} className="text-sky-400" />, percent: "98%", color: "sky" },
  ];

  // const timeline = [
  //   { year: "2000 - 2002", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi non neque molestie finibus. Vivamus sagittis est accumsan convallis", color: "bg-red-500" },
  //   { year: "2002 - 2004", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi non neque molestie finibus. Vivamus sagittis est accumsan convallis", color: "bg-green-500" },
  //   { year: "2004 - 2006", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi non neque molestie finibus. Vivamus sagittis est accumsan convallis", color: "bg-blue-500" },
  //   { year: "2006 - 2008", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi non neque molestie finibus. Vivamus sagittis est accumsan convallis", color: "bg-yellow-500" },
  //   { year: "2006 - 2008", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi non neque molestie finibus. Vivamus sagittis est accumsan convallis", color: "bg-gray-600" },
  // ];

  return (
    <div  className='
    bg-black text-white h-[90vh] w-screen   select-none
     overflow-y-scroll overflow-x-hidden'
    >
    <div className="bg-black text-white min-h-screen px-6 py-12">
      {/* About Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://res.cloudinary.com/dylqjvfkf/image/upload/v1755521247/r28vzcxfkp3xnppkthns.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
          <a target="_blank" href="/resume.pdf">
          <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800">
            Download CV
          </button></a>
        </div>
        <div>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Full-Stack Web Developer with experience in building dynamic and responsive web applications using React, Tailwind CSS, Node.js, and Express. I create user-friendly interfaces, integrate robust backend APIs, and ensure seamless functionality across devices. My portfolio showcases projects that highlight my skills in frontend design, backend development, and full-stack project implementation.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-24 h-24 flex items-center justify-center rounded-full border-8 border-gray-700">
                {skill.icon}
              </div>
              <h3 className="mt-4 text-xl">{skill.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{skill.about}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Experience */}
      {/* <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Education And Experience</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`${item.color} text-white rounded-lg shadow-lg p-6 max-w-sm`}
            >
              <h3 className="text-lg font-semibold">{item.year}</h3>
              <p className="text-sm mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
    </div>
  )
}

export default About
