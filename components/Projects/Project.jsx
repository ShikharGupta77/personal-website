"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useEffect, useRef } from "react";

export default function Project({ name, images, description, technologies, github, external_link, reverse }) {
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (ref.current) {
            ref.current.style.opacity = "1";
            ref.current.style.transform = "translateY(-20px)";
          }
        }
      });
    }, options);

    if (ref) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div className={`flex ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} h-96 translate-y-[20px] flex-col opacity-0 transition duration-500`} ref={ref}>
      <div className="flex flex-row justify-center space-x-6 drop-shadow-[0rem_0rem_15px_var(--accent-faded)] lg:max-w-[50rem] lg:space-x-12 lg:drop-shadow-[0rem_0rem_30px_var(--accent-faded)]">
        {images.map((image) => (
          <div className="flex flex-row items-center">
            <Image src={image} className="h-auto w-auto self-center rounded-xl lg:m-0 lg:rounded-3xl" alt="Project Image" />{" "}
          </div>
        ))}
      </div>
      <div className={`flex flex-col space-y-4 text-secondary-color lg:w-1/2 ${reverse ? "text-right lg:mr-28" : "text-left lg:ml-28"} pt-8 lg:pt-28`}>
        <p className="text-2xl font-semibold text-accent-color lg:text-4xl">{name}</p>
        <p className="text-sm lg:text-lg">{description}</p>
        <div className={`flex flex-row ${reverse ? "justify-end" : "justify-start"}`}>
          {technologies.map((t, i) => (
            <p className={`whitespace-nowrap rounded-full bg-lighter-primary-color px-3 py-1 text-xs lg:text-base ${reverse ? "ml-4" : "mr-4"}`} key={i}>
              {t}
            </p>
          ))}
        </div>
        <div className={`flex flex-row ${reverse ? "justify-end" : "justify-start"} space-x-6 pt-2`}>
          <a href={github} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-secondary-color transition duration-300 lg:hover:text-accent-color">
            <FaGithub size={28} />
          </a>
          {external_link && (
            <a href={external_link} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-secondary-color transition duration-300 lg:hover:text-accent-color">
              <FiExternalLink size={28} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
