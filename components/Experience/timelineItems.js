import galaxysdk from "./../../public/companies/galaxysdk.png";
import gardeneur from "./../../public/companies/gardeneur.png";
import salubrity from "./../../public/companies/salubrity.png";
import apple from "./../../public/companies/apple.jpeg";

const timelineItems = [
  {
    image: apple,
    showBottomLine: true,
    company: "Apple",
    startDate: "June 2024",
    endDate: "September 2024",
    title: "SWE Intern",
    experience: "Incoming Software Engineering Intern for CAD-CSG team in the Silicon Engineering Group for Summer 2024. Super excited!",
  },
  {
    image: galaxysdk,
    showBottomLine: true,
    company: "GalaxySDK",
    startDate: "June 2023",
    endDate: "August 2023",
    title: "SWE Intern",
    experience: "I developed an inviting onboarding page, boosting user experience and increasing monthly signed-in users by 20%. Next, I built a robust Flask, OpenAI, and Firebase backend for a GPT-powered chat game from scratch. After, I worked on 8 tickets to optimize UI/UX, leading to an enhanced interface and resolution of customer concerns.",
  },
  {
    image: salubrity,
    showBottomLine: true,
    company: "Salubrity",
    startDate: "June 2022",
    endDate: "August 2022",
    title: "SWE Intern",
    experience: "I built a Flask backend using Python and Selenium to pull out scrape 70k+ datapoints, helping identify businesses that would benefit from Salubrity's services, and leading to an expansion from 1 to 10 cities. I also set up an internal tool using a NGINX server backend with a HTML/CSS/JS frontend to find potential business prospects for future growth.",
  },
  {
    image: gardeneur,
    showBottomLine: false,
    company: "Gardeneur",
    startDate: "January 2022",
    endDate: "May 2022",
    title: "SWE Intern",
    experience: "I led a team of 3 in creating a ML plant detection app. I used Tensorflow to train a deep learning model to detect plants using 25 GB of raw image data, achieving 96% accuracy across 50 categories. I created a React Native mobile app and embedded this model to work in real time on smartphones.",
  },
];

export default timelineItems;
