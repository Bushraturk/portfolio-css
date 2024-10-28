"use client";
import React from "react";
import Nav from "./Navbar";
// import Typewriter from "typewriter-effect";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from "typewriter-effect";

import Projects from "./Projects";
import { useState } from "react";
import "@/app/CSS/Hero.css";

// part 1

const Hero = () => {
  return (
    <div id="container">
      <div id="content">
        <h3>Wellcome to my Portfolio</h3>
        <h1 className="h1">Hi, I am</h1>
        <div id="type">
          {/* 2 try */}

          <Typewriter
            options={{
              strings: ["Bushra Turk", "Fronted Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p data-aos="zoom-in-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
          Reprehenderit dolorum iure inventore omnis nulla
          <br /> accusamus deleniti porro ipsum voluptatum sunt.
        </p>
        {/* data-aos="zoom-in-up"> */}
        <button id="button">Contact Us</button>
      </div>
      {/* // content div complete */}

      <div id="img">
        <img src={"Banner.jpg"} alt="profile pic" />
      </div>
    </div>
  );
};

export default Hero;

// copy section
// const Hero = () => {
//   return (
//     <div>

//       <div className="bg-blue-600 mr-96 w-1/2 grid grid-cols-1 relative">
//         <div className="grid grid-cols-1 justify-between mt-0 ">
//           <Nav />

//           <div className="container grid lg:grid-cols-2 mt-9 h-[calc(70vh 60px)]">
//             <div className="hidden lg:block"></div>
//             <div className="text-[50px] sm:text-[40px] mt-9 font-bold leading-tight flex">
//               <Typewriter
//                 onInit={(typewriter) => {
//                   typewriter
//                     .typeString(" Hi, I am Bushra  Fronted Developer")
//                     .callFunction(() => {
//                       console.log("String typed out!");
//                     })
//                     .pauseFor(2500)
//                     .deleteAll()
//                     .callFunction(() => {
//                       console.log("All strings were deleted");
//                     })
//                     .start();
//                 }}
//               />
//             </div>
//           </div>
//           <div className="leading-tight container mt-64 ml-20 lg:ml-79 grid lg:w-1/2">
//             <p className="p-11 text-2xl text-wrap pr-7 leading-tight">
//               I am a frontend developer skilled in HTML, CSS, JavaScript, and
//               TypeScript. Currently learning Next.js at GIAIC, I'm building
//               responsive, interactive websites and aiming to become a full-stack
//               developer.
//             </p>
//           </div>
//         </div>
//         </div>

// <div className=" min-h-72 mt-0 justify-evenly">
//       <div
//         id="hero"
//         className="min-h-60 mt-8 bg-white bg-no-repeat ml-[50%] bg-[url(/Banner.jpg)] bg-cover"
//         style={{
//           backgroundSize: "55%",
//           backgroundPosition: "right 100px top 100px",
//         }}
//       ></div>

//       {/* image section */}
//     </div>
//     </div>

//   );
// };
// export default Hero;
