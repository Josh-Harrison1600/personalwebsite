//resuable file for all of my project data
import { ReactNode } from 'react';

export type ProjectTech = { name: string; href: string };
export type Project = {
  title: string;
  description: ReactNode; 
  techStack: ProjectTech[];
  videoUrl?: string;
  imageUrl?: string;
  liveUrl: string;
  sourceUrls: { label: string; href: string }[];
  colorClass: string;
};

export const projects: Project[] = [
  {
    title: "Tarkov Randomizer",
    description: (
      <>
        Tarkov Randomizer is a work in progress web app that scrapes all of the gear from the Tarkov Wiki using{' '}
        <a href="https://www.npmjs.com/package/cheerio" target="_blank" className="inline-block hover:text-blue-500 underline transition-all duration-300 transform hover:scale-105">Cheerio</a>, 
        stores it in an AWS MySQL database and then uses a REST API to send it to the frontend into a customizable randomizer so you can get a random loadout to play with in raid.
        The scraper is set to run automatically once a month using{' '}
        <a href="https://github.com/features/actions" target="_blank" className="inline-block hover:text-blue-500 underline transition-all duration-300 transform hover:scale-105">GitHub Actions</a> 
        to account for any content updates in the game!
      </>
    ),
    techStack: [
      { name: "React", href: "https://react.dev/" },
      { name: "Node.js", href: "https://nodejs.org/en" },
      { name: "AWS Lambda", href: "https://aws.amazon.com/lambda/" },
      { name: "AWS RDS", href: "https://aws.amazon.com/rds/" },
      { name: "MySQL", href: "https://www.mysql.com/" },
      { name: "TypeScript", href: "https://www.typescriptlang.org/" },
      { name: "Tailwind", href: "https://tailwindcss.com/" },
    ],
    videoUrl: process.env.REACT_APP_TARKOV_VIDEO,
    liveUrl: "https://tarkov-randomizer-new.vercel.app/",
    sourceUrls: [
      { label: "Front-end Source Code", href: "https://github.com/Josh-Harrison1600/TarkovRandomizer" },
      { label: "Back-end Source Code", href: "https://github.com/Josh-Harrison1600/TarkovScraper" },
    ],
    colorClass: "blue-500",
  },
  {
    title: "Kana Typer",
    description: (
      <>
        Kana Typer is a web app that helps users learn the main two Japanese phonetic systems, Hiragana & Katakana. 
        The user can select individual symbols, specific categories, or the entire system to study and review!
      </>
    ),
    techStack: [
      { name: "React", href: "https://react.dev/" },
      { name: "TypeScript", href: "https://www.typescriptlang.org/" },
      { name: "Tailwind", href: "https://tailwindcss.com/" },
    ],
    videoUrl: process.env.REACT_APP_KANATYPER_VIDEO,
    liveUrl: "https://kana-typer-fawn.vercel.app/",
    sourceUrls: [
      { label: "Source Code", href: "https://github.com/Josh-Harrison1600/Kana-Typer" },
    ],
    colorClass: "red-500",
  },
  {
    title: "This Website :D",
    description: (
      <>
        My portfolio website was made using:
      </>
    ),
    techStack: [
      { name: "React", href: "https://react.dev/" },
      { name: "TypeScript", href: "https://www.typescriptlang.org/" },
      { name: "Tailwind", href: "https://tailwindcss.com/" },
      { name: "AWS S3", href: "https://aws.amazon.com/s3/" },
    ],
    imageUrl: require("../components/images/ProjectThree.png"),
    liveUrl: "https://github.com/Josh-Harrison1600/personalwebsite",
    sourceUrls: [
      { label: "Source Code", href: "https://github.com/Josh-Harrison1600/personalwebsite" },
    ],
    colorClass: "blue-600",
  },
];