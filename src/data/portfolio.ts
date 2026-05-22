export interface PersonalInfo {
  name: string;
  taglines: string[];
  bio: string;
  github: string;
  linkedin: string;
  email: string;
  location: string;
  resumeUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  liveLabel?: string;
  badge?: string;
}

export interface Experience {
  org: string;
  role: string;
  duration: string;
  description: string;
  type: string;
}

export interface Education {
  degree: string;
  college: string;
  year: string;
  cgpa?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const personal: PersonalInfo = {
  name: "Shyam Sundar A",
  taglines: ["Full Stack Developer", "Cloud Engineer", "AI Builder"],
  bio: "I'm an information technology student from Puducherry passionate about building full-stack applications, cloud-native systems, and AI-powered tools. I love turning complex problems into clean, working products.",
  github: "https://github.com/ShyamSundar2705",
  linkedin: "https://www.linkedin.com/in/arshyamsundar/",
  email: "shyamarunach@gmail.com",
  location: "Puducherry, India",
  // TODO: Replace YOUR_FILE_ID with your actual Google Drive file ID
  resumeUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID",
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "Python", "REST APIs", "JWT Auth"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Lambda", "S3", "DynamoDB", "API Gateway", "Cognito", "EC2", "Docker", "Vercel"],
  },
  {
    category: "AI & ML",
    items: ["LangGraph", "Groq API", "Llama 3.1", "Prompt Engineering"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "Postman", "VS Code", "Linux"],
  },
];

export const projects: Project[] = [
  {
    title: "VaidyaScribe",
    description:
      "Tamil/English multilingual AI clinical documentation system with SOAP note generation, prescription pad, burnout dashboard, and patient history search.",
    tech: ["FastAPI", "LangGraph", "React 19", "Groq", "Docker", "AWS EC2", "Let's Encrypt SSL"],
    github: "https://github.com/ShyamSundar2705",
    live: null,
    badge: "Hackathon — Cognizant Technoverse 2026",
  },
  {
    title: "Resume Insights",
    description:
      "Cloud-based resume analyzer and skill gap detection system using serverless AWS infrastructure and LLM-powered analysis.",
    tech: ["React", "Vite", "AWS Lambda", "S3", "DynamoDB", "API Gateway", "Groq API", "Tailwind CSS"],
    github: "https://github.com/ShyamSundar2705",
    live: null,
    badge: "Mini Project",
  },
  {
    title: "StudyTrack",
    description:
      "Full-stack mobile study-timer app for logging focused sessions, tracking streaks, viewing study insights with heatmaps and charts, and competing in real-time study groups with a live leaderboard.",
    tech: ["React Native", "Expo", "Fastify", "TypeScript", "PostgreSQL", "Prisma", "Supabase Auth", "Socket.io"],
    github: "https://github.com/ShyamSundar2705/StudyTrack",
    live: null,
    liveLabel: "Local / Device",
    badge: "Mobile App",
  },
  {
    title: "Gesture-Based Home Automation",
    description:
      "Camera-based gesture-controlled home automation. Recognizes hand gestures in real-time using OpenCV and MediaPipe, sending commands to an ESP32 microcontroller via serial — no internet dependency.",
    tech: ["Python", "OpenCV", "MediaPipe", "PySerial", "ESP32", "Arduino C++"],
    github: "https://github.com/ShyamSundar2705/Gesture_Based_Home_Automation",
    live: null,
    liveLabel: "Local / Device",
    badge: "IoT + Computer Vision",
  },
];

export const experiences: Experience[] = [
  {
    org: "EduSkills / AICTE",
    role: "Prompt Engineering for AI Virtual Intern",
    duration: "Jan 2026 – Mar 2026",
    description:
      "Completed a 10-week program covering core prompting techniques, OpenAI API, Hugging Face Transformers, text generation, information extraction, code generation, chatbot prompting, image generation (DALL-E/Midjourney), and a capstone AI-powered content generation platform.",
    type: "Virtual Internship",
  },
  {
    org: "EduSkills Academy",
    role: "Python Full Stack Developer Virtual Intern",
    duration: "Oct 2024 – Dec 2024",
    description:
      "Completed a 10-week full stack development program covering Python-based backend development, frontend integration, and building production-ready web applications.",
    type: "Virtual Internship",
  },
  {
    org: "EduSkills / AICTE (Palo Alto Networks)",
    role: "Cybersecurity Virtual Intern",
    duration: "Apr 2024 – Jun 2024",
    description:
      "Gained hands-on knowledge in network security, threat analysis, and cybersecurity fundamentals through a program supported by Palo Alto Networks and EduSkills Academy.",
    type: "Virtual Internship",
  },
];

export const education: Education = {
  degree: "B.Tech Information Technology",
  college: "Sri Manakula Vinayagar Engineering College",
  year: "Final year (2023-2027)",
  // cgpa: "[ TODO: Uncomment and set your CGPA ]",
};

export const stats: Stat[] = [
  { label: "Projects Shipped", value: "4+" },
  { label: "Cloud Certifications", value: "3" },
  { label: "Hackathon", value: "1" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
