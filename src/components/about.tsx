import { motion } from "framer-motion";
import {
  Code,
  Server,
  Monitor,
  Smartphone,
  PencilRuler,
  Type,
  GitBranch,
  Paintbrush2,
  DatabaseZap,
  Shuffle,
  Atom,
  SlidersHorizontal,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, TailwindCSS",
    icon: <Code className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "AI Tools & Workflow",
    description: "ChatGPT, Claude, DALL E, AI-driven",
    icon: <Atom className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Backend Integration",
    description: "Express.js, Supabase, REST APIs",
    icon: <Server className="w-8 h-8 text-gray-600" />,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first approach, Flexbox, CSS Grid",
    icon: <Monitor className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Mobile Optimization",
    description: "Performance tuning for small screens",
    icon: <Smartphone className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Prototyping",
    description: "Wireframes, interaction flows, UI polish",
    icon: <PencilRuler className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Typography",
    description: "Font pairing, rhythm, readability",
    icon: <Type className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Version Control",
    description: "Git, GitHub, collaborative workflow",
    icon: <GitBranch className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Creative Tools",
    description: "Photoshop, Canva, visual assets",
    icon: <Paintbrush2 className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Database & Auth",
    description: "Supabase: realtime DB, auth, storage",
    icon: <DatabaseZap className="w-8 h-8 text-cyan-600" />,
  },
  {
    title: "Data Fetching",
    description: "TanStack Query: caching, sync, SSR",
    icon: <Shuffle className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "State Management",
    description: "Zustand: simple, scalable global state",
    icon: <SlidersHorizontal className="w-8 h-8 text-fuchsia-600" />,
  },
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 snap-start" id="about">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col gap-3 transition cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-full shadow">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
