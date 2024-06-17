import { Project } from "~/app/_interfaces/interfaces";

export const projects: Project[] = [
  {
    linkUrl: "#",
    name: "Aura",
    label: "Mobile App",
    tags: [
      "Mobile App",
      "UI/UX Design",
      "Dart",
      "Flutter Framework",
      "Riverpods",
    ],
    imageUrl: "/images/mockups/mobile2.png",
    description:
      "Aura is a user-friendly air quality awareness mobile app designed to inform users about the quality of the air around them",
  },
  // {
  //   linkUrl: "#",
  //   label: "Website",
  //   name: "Portfolio",
  //   tags: [
  //     "Website Development",
  //     "Next.js",
  //     "GSock (GSAP)",
  //     "Motion Design",
  //     "Animations",
  //   ],
  //   imageUrl: "/images/mockups/web1.png",
  //   description: "A well curated Portfolio website for Kenneth Topp Yankah",
  // },
  {
    linkUrl: "#",
    label: "Website",
    name: "Awtsyde",
    tags: ["Website Development", "React.js", "Redux", "Animations"],
    imageUrl: "/images/mockups/web2.png",
    description:
      "Awtsyde is a web platform which connects tennis players around the world",
  },
  {
    linkUrl: "#",
    name: "Zyptyk",
    label: "Mobile App",
    tags: ["Flutter", "Dart", "UI/UX Design", "Mobile App"],
    imageUrl: "/images/mockups/mobile1.png",
    description:
      "Zyptyk is a tele-health mobile application which connects clients to Peer Counselors and Therapists for mental health counseling",
  },
];
