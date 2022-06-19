import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
    ".html",
    "HTML is a markup-based language, where we mark up elements to define what information the page will display."
);
hoverChangeDescription(
    ".css",
    "CSS is a “layered” style sheet language created for the purpose of styling HTML pages.."
);
hoverChangeDescription(
    ".js",
    "JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language.."
);
hoverChangeDescription(
    ".sass",
    "Sass (css preprocessor) is a stylesheet language. It is a simple scripting language used in Sass files."
);
hoverChangeDescription(
    ".react",
    "ReactJS is an open source JavaScript library focused on creating user interfaces on web pages."
);
hoverChangeDescription(
    ".next",
    "Next.js is a web framework that allows functionality such as server-side rendering and generating static web sites based on React."
);
hoverChangeDescription(
    ".styled",
    "Styled Components is a library that uses the concept of CSS-in-JS, that is, it allows us to write CSS codes inside Javascript."
);
hoverChangeDescription(
    ".tailwind",
    "Tailwind CSS is a framework designed to maximize the potential of good old CSS and take it even further."
);