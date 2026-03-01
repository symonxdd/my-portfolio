export const projects = [
  {
    slug: "cloud-dashboard",
    title: "Cloud Dashboard",
    description:
      "A real-time cloud infrastructure monitoring dashboard with interactive charts, alerts, and resource management.",
    tags: ["React", "Node.js", "AWS", "WebSocket"],
    image: null,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Symon/cloud-dashboard",
    featured: true,
    details:
      "Built with React and Node.js, this dashboard provides real-time monitoring of cloud infrastructure. Features include interactive charts, alert configuration, resource scaling controls, and cost tracking. Uses WebSocket connections for live data streaming.",
  },
  {
    slug: "taskflow-api",
    title: "TaskFlow API",
    description:
      "RESTful task management API with authentication, team collaboration, and real-time notifications.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    image: null,
    liveUrl: null,
    repoUrl: "https://github.com/Symon/taskflow-api",
    featured: true,
    details:
      "A fully-featured REST API for task management. Supports user authentication via JWT, team workspaces, task assignments, priority levels, due dates, and real-time push notifications. Built with FastAPI for high performance and auto-generated OpenAPI docs.",
  },
  {
    slug: "devfolio",
    title: "DevFolio",
    description:
      "A customizable developer portfolio template built with Next.js and Framer Motion animations.",
    tags: ["Next.js", "Framer Motion", "CSS Modules"],
    image: null,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Symon/devfolio",
    featured: true,
    details:
      "An open-source portfolio template designed for developers. Features a floating pill navigation, dark/light mode, smooth page transitions, and a responsive project showcase. Fully customizable via simple data files.",
  },
  {
    slug: "chatbot-platform",
    title: "Chatbot Platform",
    description:
      "An AI-powered chatbot builder with drag-and-drop flow design and multi-channel deployment.",
    tags: ["TypeScript", "React", "OpenAI", "Docker"],
    image: null,
    liveUrl: null,
    repoUrl: "https://github.com/Symon/chatbot-platform",
    featured: false,
    details:
      "A platform for building and deploying AI chatbots. Includes a visual flow editor, integration with OpenAI models, multi-channel deployment (web, Slack, Discord), analytics dashboard, and Docker-based deployment pipeline.",
  },
  {
    slug: "homelab-monitor",
    title: "HomeLab Monitor",
    description:
      "Self-hosted monitoring solution for home lab servers with alerting and uptime tracking.",
    tags: ["Go", "React", "Docker", "Grafana"],
    image: null,
    liveUrl: null,
    repoUrl: "https://github.com/Symon/homelab-monitor",
    featured: false,
    details:
      "A lightweight, self-hosted monitoring tool for home lab environments. Tracks server uptime, resource usage, and service health. Sends alerts via email and Discord webhooks. Includes a React frontend and Go backend with minimal resource overhead.",
  },
  {
    slug: "markdown-editor",
    title: "Markdown Editor",
    description:
      "A live-preview Markdown editor with syntax highlighting, export options, and collaborative editing.",
    tags: ["React", "TypeScript", "WebRTC"],
    image: null,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Symon/markdown-editor",
    featured: false,
    details:
      "A browser-based Markdown editor featuring live preview, syntax highlighting, vim keybindings, PDF/HTML export, and real-time collaborative editing via WebRTC. Supports custom themes and keyboard shortcuts.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
