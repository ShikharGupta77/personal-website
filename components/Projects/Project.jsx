import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Project({ name, images, description, technologies, github, external_link, reverse }) {
  return (
    <div className={`flex ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} h-[34rem] flex-col`}>
      <div className="flex h-1/2 flex-row justify-center rounded-3xl bg-lighter-primary-color lg:w-7/12">
        {images.map((image) => (
          <Image src={image} className="m-3 h-auto w-auto rounded-3xl lg:m-0" alt="Project Image" />
        ))}
      </div>
      <div className={`flex flex-col space-y-4 text-secondary-color lg:mx-20 lg:w-3/12 ${reverse ? "text-right" : "text-left"} pt-8 lg:pt-28`}>
        <p className="text-2xl font-semibold text-accent-color lg:text-4xl">{name}</p>
        <p className="text-sm lg:text-lg">{description}</p>
        <div className={`flex flex-row ${reverse ? "justify-end" : "justify-start"}`}>
          {technologies.map((t, i) => (
            <p className={`whitespace-nowrap rounded-full bg-lighter-primary-color px-3 py-1 text-xs lg:text-base ${reverse ? "ml-4" : "mr-4"}`} key={i}>
              {t}
            </p>
          ))}
        </div>
        <div className={`flex flex-row ${reverse ? "justify-end" : "justify-start"} space-x-6 pt-2`}>
          <a href={github} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-secondary-color transition duration-300 lg:hover:text-accent-color">
            <FaGithub size={28} />
          </a>
          {external_link && (
            <a href={external_link} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-secondary-color transition duration-300 lg:hover:text-accent-color">
              <FiExternalLink size={28} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
