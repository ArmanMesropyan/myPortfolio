import todoApp from "../../../assets/projects/todo-typescript.jpg";
import cards from "../../../assets/projects/cards-ts.jpg";

import multiShop from "../../../assets/projects/multi-shop.jpg";

import magicForest from "../../../assets/projects/magic-forest.jpg";
import moonlight from "../../../assets/projects/moonlight.jpg";
import colorWorld from "../../../assets/projects/color-maker.jpg";
import wonderfulWebsite from "../../../assets/projects/wonderful-website.jpg";
import spaceX from "../../../assets/projects/SpaceX.jpg";
import Movix from "../../../assets/projects/movix.jpg";
import {IconCss, IconHtml, IconJs, IconReact, IconSass, IconTs, IconVite} from '../../../assets/icons/index'
export let myProjects = [
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://movix-mauve.vercel.app/",
    cover: Movix,
    title: "Movix",
    description: `The Movix  is a web development project that utilizes React, Vite and various libraries to create a dynamic and interactive website for users to browse and explore movies.
    Vite is a build tool that allows for fast and efficient development, and various libraries such as React Router and Axios are used to add additional functionality to the website. The end result is a modern and responsive website that allows users to browse and search for movies, view information about them, and even watch trailers.`,
    skills: [
      { x: <IconReact/> },
      { x: <IconSass/> },
      { x: <IconVite/> },
    ],
    github: "https://github.com/ArmanMesropyan/movix",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://space-x-neon.vercel.app/",
    cover: spaceX,
    title: "Space X",
    description: `This is cool website about space  , see for yourself.`,
    skills: [
      { x: <IconReact/> },
      { x: <IconSass/> },
    ],
    github: "https://github.com/ArmanMesropyan/spaceX",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://wonderfull-project.vercel.app/",
    cover: wonderfulWebsite,
    title: "Wonderful Website",
    description: `This is an amazing website that has 6 separate pages in which 
        a lot of functionality and logic are written in other things, see for yourself.`,
    skills: [
      { x: <IconReact/> },
      { x: <IconSass/> },
    ],
    github: "https://github.com/ArmanMesropyan/3D-project",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://armanmesropyan.github.io/color-world/",
    cover: colorWorld,
    title: "Color World",
    description: `This is a project written in javascript,a clone of color money and such applications.
                        You can generate a random color here and automatically generate a 6 digit text
                        , fix it and send the link to friends. Press space to change colors`,
    skills: [
      { x: <IconHtml/> },
      { x: <IconCss/> },
      { x: <IconJs/> },
    ],
    github: "https://github.com/ArmanMesropyan/color-world",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://moonlight-phi.vercel.app/",
    cover: moonlight,
    title: "Moonlight (Parallax)",
    description:
      "Moonlight is a mini project (layout) written in react and scss. parallax is shown here",
    skills: [
      { x: <IconReact/> },
      { x: <IconSass/> },
    ],
    github: "https://github.com/ArmanMesropyan/moonlight",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://magic-forest.vercel.app/",
    cover: magicForest,
    title: "Magic Forest (Parallax)",
    description:
      "Magic forest is a mini project (layout) written in react and scss. parallax is shown here",
    skills: [
      { x: <IconReact/> },
      { x: <IconSass/> },
    ],
    github: "https://github.com/ArmanMesropyan/magic-forest",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://armanmesropyan.github.io/bigShop/#/home",
    cover: multiShop,
    title: "Multi SHop",
    description: `
            Here developed a multi-page store with animations and slides ,
            you can see here its result when there is nothing in the stores for this have buttons to add something to the store ,
            but there is 1 but if you want to see the whole project how it works please download this code from the githab 
            and I ask you to change the key in the folder
            "src/connection/api/ProductApi" to the new key.
            and you can get the key if you go to the site "https://crudcrud.com" .
            this service gives us access to requests 100 times a day,
            but this is not a problem for us, we can just change the key and everything will work again.
            if you change the key, the fake server will be clean,
            so if you don't mind, please add product and category as you wish`,
    skills: [
      { x: <IconReact/> },
      { x: <IconSass/> },
    ],
    github: "https://github.com/ArmanMesropyan/bigShop",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://cards-three-hazel.vercel.app/",
    cover: cards,
    title: "Cards App",
    description:
      "This is a small application that adds random numbers to the cards they can be reversed and deleted",
    skills: [
      { x: <IconReact/> },
      { x: <IconTs/> },
      { x: <IconSass/> },
    ],
    github: "https://github.com/ArmanMesropyan/cards",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    link: "https://todo-app-nine-nu.vercel.app/",
    cover: todoApp,
    title: "Todo App",
    description:
      "This is a small todo application where you can add a task to the list, edit it, check it, delete it, etc.",
    skills: [
      { x: <IconReact/> },
      { x: <IconTs/> },
      { x: <IconSass/> },
    ],
    github: "https://github.com/ArmanMesropyan/todo-app",
  },
];
