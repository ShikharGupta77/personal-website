import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[accent-color] after:dark:opacity-100 before:lg:h-[360px]"></div>
      <Hero />
      <div className="mx-auto flex w-10/12 flex-col">
        <About />
      </div>
    </main>
  );
}
