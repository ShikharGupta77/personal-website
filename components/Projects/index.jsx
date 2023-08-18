import Header from "../Header";
import Project from "./Project";
import projectInfo from "./projectInfo";

export default function Projects() {
  return (
    <section className="flex w-full flex-col">
      <Header number={"03."} text="Projects" />
      <div className="flex flex-col">{projectInfo.map((p) => p.technologies && <Project name={p.name} image={p.image} description={p.description} technologies={p.technologies} github={p.github} external_link={p.external_link} />)}</div>
    </section>
  );
}
