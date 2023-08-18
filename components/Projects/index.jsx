import Header from "../Header";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="flex w-full flex-col">
      <Header number={"03."} text="Projects" />
      <div className="flex flex-col">
        <Project />
      </div>
    </section>
  );
}
