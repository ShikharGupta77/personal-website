import Header from "../Header";
import Section from "../Section";
import Project from "./Project";
import projectInfo from "./projectInfo";

export default function Projects() {
  return (
    <Section number={"03."} text="Projects" id="Projects">
      <div className="mt-28 flex flex-col space-y-56">
        {projectInfo.map((p, i) => (
          <Project name={p.name} images={p.images} description={p.description} technologies={p.technologies} github={p.github} external_link={p.external_link} reverse={i % 2 == 1} key={i} />
        ))}
      </div>
    </Section>
  );
}
