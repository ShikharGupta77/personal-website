"use client";

import Navbar from "./Navbar";
import Cube from "./Cube";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll"; // If you don't rename this it doesn't work

export default function Hero() {
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const cubeRef = useRef(null);

  // 0: not loaded yet, 1: typing, 2: done typing
  const [heyStatus, setHeyStatus] = useState(1);
  const [nameStatus, setNameStatus] = useState(0);
  const [likeStatus, setLikeStatus] = useState(0);
  const [revealPage, setRevealPage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
    document.body.style.overflow = "hidden"; // scroll off during animation
    document.body.style.touchAction = "none"; // disable for mobile
  }, []);

  function typeHey(typewriter) {
    typewriter
      .callFunction(() => window.scrollTo(0, 0))
      .typeString("Hey there!")
      .pauseFor(1700)
      .typeString(" I'm")
      .pauseFor(100)
      .callFunction(() => {
        setHeyStatus(2);
        setNameStatus(1);
      })
      .start();
  }

  function typeName(typewriter) {
    typewriter
      .typeString("Shikhar Gupta")
      .pauseFor(1700)
      .callFunction(() => {
        setNameStatus(2);
        setLikeStatus(1);
      })
      .start();
  }

  function typeLikes(typewriter) {
    typewriter
      .typeString("I like creating apps, websites, and AI models")
      .callFunction(() => {
        setLikeStatus(2);
        setRevealPage(true);
      })
      .start();
  }

  useEffect(() => {
    if (revealPage) {
      if (navRef.current) {
        const headers = navRef.current.querySelectorAll(".desktop .headers a");
        const icons = navRef.current.querySelectorAll(".desktop .icons a");

        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            headers[i].style.opacity = "1";
            headers[i].style.transform = "translateY(20px)";
            icons[5 - i - 1].style.opacity = "1";
            icons[5 - i - 1].style.transform = "translateY(20px)";
          }, i * 200);
        }
      }

      if (cubeRef.current) {
        cubeRef.current.style.transform = "scale(0)";
        setTimeout(() => {
          cubeRef.current.style.transform = "scale(0.95)";
          cubeRef.current.style.opacity = "1";
          if (buttonRef.current) {
            setTimeout(() => {
              buttonRef.current.style.opacity = "1";
              if (navRef.current) {
                const menu = navRef.current.querySelector(".mobile");
                menu.style.opacity = "1";
              }
              document.body.style.overflow = "auto"; // allow scrolling after animation
              document.body.style.touchAction = "";
            }, 800);
          }
        }, 1100);
      }
    }
  }, [revealPage]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar navRef={navRef} />
      <section className="items-strech flex h-full grow flex-col-reverse whitespace-nowrap lg:flex-row">
        <div className="-mt-16 mb-40 flex w-full flex-col items-center justify-center text-center lg:mb-0 lg:mt-0 lg:w-7/12 lg:text-left">
          <div className="w-full translate-y-[20px] lg:-ml-8 lg:-mt-7 lg:mb-32 lg:w-8/12 lg:pr-4">
            <div className="-ml-[5%] flex scale-90 flex-col space-y-3 lg:space-y-5">
              <h2 className={`border-r-0 text-4xl font-semibold text-secondary-color transition duration-300 lg:text-6xl ${heyStatus === 0 ? "opacity-0" : ""}`}>{heyStatus === 1 ? <Typewriter onInit={(typewriter) => typeHey(typewriter)} /> : "Hey there! I'm"}</h2>
              <h1 className={`text-5xl font-bold text-accent-color transition duration-300 lg:text-8xl ${nameStatus === 0 ? "opacity-0" : ""}`}>{nameStatus === 1 ? <Typewriter onInit={(typewriter) => typeName(typewriter)} /> : "Shikhar Gupta"}</h1>
              <h3 className={`text-base text-secondary-color transition duration-300 lg:text-2xl ${likeStatus === 0 ? "opacity-0" : ""}`}>
                {likeStatus === 1 ? (
                  <Typewriter
                    onInit={(typewriter) => typeLikes(typewriter)}
                    options={{
                      delay: 60,
                    }}
                  />
                ) : (
                  "I like creating apps, websites, and AI models"
                )}
              </h3>
            </div>
            <ScrollLink to="Projects" smooth={true} duration={500} offset={-50}>
              <button className="mt-4 rounded-full bg-secondary-color py-2 opacity-0 transition duration-500 lg:mt-5" ref={buttonRef}>
                <div className="group flex w-full flex-row pl-5 pr-4 text-sm lg:text-sm 2xl:text-base">
                  See my work
                  <LiaAngleRightSolid size={15} className="my-auto mt-[0.2rem] w-6 transition-all duration-300 lg:group-hover:pl-2" />
                </div>
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className="mb-24 mt-14 flex w-full flex-1 opacity-0 transition duration-1000 lg:mr-16 lg:mt-20 lg:w-5/12" ref={cubeRef}>
          <Cube />
        </div>
      </section>
    </div>
  );
}
