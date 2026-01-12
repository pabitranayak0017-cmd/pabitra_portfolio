import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Google",
    date: "2023",
    credentialUrl: "https://share.google/WEkJjQqZDLEhKaphA",
    description: "Comprehensive training in modern web development technologies and best practices.",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialUrl: "#",
    description: "Advanced React.js concepts including hooks, state management, and performance optimization.",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialUrl: "#",
    description: "Mastery of JavaScript fundamentals, ES6+, algorithms, and data structures.",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "#",
    description: "Foundation-level understanding of AWS Cloud services and architecture.",
  },
  {
    title: "MongoDB Developer",
    issuer: "MongoDB University",
    date: "2022",
    credentialUrl: "#",
    description: "Database design, CRUD operations, aggregation framework, and indexing strategies.",
  },
  {
    title: "Node.js Backend Development",
    issuer: "Coursera",
    date: "2022",
    credentialUrl: "#",
    description: "Server-side development with Node.js, Express, and RESTful API design.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional certifications and courses completed to enhance my skills
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-gradient-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              {/* Certificate header with gradient */}
              <div className="h-2 bg-gradient-primary" />
              
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
