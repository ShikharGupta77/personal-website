"use client";

import Header from "./Header";
import { useEffect, useRef, useState } from "react";

export default function Section(props) {
  const ref = useRef(null);
  const children = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (children) {
            setReveal(true);
            setTimeout(() => {
              children.current.style.opacity = "1";
              children.current.style.transform = "translateY(-30px)";
            }, 500);
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
    <section className="flex w-full flex-col" id={props.id}>
      <Header number={props.number} text={props.text} reveal={reveal} reference={ref} />
      <div className="opacity-0 transition duration-500" ref={children}>
        <div className="translate-y-[30px]"> {props.children} </div>
      </div>
    </section>
  );
}
