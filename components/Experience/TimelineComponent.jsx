"use client";

import "./TimelineComponent.css";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function TimelineComponent({ company, dates, title, experience, image, showBottomLine, index, animate }) {
  const circleRefs = [useRef(null), useRef(null)];
  const lineRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const delay = 500;

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
              if (i % 2 == 0) {
                textRef.current.classList.add("animate-text");
              } else {
                setTimeout(() => {
                  textRef.current.classList.add("animate-text");
                }, delay / 2);
              }
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
      <div className="flex flex-col pt-1 text-right text-secondary-color">
        <p className="text whitespace-nowrap text-2xl" ref={textRefs[0]}>
          {company}
        </p>
        <p className="text whitespace-nowrap pt-2 text-base" ref={textRefs[1]}>
          {dates}
        </p>
      </div>
      <div className="mx-16 flex flex-1 flex-col justify-self-center lg:mx-6">
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
        <div className="text whitespace-nowrap text-2xl" ref={textRefs[2]}>
          {title}
        </div>
        <div className="text pt-2 text-base" ref={textRefs[3]}>
          {experience}
        </div>
      </div>
    </div>
  );
}
