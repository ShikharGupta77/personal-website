"use client";

import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { Link } from "react-scroll";

export default function Navbar({ navRef }) {
  const links = ["About", "Experience", "Projects", "Contact"];
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuToggled) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "";
    }
  }, [isMobileMenuToggled]);

  return (
    <div ref={navRef}>
      {/*Desktop menu*/}
      <div className="desktop hidden h-24 justify-between pt-5 text-secondary-color lg:flex">
        <div className="headers ml-20 flex -translate-y-[20px] flex-row items-center space-x-11 pb-2 transition duration-300">
          {links.map((link, i) => {
            return (
              <Link key={i} to={link} smooth={true} duration={500} offset={-50} className="text-md group text-secondary-color opacity-0 transition duration-200 hover:cursor-pointer hover:text-accent-color">
                {link}
                <span className="block h-0.5 max-w-0 bg-accent-color transition-all duration-300 group-hover:max-w-full"></span>
              </Link>
            );
          })}
          <a target="_blank" rel="noopener noreferrer" className="text-md rounded-full bg-secondary-color px-5 py-2 text-primary-color opacity-0 drop-shadow-[0_0px_10px_var(--accent)] transition duration-300 hover:drop-shadow-[0_0px_13px_var(--accent)]" href="https://drive.google.com/file/d/11JLzIpYyHfdBtnBo5YXxKTHV5oJuBFSZ/view?usp=drive_link">
            Resume
          </a>
        </div>
        <div className="icons mr-24 flex -translate-y-[20px] flex-row items-center space-x-11">
          <a target="_blank" rel="noopener noreferrer" href="mailto:shkgupta@ucdavis.edu" className="cursor-pointer text-secondary-color opacity-0 transition duration-300 hover:text-accent-color">
            <MdEmail size={33} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shikhargupta7/" className="cursor-pointer text-secondary-color opacity-0 transition duration-300 hover:text-accent-color">
            <FaLinkedin size={28} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ShikharGupta77" className="cursor-pointer text-secondary-color opacity-0 transition duration-300 hover:text-accent-color">
            <FaGithub size={28} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.discord.com/users/711351178146873344" className="cursor-pointer text-secondary-color opacity-0 transition duration-300 hover:text-accent-color">
            <FaDiscord size={28} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shikhar.gupta7/" className="cursor-pointer text-secondary-color opacity-0 transition duration-300 hover:text-accent-color">
            <FaInstagram size={28} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile z-10 flex h-0 flex-col items-center justify-between bg-inherit pt-5 text-secondary-color opacity-0 transition duration-500 lg:hidden">
        {/* Blur */}
        <div className={`fixed inset-0 z-10 bg-transparent backdrop-blur transition-opacity duration-300 ${isMobileMenuToggled ? "opacity-100" : "pointer-events-none opacity-0"}`}></div>
        <span className={`z-20 ml-auto mr-6 transform cursor-pointer text-secondary-color transition-transform duration-300 ${isMobileMenuToggled ? "-rotate-180" : ""}`} onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          {isMobileMenuToggled ? <FaTimes size={28} /> : <FaBars size={28} />}
        </span>
        <div className={`l-auto fixed left-1/3 z-10 flex h-screen w-9/12 -translate-y-5 flex-col justify-around bg-lighter-primary-color shadow-2xl transition duration-300 ${isMobileMenuToggled ? "translate-x-0" : "translate-x-full"}`}>
          <div className="h-6/12 mr-10 mt-16 flex flex-col items-center space-y-10 transition duration-300">
            {links.map((link, i) => {
              return (
                <div key={i}>
                  <Link to={link} smooth={true} duration={500} offset={-50} onClick={() => setIsMobileMenuToggled(false)} className="group text-xl text-secondary-color transition duration-300">
                    {link}
                  </Link>
                  <span className="block h-0.5 max-w-full bg-accent-color transition-all duration-300"></span>
                </div>
              );
            })}
            <a target="_blank" rel="noopener noreferrer" className="text-md rounded-full bg-secondary-color px-5 py-2 text-primary-color drop-shadow-[0_0px_10px_var(--accent)]" href="https://drive.google.com/file/d/11JLzIpYyHfdBtnBo5YXxKTHV5oJuBFSZ/view?usp=drive_link">
              Resume
            </a>
          </div>
          <div className="mb-16 ml-4 mr-12 flex flex-row items-center justify-around">
            <a target="_blank" rel="noopener noreferrer" href="mailto:shkgupta@ucdavis.edu" className="cursor-pointer text-secondary-color transition duration-300">
              <MdEmail size={29} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shikhargupta7/" className="cursor-pointer text-secondary-color transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ShikharGupta77" className="cursor-pointer text-secondary-color transition duration-300">
              <FaGithub size={24} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.discord.com/users/711351178146873344" className="cursor-pointer text-secondary-color transition duration-300">
              <FaDiscord size={24} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shikhar.gupta7/" className="cursor-pointer text-secondary-color transition duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
