"use client";

import { useEffect, useState } from "react";

export default function Header({ number, text, reveal, reference }) {
  return (
    <div className="flex flex-row" ref={reference}>
      <div className="w-fit">
        <p className={`mr-2 text-xl text-lighter-primary-color transition duration-700 lg:text-2xl ${reveal ? "opacity-100" : "opacity-0"} t`}>{number}</p>
        <p className={`mt-1 flex flex-col whitespace-nowrap text-4xl font-semibold transition duration-700 lg:text-5xl ${reveal ? "opacity-100" : "opacity-0"} text-accent-color`}>{text}</p>
      </div>
      <div className="flex w-full flex-col">
        <div className="h-1/2"></div>
        <hr className={`ml-3 mt-[1.1rem] border-lighter-primary-color transition-all duration-700 lg:ml-5 lg:mt-[1.3rem] ${reveal ? "w-3/4 lg:w-1/4" : "w-0"}`} />
      </div>
    </div>
  );
}
