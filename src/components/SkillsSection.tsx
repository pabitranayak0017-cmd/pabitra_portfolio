import { motion } from "framer-motion";
import { Laptop } from "lucide-react";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "HTML5", icon: "🧱" },
  { name: "CSS3", icon: "🎭" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Git/GitHub", icon: "🐙" },
  { name: "AWS", icon: "☁️" },
  { name: "SQL", icon: "🗃️" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Figma", icon: "🎯" },
  { name: "PHP", icon: "🐘" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "Angular", icon: "🔺" },
  { name: "C++", icon: "➕" },
  { name: "Azure", icon: "🌐" },
  { name: "Docker", icon: "🐳" },
  { name: "Go", icon: "🔵" },
  { name: "Ruby", icon: "💎" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Laptop className="w-8 h-8 text-primary" />
            Skills & <span className="text-gradient">Abilities</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-card p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow group cursor-default"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
