import asl from "./../../public/projects/asl.png";
import ccp from "./../../public/projects/ccp.png";
import chatapp from "./../../public/projects/chatapp.png";
import research from "./../../public/projects/research.png";

const projectInfo = [
  {
    name: "Handscript",
    image: asl,
    description: "This is an app that informs the user about the crisis of mute and deaf people in the United States and helps them learn American Sign Language with real time translation, instruction, and feedback.",
    technologies: ["OpenCV", "Tensorflow", "React.js", "AWS", "Flask"],
    github: "https://github.com/ShikharGupta77/handscript",
    external_link: "https://handscriptapp.vercel.app/",
  },
  {
    name: "Chatter: A Live Chatting Application",
    image: chatapp,
  },
  {
    name: "Community Connect: A Social Media App For The Community",
    image: ccp,
  },
  {
    name: "Research: Conditional Synthetic Image Generation for Reducing Algorithimic Bias in Imbalanced Datasets",
    image: research,
  },
];

export default projectInfo;
