export const navigation = [
  { name: "About", href: "#about", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

export const skills = [
  {
    title: "Front-end",
    skills: [
      "HTML/CSS",
      "Javascript",
      "React",
      "TypeScript",
      "Tailwind, MUI, Bootstrap",
    ],
  },
  {
    title: "Back-end",
    skills: ["Node.js", "Express", "MySQL"],
  },
  {
    title: "Other",
    skills: ["Git/GitHub", "Figma", "Postman"],
  },
];

export const projects = [
  {
    title: "Currency Converter & Exchange Rate Web",
    image: "/images/project-1.png",
    description:
      "A frontend project for calculating currency exchange rates and displaying the rates, developed using React, TypeScript, Tailwind and data from the Frankfurter API.",
    gitUrl:
      "https://github.com/surarats/fe-prj1-currency-converter-with-react-ts",
    webUrl: "https://fe-prj1-currency-converter-with-react-ts.vercel.app/",
  },
  {
    title: "Clothing Shop Web",
    image: "/images/project-2.png",
    description:
      "This is a team project from Skooldio bootcamp. It is a frontend project developed according to the designer’s specifications and must be developed to support multiple screen sizes, developed using React, Tailwind and data from Skooldio's API.",
    gitUrl: "",
    webUrl: "https://wdb-project.vercel.app/",
  },
  {
    title: "To Do List Web ",
    image: "/images/project-3.png",
    description:
      "A frontend project for track all your task, developed using React, TypeScript, Tailwind and MUI.",
    gitUrl: "https://github.com/surarats/to-do-list-project",
    webUrl: "https://to-do-list-project-khaki.vercel.app/",
  },
];
