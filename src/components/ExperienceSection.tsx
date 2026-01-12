import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Design",
    description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
  },
  {
    title: "Website Development",
    description: "Web development is the work involved in developing a website for the Internet or an intranet. It ranges from developing simple static pages to complex web applications.",
  },
  {
    title: "Software Development",
    description: "Software development is the process of designing, creating, testing, and maintaining different software applications.",
  },
  {
    title: "Android App Development",
    description: "Mobile application development is the process of making software for smartphones and tablets, primarily for Android and iOS operating systems.",
  },
  {
    title: "E-Commerce Solution",
    description: "E-commerce solutions refer to a set of software and technology tools that help businesses sell products and services online.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Work <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-card p-6 rounded-2xl border border-border hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2 text-primary">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div
                className={`absolute top-6 left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 shadow-glow`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
