import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col space-y-40">
      <Hero />
      <div className="mx-auto flex w-10/12 flex-col space-y-64">
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
