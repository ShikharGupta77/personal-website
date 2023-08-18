import Image from "next/image";

export default function Project({ name, image, description, technologies, github, external_link }) {
  return (
    <div className="flex flex-row">
      <div className="relative">
        <Image src={image} className="rounded-3xl" />
      </div>
      <div className="ml-10 flex w-3/12 flex-col space-y-4 text-secondary-color">
        <p className="text-4xl font-medium text-accent-color">{name}</p>
        <p>{description}</p>
        <div className="flex flex-row">
          {technologies.map((t, i) => (
            <div className="flex flex-row">
              <p className="mr-4 rounded-full bg-lighter-primary-color px-3 py-1" key={i}>
                {t}
              </p>
            </div>
          ))}
        </div>
        <a href={github}>Link</a>
      </div>
    </div>
  );
}
