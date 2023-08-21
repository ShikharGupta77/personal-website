import Header from "../Header";
import Project from "./Project";
import projectInfo from "./projectInfo";

export default function Projects() {
  return (
    <section className="flex w-full flex-col">
      <Header number={"03."} text="Projects" />
      <div className="mt-28 flex flex-col space-y-48 lg:space-y-20">
        {projectInfo.map((p, i) => (
          <Project name={p.name} images={p.images} description={p.description} technologies={p.technologies} github={p.github} external_link={p.external_link} reverse={i % 2 == 1} />
        ))}
      </div>
    </section>
  );
}
