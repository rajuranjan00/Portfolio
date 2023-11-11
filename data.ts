import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>Angular</b>  and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & <b>SQL </b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using  <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "DS and Algo",
    about: "a daily problem solver in <b>Leet Code</b>  and <b>GeeksForGeeks</b> ",
  },
  // {
  //   Icon: AiOutlineAntDesign,
  //   title: "UI/UX designer",
  //   about:
  //     "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  // },
  // {
  //   Icon: RiComputerLine,
  //   title: "Whatever",
  //   about:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  // },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "C++",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "SQL",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "NodeJs",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "GIT",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "JIRA",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Bitbucket",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "80",
  },
];

export const projects: IProject[] = [
  { 
    name: "RashP_Application",
    description:
      "Implemented a comprehensive order management system for Chizza, enabling restaurants to \n efficiently handle incoming orders, track pizza availability, and monitor order status",
    image_path: "/images/restaurant.PNG",
    deployed_url: "https://rash-p-application.vercel.app/",
    github_url: "https://github.com/rajuranjan00/RashP_Application",
    category: ["react", "node", "mongo", "nextjs"],
    key_techs: ["React", "Next.js", "JavaScript", "HTML", "CSS", "MongoDB", "Redux", "Node"],
  },
  {
    name: "MeloMeet-A video conferencing application ",
    image_path: "/images/melomeet.PNG",
    deployed_url: "https://melo-meet-iota.vercel.app/",
    github_url: "https://github.com/rajuranjan00/MeloMeet",
    category: ["webrtc"],
    description:
      "This application is a video conferencing platform designed for optimal communication speed and \n responsiveness. Leveraging WebRTC for direct browser-to-browser communication and websockets for real-time data exchange",
    key_techs: ["WebRTC", "Websocket", "HTML", "CSS", "Javascript"],
  },

  {
    name: "Sitcom-hub",
    image_path: "/images/sitcom.PNG",
    deployed_url: "https://sitcom-hub-sphere.vercel.app/",
    github_url: "https://github.com/rajuranjan00/Sitcom-hub",
    category: ["typescript", "nextjs"],
    description:
      "Sitcom Hub is a Next.js web application that allows you to stream your favorite \n sitcoms freely, with ad-supported viewing",
    key_techs: ["TypeScript", "JavaScript", "HTML", "CSS", "Next.js"],
  },

  {
    name: "SpaceX",
    image_path: "/images/spacex.PNG",
    deployed_url: "https://sppacexx.netlify.app/",
    github_url: "https://github.com/rajuranjan00/SpaceX",
    category: ["typescript" ],
    description:
      "The SpaceX Launch Tracker provides space enthusiasts and curious minds with a \n visually appealing and informative platform to explore SpaceX's remarkable journey into space",
    key_techs: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },


];
