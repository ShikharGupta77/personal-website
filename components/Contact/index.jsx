import Header from "../Header";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import Section from "../Section";

export default function Contact() {
  var date = new Date();
  var year = date.getFullYear();

  return (
    <Section number={"04."} text="Contact" id="Contact">
      <div className="mt-1 flex flex-col lg:mt-5">
        <p className="pt-5 text-base text-secondary-color lg:w-8/12 lg:text-xl">If you have opportunities or are interested in collaboration, please email me. You can also connect on social media for questions or just to say hi! My inbox is always open, and I'll try to get back as soon as possible.</p>
      </div>
      <a className="w-fit rounded-full bg-secondary-color py-2 text-sm text-primary-color transition duration-300 lg:text-base" target="_blank" rel="noopener noreferrer" href="mailto:shkgupta@ucdavis.edu">
        <button className="mt-9">
          <div className="group flex w-full flex-row pl-5 pr-4">
            Email
            <LiaAngleRightSolid size={15} className="my-auto mt-[0.2rem] w-6 transition-all duration-300 lg:mt-[0.25rem] lg:group-hover:pl-2" />
          </div>
        </button>
      </a>
      <div className="mr-24 mt-10 flex flex-row items-center space-x-11">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shikhargupta7/" className="cursor-pointer text-secondary-color transition duration-300 hover:text-accent-color ">
          <FaLinkedin size={28} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ShikharGupta77" className="cursor-pointer text-secondary-color transition duration-300 hover:text-accent-color">
          <FaGithub size={28} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.discord.com/users/711351178146873344" className="cursor-pointer text-secondary-color transition duration-300 hover:text-accent-color">
          <FaDiscord size={28} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shikhar.gupta7/" className="cursor-pointer text-secondary-color transition duration-300 hover:text-accent-color">
          <FaInstagram size={28} />
        </a>
      </div>
      <footer className="mb-12 mt-48 text-sm text-lighter-primary-color lg:text-base">
        © Shikhar Gupta {year}. All rights reserved.
        <br />
        This site is built from scratch with{" "}
        <a className="underline underline-offset-2 hover:underline-offset-4" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        ,{" "}
        <a className="underline underline-offset-2 hover:underline-offset-4" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          Tailwind CSS
        </a>
        , and{" "}
        <a className="underline underline-offset-2 hover:underline-offset-4" href="https://threejs.org/" target="_blank" rel="noopener noreferrer">
          Three.js
        </a>
        . View the source code on{" "}
        <a className="underline underline-offset-2 hover:underline-offset-4" href="https://github.com/ShikharGupta77/personal-website" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        .
      </footer>
    </Section>
  );
}
