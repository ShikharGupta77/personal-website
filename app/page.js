import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col space-y-40">
      <Hero />
      <div className="mx-auto flex w-10/12 flex-col space-y-64">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
