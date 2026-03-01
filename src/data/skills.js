import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineCubeTransparent,
} from "react-icons/hi";
import {
  HiOutlinePaintBrush,
  HiOutlineCpuChip,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCommandLine,
} from "react-icons/hi2";
import { PiNetwork } from "react-icons/pi";

export const skills = [
  {
    category: "Programming Languages",
    icon: HiOutlineCode,
    items: [
      "TypeScript",
      "JavaScript",
      "Go",
      "Rust",
      "Python",
      "Java",
      "C#",
      "VB.NET",
      "Ruby",
      "SQL"
    ],
  },
  {
    category: "Frontend",
    icon: HiOutlineDesktopComputer,
    items: [
      "React",
      "React Native (Expo)",
      "Next.js",
      "Vue.js",
      "SvelteKit",
      "Angular",
      "Flutter",
      "HTML",
    ],
  },
  {
    category: "Styling & UI",
    icon: HiOutlinePaintBrush,
    items: [
      "Tailwind CSS",
      "SASS/SCSS",
      "CSS"
    ],
  },
  {
    category: ".NET Ecosystem",
    icon: HiOutlineCubeTransparent,
    items: [
      "ASP.NET Core",
      ".NET MAUI",
      "Blazor",
      "WinUI",
      "WPF",
      "WinForms"
    ],
  },
  {
    category: "Backend",
    icon: HiOutlineCommandLine,
    items: [
      "Node.js",
      "REST APIs",
      "Express",
      "Spring Boot",
      "Laravel",
      "FastAPI"
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: HiOutlineCloud,
    items: [
      "AWS",
      "AWS Amplify",
      "Google Cloud Platform",
      "Azure / Repos",
      "Docker",
      "CI/CD",
      "Vercel / Netlify / Render",
      "Linux"
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: HiOutlineCpuChip,
    items: [
      "TensorFlow (Lite)",
      "Python (ML workflows)",
      "Jupyter Notebook",
      "Anaconda",
      "Basic Machine Learning"
    ],
  },
  {
    category: "Desktop Development",
    icon: PiNetwork,
    items: [
      "Wails",
      "Tauri",
      "Electron",
      "NW.js"
    ],
  },
  {
    category: "Databases",
    icon: HiOutlineCircleStack,
    items: [
      "PostgreSQL",
      "MySQL/MariaDB",
      "MongoDB",
      "DynamoDB",
      "SQL Server",
      "Firebase",
      "Redis"
    ],
  },
];