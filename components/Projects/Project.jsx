import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Project({ name, images, description, technologies, github, external_link, reverse }) {
  return (
    <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} h-[34rem] lg:flex-col`}>
      <div className="flex flex-row justify-center rounded-3xl bg-lighter-primary-color lg:h-1/2 desktop:w-7/12">
        {images.map((image) => (
          <Image src={image} className="h-auto w-auto rounded-3xl lg:m-3" alt="Project Image" />
        ))}
      </div>
      <div className={`flex flex-col space-y-4 text-secondary-color desktop:mx-20 desktop:w-3/12 ${reverse ? "text-right" : "text-left"} pt-28 lg:pt-8`}>
        <p className="text-4xl font-semibold text-accent-color lg:text-2xl">{name}</p>
        <p className="text-lg lg:text-sm">{description}</p>
        <div className={`flex flex-row ${reverse ? "justify-end" : "justify-start"}`}>
          {technologies.map((t, i) => (
            <p className={`whitespace-nowrap rounded-full bg-lighter-primary-color px-3 py-1 text-base lg:text-xs ${reverse ? "ml-4" : "mr-4"}`} key={i}>
              {t}
            </p>
          ))}
        </div>
        <div className={`flex flex-row ${reverse ? "justify-end" : "justify-start"} space-x-6 pt-2`}>
          <a href={github} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-secondary-color transition duration-300 desktop:hover:text-accent-color">
            <FaGithub size={28} />
          </a>
          {external_link && (
            <a href={external_link} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-secondary-color transition duration-300 desktop:hover:text-accent-color">
              <FiExternalLink size={28} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
