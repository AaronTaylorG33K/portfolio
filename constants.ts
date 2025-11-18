import { Project, Experience } from './types';

export const PORTFOLIO_OWNER = "Alex Dev";
export const PORTFOLIO_ROLE = "Senior Frontend Engineer";

export const SKILLS = [
  "React", "TypeScript", "Next.js", "Three.js", "Tailwind CSS", 
  "Node.js", "GraphQL", "Gemini API", "WebGL"
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nebula Dashboard",
    description: "A real-time analytics dashboard visualizing high-dimensional data using WebGL and D3.js.",
    tags: ["React", "Three.js", "D3", "WebSocket"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "Gemini Chat Assistant",
    description: "An AI-powered customer support agent capable of handling audio and video inputs in real-time.",
    tags: ["Gemini API", "TypeScript", "React", "Speech-to-Text"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "E-Commerce 3D Configurator",
    description: "Allows users to customize products in 3D space before purchasing, increasing conversion by 40%.",
    tags: ["React-Three-Fiber", "Zustand", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechNova Inc.",
    period: "2022 - Present",
    description: "Leading the frontend migration to Next.js and implementing design systems."
  },
  {
    id: 2,
    role: "Creative Developer",
    company: "Studio Abstract",
    period: "2020 - 2022",
    description: "Built immersive web experiences for A-list clients using Three.js and GLSL."
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "StartUp Grid",
    period: "2018 - 2020",
    description: "Developed scalable APIs and responsive UIs for a fintech platform."
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PORTFOLIO_OWNER}'s portfolio website. 
Your name is "Aura".
Your goal is to professionally and succinctly answer questions about Alex's skills, experience, and projects.
Base your answers on the following data:
- Role: ${PORTFOLIO_ROLE}
- Skills: ${SKILLS.join(", ")}
- Experiences: ${JSON.stringify(EXPERIENCES)}
- Projects: ${JSON.stringify(PROJECTS)}

Tone: Professional, enthusiastic, slightly technical but accessible.
Keep responses under 100 words unless asked for details.
If asked about something not in the data, politely say you don't have that information but suggest they contact Alex directly.
`;