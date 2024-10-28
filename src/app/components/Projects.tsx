import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const Data=[
    {
        id:0,
        title:"Student ID Card",
        docs:"Responsive Student ID Card using Next.js and Tailwind CSS, displaying student details dynamically.",
        img:"/project01.png",
        Tags: ["Next.js", "TailwindCSS", "React" ]
    },
    {
        id:1,
        title:"Responsive Coffee Website",
        docs:"A sleek, responsive coffee website built with HTML, CSS, showcasing coffee products and information dynamically.",
        img:"/project2.png",
        Tags: ["HTML5", "CSS3", "Javascript" ]
    },
    {
        id:2,
        title:"Portfolio",
        docs:"A simple portfolio website for practice, built using HTML and CSS, featuring personal projects and details.",

        img:"/project3.png",
        Tags: ["Html", "CSS"]
    },
    {
        id:4,
        title:"Resume",
        docs:"An interactive resume website built with HTML and CSS." ,
        img:"/project4.png",
        Tags: ["HTML", "CSS"]
    },
    {
        id:5,
        title:"Resume Builder",
        docs:"A dynamic resume builder project using HTML, CSS, and TypeScript, showcasing skills in frontend development and UI design" ,
        img:"/1edit.png",
        Tags: ["HTML", "CSS", "TYPESCRIPT" ]
    },
    {
        id:6,
        title:"45 Exercise ",
        docs:"A comprehensive assignment with 45 tasks, focusing on mastering TypeScript concepts and best practices.",
        img:"/project6.png",
        Tags: ["Node.js", "Typescript"]
    },










]

const Projects = () => {
  return (
    <div id='Projects' className='container pt-32'>
        <Heading title='My Project'/>
    
    <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {Data.map((el)=>(<Card 
        key={el.id}
        title={el.title}
        desc={el.docs}
        img={el.img}
        tags={el.Tags}
          
         />))}

        
    </div>
    </div>
  )
}

export default Projects
