import { motion } from "framer-motion";
import { Code, Heart, ChevronRight, Github, Linkedin, Twitter, Youtube, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/Code-With-Tanveer/100090088137923/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/codewithtanveer/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tanveer-ahmad-934155227", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/ansaritanveer09", label: "Twitter" },
  { icon: Github, href: "https://github.com/CodeWithTanveer", label: "GitHub" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCUHWQr2ACeR2lSMXABALxHw", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Code className="w-6 h-6 text-primary" />
              <span className="text-gradient">Tanveer's Portfolio</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
              <br /><br />
              Keep Rising 🚀
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> by Tanveer Ahmad
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
