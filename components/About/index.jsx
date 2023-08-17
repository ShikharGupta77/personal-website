import headshot from "./../../public/headshot.jpg";
import Image from "next/image";
import Header from "../Header";
import aws from "./../../public/technologies/aws.svg";
import css from "./../../public/technologies/css.svg";
import git from "./../../public/technologies/git.svg";
import html5 from "./../../public/technologies/html5.svg";
import java from "./../../public/technologies/java.svg";
import javascript from "./../../public/technologies/javascript.svg";
import mongo from "./../../public/technologies/mongo.svg";
import nodejs from "./../../public/technologies/nodejs.svg";
import python from "./../../public/technologies/python.svg";
import react from "./../../public/technologies/react.svg";
import tensorflow from "./../../public/technologies/tensorflow.svg";

export default function About() {
  const icons = [
    { name: "CSS", icon: css },
    { name: "Git", icon: git },
    { name: "HTML5", icon: html5 },
    { name: "Java", icon: java },
    { name: "JavaScript", icon: javascript },
    { name: "MongoDB", icon: mongo },
    { name: "Node.js", icon: nodejs },
    { name: "Python", icon: python },
    { name: "React", icon: react },
    { name: "TensorFlow", icon: tensorflow },
    { name: "AWS", icon: aws },
  ];
  return (
    <section className="flex w-full flex-col">
      <Header number={"01."} text="About Me" />
      <div>
        <div className="flex flex-row lg:flex-col-reverse">
          <p className="pt-5 text-xl text-secondary-color desktop:w-7/12 desktop:pr-16">
            Hey! I'm Shikhar Gupta, and I enjoy creating things for the internet. Currently, I'm pursuing a Bachelor's Degree of Science in Computer Science at the University of California, Davis. Last summer, I was a Software Engineering Intern at{" "}
            <a href="https://www.galaxysdk.com/" target="_blank" rel="noopener noreferrer" className="underline-blue-400 underline decoration-accent-color underline-offset-[3px] transition duration-300 hover:underline-offset-[4px]">
              GalaxySDK
            </a>
            , a startup based in San Francisco.
            <br /> <br />
            My favorite part of programming is creating apps and websites, like this one! I love the whole process of taking an idea from ideation to design to production. I also love solving data structures and algorithims related questions! Finally, I love using AI models to solve interesting and complex problems.
            <br /> <br />
            Outside of programming, I also love a good day outdoors! I often go out with friends and family. I also really like playing table tennis, and played for a few years. I'm down for a game at anytime of the day!
          </p>
          <div className="flex flex-col desktop:w-5/12">
            <Image src={headshot} className="-mt-5 rounded-full p-10 drop-shadow-[0.6rem_0.55rem_0px_var(--accent)] transition duration-300 hover:drop-shadow-[1.1rem_1.05rem_0px_var(--accent)]" />
          </div>
        </div>
        <div className="flex flex-row justify-around">
          {icons.map((tech, index) => (
            <div key={index} className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-color">
              <Image src={tech.icon} alt={tech.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
