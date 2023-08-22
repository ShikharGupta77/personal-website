"use client";

import { useEffect, useState } from "react";

export default function Header({ number, text, reveal, reference }) {
  return (
    <div className="flex flex-row" ref={reference}>
      <div className="w-fit">
        <p className={`mr-2 pl-1 text-2xl text-lighter-primary-color transition duration-700 ${reveal ? "opacity-100" : "opacity-0"} t`}>{number}</p>
        <p className={`mt-4 flex flex-col whitespace-nowrap text-xl-responsive font-semibold transition duration-700 ${reveal ? "opacity-100" : "opacity-0"} text-accent-color`}>{text}</p>
      </div>
      <div className="flex w-full flex-col">
        <div className="h-1/2"></div>
        <hr className={`ml-3 mt-6 border-lighter-primary-color transition-all duration-700 lg:ml-5 ${reveal ? "w-3/4 lg:w-1/4" : "w-0"}`} />
      </div>
    </div>
  );
}
