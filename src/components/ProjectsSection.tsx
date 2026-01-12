import { motion } from "framer-motion";
import { Laptop, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing my skills, projects, and experience. Built with modern web technologies.",
    liveUrl: "#",
    codeUrl: "#",
    tags: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "AICMA Bhadohi",
    description: "Official website for AICMA Bhadohi organization with modern design and functionality.",
    liveUrl: "https://aicma.co.in/",
    codeUrl: "#",
    tags: ["Web Design", "Responsive", "CMS"],
  },
  {
    title: "Modern Tek",
    description: "Corporate website for Modern Tek IT Solution Company featuring services and portfolio.",
    liveUrl: "https://moderntek.co.in/",
    codeUrl: "#",
    tags: ["Business", "Web Development", "SEO"],
  },
  {
    title: "Deeniyat Rugs",
    description: "E-commerce platform for Deeniyat Rugs with product showcase and inquiry system.",
    liveUrl: "https://www.deeniyatrugs.com/",
    codeUrl: "#",
    tags: ["E-commerce", "Catalog", "Contact Form"],
  },
  {
    title: "Ayub Rugs",
    description: "Professional website for Ayub Rugs featuring their rug collections and business information.",
    liveUrl: "https://ayubrugs.com/",
    codeUrl: "#",
    tags: ["Showcase", "Gallery", "Business"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Laptop className="w-8 h-8 text-primary" />
            Projects <span className="text-gradient">Made</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <Laptop className="w-16 h-16 text-primary/50 group-hover:text-primary transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
