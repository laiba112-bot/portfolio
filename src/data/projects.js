import foodpandaImg from "../assets/foodpanda.png";
import veloxaImg from "../assets/veloxa.png";
import TaskTrackerImg from "../assets/TaskTracker.png";
import SpacelyticsImg from "../assets/Spacelytics.png";
import DigitalClockImg from "../assets/digitalclock.png";
import TodoImg from "../assets/todo.png";
import ScientificCalculatorImg from "../assets/ScienticCalculator.png";
import darazImg from "../assets/Daraz.png"

const projects = [
  {
    id: 1,
    title: "FoodPanda Clone",
    description: "A responsive foodpanda clone using HTML, CSS, and Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: foodpandaImg, // imported from src/assets
    github: "https://github.com/AimanVoid/FoodPanda-Responsive-",
    live: "https://aimanvoid.github.io/FoodPanda-Responsive-/"
  },
  {
    id: 2,
    title: "Veloxa",
    description: "Veloxa is a React app with dark/light mode and a clean, responsive UI.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: veloxaImg,
    github: "https://github.com/AimanVoid/veloxa",
    live: "https://veloxa-five.vercel.app/"
  },
  {
    id: 3,
    title: "TaskTracker",
    description: "TaskTracker is an app with Firebase authentication to manage their tasks.",
    technologies: ["React", "Tailwind", "Firebase"],
    image: TaskTrackerImg,
    github: "https://github.com/AimanVoid/Updated-Task-Tracker-",
    live: "https://aimanvoid.github.io/Updated-Task-Tracker-/"
  },
  {
    id: 4,
    title: "Spacelytics",
    description: "A React app that shows space images by date using a NASA-style API.",
    technologies: ["React", "Javascript", "Bootstrap"],
    image: SpacelyticsImg,
    github: "https://github.com/AimanVoid/nasa-react",
    live: "https://aimanvoid.github.io/Updated-Task-Tracker-/"
  },
  {
    id: 5,
    title: "Digital Clock",
    description: "Digital Clock shows real-time time using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: DigitalClockImg,
    github: "https://github.com/AimanVoid/JS-Digital-Clock",
    live: "https://aimanvoid.github.io/JS-Digital-Clock/"
  },
  {
    id: 6,
    title: "ToDo-app",
    description: "To-Do App to manage tasks with add, edit, delete, and check features.",
    technologies: ["HTML", "CSS", "JavaSript"],
    image: TodoImg,
    github: "https://github.com/AimanVoid/todo-app",
    live: "https://aimanvoid.github.io/todo-app/"
  },
  {
    id: 7,
    title: "Scientific Calculator",
    description: "Scientific Calculator for advanced calculations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: ScientificCalculatorImg,
    github: "https://github.com/AimanVoid/Scientific-Calculator-",
    live: "https://aimanvoid.github.io/Scientific-Calculator-/"
  },
  {
    id: 8,
    title: "Daraz Clone",
    description: "Daraz Clone is a homepage replica made with HTML and CSS.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: darazImg,
    github: "https://github.com/AimanVoid/Daraz?tab=readme-ov-file",
    live: "https://aimanvoid.github.io/Daraz/"
  }
];

export default projects;
