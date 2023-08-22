import asl from "./../../public/projects/asl.png";
import ccp1 from "./../../public/projects/ccp1.png";
import ccp2 from "./../../public/projects/ccp2.png";
import ccp3 from "./../../public/projects/ccp3.png";
import chatapp from "./../../public/projects/chatapp.png";
import research from "./../../public/projects/research.png";

const projectInfo = [
  {
    name: "Handscript",
    images: [asl],
    description: "A web app that helps users learn American Sign Language with real time translation, instruction, and feedback.",
    technologies: ["Tensorflow", "React.js", "AWS", "Flask"],
    github: "https://github.com/ShikharGupta77/handscript",
    external_link: "https://handscriptapp.vercel.app/",
  },
  {
    name: "Chatter",
    images: [chatapp],
    description: "An app for messaging your friends and family with a visually aesthetic design.",
    technologies: ["React.js", "MongoDB", "Express", "NodeJS"],
    github: "https://github.com/ShikharGupta77/chatter",
  },
  {
    name: "Community Connect",
    images: [ccp1, ccp2, ccp3],
    description: "A social media app that connects the community through recycling by various rewards systems and social features.",
    technologies: ["React Native", "Firebase", "CSS", "Node"],
    github: "https://github.com/ShikharGupta77/CommunityConnect",
    external_link: "https://www.youtube.com/watch?v=sSOFI_x0Umc",
  },
  {
    name: "ML Research",
    images: [research],
    description: "Reducing algorithmic bias in imbalanced datasets through conditional synthetic image generation.",
    technologies: ["Tensorflow", "Pandas", "Seaborn", "Numpy"],
    github: "https://github.com/ShikharGupta77/Conditional-Synthetic-Image-Generation-for-Reducing-Algorithmic-Bias-in-Imbalanced-Datasets",
    external_link: "https://docs.google.com/presentation/d/1rwqQeeHNJa8b2X2G9EYm_URZnzYVyJa8/edit#slide=id.p1",
  },
];

export default projectInfo;
