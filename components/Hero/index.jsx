"use client";

import Navbar from "./Navbar";
import Cube from "./Cube";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useEffect, useRef } from "react";
import TypeWriter from "typewriter-effect";

export default function Hero() {
  const navRef = useRef(null);
  const heroRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    if (navRef.current) {
      const headers = navRef.current.querySelectorAll(".headers a");
      const icons = navRef.current.querySelectorAll(".icons a");

      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          headers[i].style.opacity = "1";
          headers[i].style.transform = "translateY(20px)";
          icons[5 - i - 1].style.opacity = "1";
          icons[5 - i - 1].style.transform = "translateY(20px)";
        }, i * 200);
      }

      for (let i = 0; i < 4; i++) {
        setTimeout(
          () => {
            heroRefs[i].current.style.opacity = "1";
            heroRefs[i].current.style.transform = "translateY(-20px)";
          },
          i * 200 + 1500,
        );
      }
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar navRef={navRef} />
      <section className="items-strech flex h-full grow flex-col-reverse whitespace-nowrap lg:flex-row">
        <div className="-mt-16 mb-40 flex w-full flex-col items-center justify-center text-center lg:mb-0 lg:mt-0 lg:w-7/12 lg:text-left">
          <div className="w-full translate-y-[20px] lg:-ml-4 lg:-mt-7 lg:mb-32 lg:w-8/12 lg:pr-4">
            <div className="-ml-[2.5%] flex scale-95 flex-col space-y-3 lg:space-y-5">
              <h2 className="text-4xl font-semibold text-secondary-color opacity-0 transition duration-300 lg:text-5xl 2xl:text-6xl" ref={heroRefs[0]}>
                Hey there! I'm
              </h2>
              <h1 className="text-5xl font-bold text-accent-color opacity-0 transition duration-300 lg:text-6xl 2xl:text-8xl" ref={heroRefs[1]}>
                Shikhar Gupta
              </h1>
              <h3 className="text-base text-secondary-color opacity-0 transition duration-300 lg:text-xl 2xl:text-2xl" ref={heroRefs[2]}>
                I like creating apps, websites, and AI models
              </h3>
            </div>
            <button className="mt-4 rounded-full bg-secondary-color py-2 opacity-0 transition duration-300 lg:mt-5" ref={heroRefs[3]}>
              <div className="group flex w-full flex-row pl-5 pr-4 text-sm lg:text-sm 2xl:text-base">
                See my work
                <LiaAngleRightSolid size={15} className="my-auto mt-[0.3rem] w-6 transition-all duration-300 lg:group-hover:pl-2" />
              </div>
            </button>
          </div>
        </div>
        <div className="mb-24 mt-14 flex w-full flex-1 lg:mr-16 lg:mt-20 lg:w-5/12">
          <Cube />
        </div>
      </section>
    </div>
  );
}
