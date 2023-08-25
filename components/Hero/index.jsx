"use client";

import Navbar from "./Navbar";
import Cube from "./Cube";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll"; // If you don't rename this it doesn't work

export default function Hero() {
  const navRef = useRef(null);
  const mainRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const cubeRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  useEffect(() => {
    const delay = 200;
    if (navRef.current) {
      const headers = navRef.current.querySelectorAll(".desktop .headers a");
      const icons = navRef.current.querySelectorAll(".desktop .icons a");

      for (let i = 0; i < 5; i++) {
        setTimeout(
          () => {
            headers[i].style.opacity = "1";
            headers[i].style.transform = "translateY(20px)";
            icons[5 - i - 1].style.opacity = "1";
            icons[5 - i - 1].style.transform = "translateY(20px)";
          },
          i * 125 + delay,
        );
      }
    }

    mainRefs.forEach((ref, i) => {
      if (ref.current) {
        setTimeout(
          () => {
            ref.current.style.opacity = "1";
            ref.current.style.transform = "translateY(-10px)";
          },
          i * 100 + 725 + delay,
        );
      }
    });

    if (cubeRef.current) {
      cubeRef.current.style.transform = "scale(0)";
      setTimeout(() => {
        cubeRef.current.style.transform = "scale(0.95)";
        cubeRef.current.style.opacity = "1";
      }, 1000 + delay);
    }

    if (navRef.current) {
      setTimeout(() => {
        const menu = navRef.current.querySelector(".mobile");
        menu.style.opacity = "1";
      }, 1500 + delay);
    }

    if (pointerRef.current) {
      for (let i = 0; i < 3; i++) {
        setTimeout(
          () => {
            pointerRef.current.style.transition = "left 1000ms ease-in-out, opacity 200ms";
            pointerRef.current.style.opacity = "1";
            pointerRef.current.style.left = "75%";
            setTimeout(() => {
              pointerRef.current.style.transition = "left 0ms ease-in-out, opacity 200ms";
              pointerRef.current.style.opacity = "0";
              setTimeout(() => {
                pointerRef.current.style.left = "5%";
              }, 200);
            }, 1100);
          },
          1800 + delay + i * 1600,
        );
      }
    }
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar navRef={navRef} />
      <section className="items-strech flex h-full grow flex-col-reverse whitespace-nowrap lg:flex-row">
        <div className="-mt-16 mb-40 flex w-full flex-col items-center justify-center text-center lg:mb-0 lg:mt-0 lg:w-7/12 lg:text-left">
          <div className="w-full translate-y-[10px] lg:-ml-8 lg:-mt-7 lg:mb-32 lg:w-8/12 lg:pr-4">
            <div className="-ml-[5%] flex scale-90 flex-col space-y-3 lg:space-y-5">
              <h2 className="border-r-0 text-4xl font-semibold text-secondary-color opacity-0 transition duration-300 lg:text-6xl" ref={mainRefs[0]}>
                Hey there! I'm
              </h2>
              <h1 className="text-5xl font-bold text-accent-color opacity-0 transition duration-300 lg:text-8xl" ref={mainRefs[1]}>
                Shikhar Gupta
              </h1>
              <h3 className="text-base text-secondary-color opacity-0 transition duration-300 lg:text-2xl" ref={mainRefs[2]}>
                I like creating apps, websites, and AI models
              </h3>
            </div>
            <ScrollLink to="Experience" smooth={true} duration={500} offset={-50}>
              <button className="mt-4 rounded-full bg-secondary-color py-2 opacity-0 transition duration-300 lg:mt-5" ref={mainRefs[3]}>
                <div className="group flex w-full flex-row pl-5 pr-4 text-sm lg:text-sm 2xl:text-base">
                  See my experience
                  <LiaAngleRightSolid size={15} className="my-auto mt-[0.2rem] w-6 transition-all duration-300 lg:mt-[0.33rem] lg:group-hover:pl-2" />
                </div>
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className="mb-24 mt-14 flex w-full flex-1 opacity-0 transition duration-1000 lg:mr-16 lg:mt-20 lg:w-5/12" ref={cubeRef}>
          <Cube pointerRef={pointerRef} />
        </div>
      </section>
    </div>
  );
}
