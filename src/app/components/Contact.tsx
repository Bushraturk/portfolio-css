import React from "react";
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "@/app/CSS/Contact.css"

const Contact = () => {
  return (
    <div id="contact">
      
        <div className="content">
          <h2 >Get in touch</h2>
          <p>
            Drop me a line, give ,me a call, or send me a message by sumitting
            the form.
          </p>

          <div id="icon">
            <MdMailOutline size={30} />
            <a href="mailto:bushrahussain068@gmail.com">
              bushrahussain068@gmail.com
            </a>
          </div>
          <div id="icon">
            <BsTelephone size={30} /> (0331) 6236192
          </div>
          <div id="icon" >
            <FaLinkedin size={30} />
            <a
              href="//www.linkedin.com/in/bushra-turk12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bushra Turk{" "}
            </a>
          </div>
        </div>
        <div className="form">
          <div data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea rows={8}></textarea>
          </div>
          <button data-aos="zoom-in-up">Send</button>
        </div>
      </div>
  );
};

export default Contact;

// data-aos="zoom-in-up"
