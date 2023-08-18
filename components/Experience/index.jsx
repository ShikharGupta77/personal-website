"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import TimelineComponent from "./TimelineComponent";
import timelineItems from "./timelineItems";
import Image from "next/image";

export default function Experience() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
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
  });

  return (
    <div className="flex flex-col" ref={ref}>
      <Header number="02." text="Experience" />
      <div className="mt-16 flex w-full flex-row justify-between">
        <div className="mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineComponent key={index} image={item.image} showBottomLine={item.showBottomLine} company={item.company} dates={item.dates} title={item.title} experience={item.experience} index={index} animate={animate} />
          ))}
        </div>
      </div>
    </div>
  );
}
