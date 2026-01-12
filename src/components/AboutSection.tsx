import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-primary" />
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-lg" />
              <img
                src={profileImg}
                alt="Tanveer Ahmad"
                className="relative w-72 md:w-80 h-auto rounded-2xl object-cover shadow-card"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">I'm Tanveer Ahmad</h3>
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Software Developer
            </span>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I am a Software Developer based in Bhadohi, India. I am very passionate 
              about improving my coding skills & developing applications & websites. 
              I build WebApps and Websites using MERN Stack. Working for myself to 
              improve my skills. Love to build Full-Stack clones.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <User className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">Age:</strong> 22</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">Phone:</strong> +91 XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">Email:</strong> tanveeransaribcom@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">Place:</strong> Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <a href="#" target="_blank">
                  Resume
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://share.google/WEkJjQqZDLEhKaphA" target="_blank">
                  <Award className="w-4 h-4 mr-2" />
                  Certificate
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
