"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import TimelineComponent from "./TimelineComponent";
import timelineItems from "./timelineItems";
import Image from "next/image";
import { LiaAngleRightSolid } from "react-icons/lia";
import Section from "../Section";

export default function Experience() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [showResumeButton, setShowResumeButton] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setTimeout(() => setShowResumeButton(true), timelineItems.length * 600 * 2 - 300);
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
    <Section number="02." text="Experience">
      <div className="mt-28 flex w-full flex-row justify-between lg:mt-20" ref={ref}>
        <div className="mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineComponent key={index} image={item.image} showBottomLine={item.showBottomLine} company={item.company} startDate={item.startDate} endDate={item.endDate} title={item.title} experience={item.experience} index={index} animate={animate} />
          ))}
        </div>
      </div>
      <a className={`ml-8 w-fit rounded-full bg-secondary-color py-2 text-base text-primary-color transition duration-300 hover:cursor-pointer lg:ml-4 lg:text-sm ${showResumeButton ? "opacity-100" : "opacity-0"}`} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/11JLzIpYyHfdBtnBo5YXxKTHV5oJuBFSZ/view?usp=drive_link">
        <button className="mt-16">
          <div className="group flex w-full flex-row pl-5 pr-4">
            View full resume
            <LiaAngleRightSolid size={15} className="my-auto mt-[0.3rem] w-6 transition-all duration-300 lg:mt-[0.2rem] desktop:group-hover:pl-2" />
          </div>
        </button>
      </a>
    </Section>
  );
}
