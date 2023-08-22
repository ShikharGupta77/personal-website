"use client";

import headshot from "./../../public/headshot.jpg";
import Image from "next/image";
import Header from "../Header";
import { BiLogoAws } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { SiTensorflow } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { BiLogoDocker } from "react-icons/bi";
import { BiLogoCPlusPlus } from "react-icons/bi";
import rickroll_gif from "./../../public/rickroll/rickroll.gif";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Section from "../Section";

export default function About() {
  const [showRickroll, setShowRickroll] = useState(false);
  const rickrollAudioRef = useRef(null);
  const technologiesRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (technologiesRef.current) {
            const icons = technologiesRef.current.querySelectorAll(".grid div");
            const text = technologiesRef.current.querySelector("p");

            icons.forEach((icon, i) => {
              setTimeout(() => {
                icon.style.opacity = "1";
                icon.style.transform = "translateY(-35px)";
              }, i * 100);
            });

            setTimeout(() => {
              text.style.opacity = "1";
              text.style.transform = "translateY(-35px)";
            }, icons.length * 100);
          }
        }
      });
    }, options);

    if (technologiesRef) {
      observer.observe(technologiesRef.current);
    }

    return () => {
      if (technologiesRef.current) {
        observer.unobserve(technologiesRef.current);
      }
    };
  }, [technologiesRef]);

  useEffect(() => {
    if (showRickroll) {
      rickrollAudioRef.current.currentTime = 0;
      rickrollAudioRef.current.play();
    } else {
      rickrollAudioRef.current.pause();
    }
  }, [showRickroll]);

  const iconClassName = "text-secondary-color h-7 w-7 lg:h-10 lg:w-10 lg:hover:text-accent-color transition duration-300";
  const icons = [
    { name: "React", icon: <BiLogoReact className={iconClassName} /> },
    { name: "Node.js", icon: <BiLogoNodejs className={iconClassName} /> },
    { name: "Tensorflow", icon: <SiTensorflow className={iconClassName} /> },
    { name: "SQL", icon: <PiFileSql className={iconClassName} /> },
    { name: "MongoDB", icon: <BiLogoMongodb className={iconClassName} /> },
    { name: "Python", icon: <BiLogoPython className={iconClassName} /> },
    { name: "Git", icon: <BiLogoGit className={iconClassName} /> },
    { name: "C++", icon: <BiLogoCPlusPlus className={iconClassName} /> },
    { name: "Firebase", icon: <BiLogoFirebase className={iconClassName} /> },
    { name: "Docker", icon: <BiLogoDocker className={iconClassName} /> },
    { name: "OpenAI", icon: <SiOpenai className={iconClassName} /> },
    { name: "Java", icon: <BiLogoJava className={iconClassName} /> },
    { name: "AWS", icon: <BiLogoAws className={iconClassName} /> },
    { name: "CSS3", icon: <BiLogoCss3 className={iconClassName} /> },
    { name: "HTML5", icon: <BiLogoHtml5 className={iconClassName} /> },
    { name: "JavaScript", icon: <BiLogoJavascript className={iconClassName} /> },
  ];

  return (
    <Section number={"01."} text="About Me">
      <div className="mt-5 flex flex-col-reverse lg:flex-row">
        <p className="pt-5 text-base text-secondary-color lg:w-7/12 lg:pr-16 lg:text-xl">
          Hey! I'm Shikhar Gupta, and I'm currently pursuing a Bachelor's Degree of Science in Computer Science at the University of California, Davis. Last summer, I was a Software Engineering Intern at{" "}
          <a href="https://www.galaxysdk.com/" target="_blank" rel="noopener noreferrer" className="underline-blue-400 underline decoration-accent-color underline-offset-[3px] transition duration-300 hover:underline-offset-[4px]">
            GalaxySDK
          </a>
          , a startup based in San Francisco.
          <br /> <br />
          My favorite part of programming is creating apps and websites, like this one! I love the whole process of taking an idea from ideation to design to production. I also find competitive programming pretty fun. Finally, I love using AI models to solve interesting and complex problems.
          <br /> <br />
          Outside of programming, I love a good day outdoors. I often go out with friends and family. I also really like playing table tennis, and played for a few years. I'm down for a game at anytime of the day!
        </p>
        <div className="flex h-1/4 flex-row justify-center lg:w-5/12">
          <Image src={showRickroll ? rickroll_gif : headshot} className="my-9 w-10/12 max-w-md self-center rounded-full drop-shadow-[0.6rem_0.55rem_0px_var(--accent)] transition duration-300 lg:mt-0 lg:hover:drop-shadow-[1.1rem_1.05rem_0px_var(--accent)]" onDoubleClick={() => setShowRickroll(!showRickroll)} alt="Profile Photo" />
          <audio src="./rickroll/rickroll.mp3" ref={rickrollAudioRef} />
        </div>
      </div>
      <div className="translate-y-[35px]" ref={technologiesRef}>
        <div className="mt-16 grid grid-cols-4 gap-y-8 lg:mr-16 lg:mt-20 lg:grid-cols-8">
          {icons.map((item, index) => (
            <div key={index} className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lighter-primary-color opacity-0 transition duration-300 lg:h-16 lg:w-16">
              {item.icon}
            </div>
          ))}
        </div>
        <div className="mt-8 lg:mt-12">
          <p className="text-center text-sm font-medium text-secondary-color underline decoration-accent-color underline-offset-4 opacity-0 transition duration-300 lg:text-base">Some technologies I like to work with</p>
        </div>
      </div>
    </Section>
  );
}
