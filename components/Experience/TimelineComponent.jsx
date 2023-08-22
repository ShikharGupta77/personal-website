"use client";

import "./TimelineComponent.css";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function TimelineComponent({ company, startDate, endDate, title, experience, image, showBottomLine, index, animate }) {
  const circleRefs = [useRef(null), useRef(null)];
  const lineRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = [useRef(null), useRef(null), useRef(null)];
  const delay = 600;

  useEffect(() => {
    if (animate) {
      setTimeout(
        () => {
          circleRefs.forEach((circleRef) => {
            if (circleRef.current) {
              circleRef.current.classList.add("fill");
            }
          });
          if (imageRef.current) {
            imageRef.current.classList.add("animate-image");
          }
          textRefs.forEach((textRef, i) => {
            if (textRef.current) {
              setTimeout(
                () => {
                  textRef.current.classList.add("animate-text");
                },
                (delay / 3) * i,
              );
            }
          });
          setTimeout(() => {
            if (lineRef.current) {
              lineRef.current.classList.add("animate-line");
            }
          }, delay);
        },
        index * delay * 2,
      );
    }
  }, [animate]);

  return (
    <div className="flex flex-row">
      <div className="ml-2 mr-5 flex flex-1 flex-col justify-self-center lg:ml-6 lg:mr-16">
        <div className="left animate" id="loading">
          <div className="inner-shadow"></div>
          <Image src={image} className="inner-shadow image" alt="Company image" ref={imageRef} />
          <div className="hold left">
            <div className="" ref={circleRefs[0]}></div>
          </div>
          <div className="hold right">
            <div className="" ref={circleRefs[1]}></div>
          </div>
        </div>
        {showBottomLine && (
          <div className="lineContainer">
            <div className="line mx-auto" ref={lineRef}></div>
          </div>
        )}
      </div>
      <div className="pt-1 text-left text-secondary-color">
        <p className="text whitespace-nowrap" ref={textRefs[0]}>
          <span className="text-2xl font-bold text-accent-color">{company}</span> <span className="pl-1 text-xl">{title}</span>
        </p>
        <p className="text whitespace-nowrap pt-2 text-xs lg:text-base" ref={textRefs[1]}>
          {startDate} <span className="text-secondary-color">-</span> {endDate}
        </p>
        <div className="text pt-2 text-sm lg:text-lg" ref={textRefs[2]}>
          {experience}
        </div>
      </div>
    </div>
  );
}
