import Header from "../Header";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

export default function Contact() {
  var date = new Date();
  var year = date.getFullYear();

  return (
    <section className="flex w-full flex-col">
      <Header number={"04."} text="Contact" />
      <div className="mt-5 flex flex-col lg:mt-1">
        <p className="pt-5 text-xl text-secondary-color lg:text-base desktop:w-8/12">If you have opportunities or are interested in collaboration, please email me. You can also connect on social media for questions or just to say hi! My inbox is always open, and I'll try to get back as soon as possible.</p>
      </div>
      <a className="mt-9 w-fit rounded-full bg-secondary-color py-2 text-base transition duration-300 hover:cursor-pointer lg:text-sm" target="_blank" rel="noopener noreferrer" href="mailto:shikharscout@gmail.com">
        <div className="group flex w-full flex-row pl-5 pr-4">
          Email
          <LiaAngleRightSolid size={15} className="my-auto mt-[0.25rem] w-6 transition-all duration-300 lg:mt-[0.2rem] desktop:group-hover:pl-2" />
        </div>
      </a>
      <div className="mr-24 mt-10 flex flex-row items-center space-x-11">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shikhargupta7/" className="cursor-pointer text-secondary-color transition duration-300 hover:text-accent-color">
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
      <footer className="mb-12 mt-48 text-base text-lighter-primary-color lg:text-sm">
        © Shikhar Gupta {year}. All rights reserved.
        <br />
        This site is built with{" "}
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
    </section>
  );
}
