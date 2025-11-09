import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    image: project1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with AI-powered recommendations and seamless checkout experience.",
    category: "Web Development",
  },
  {
    image: project2,
    title: "Task Management App",
    description:
      "Cross-platform mobile app for team collaboration and productivity tracking.",
    category: "App Development",
  },
  {
    image: project3,
    title: "Analytics Dashboard",
    description:
      "Real-time business intelligence dashboard with predictive analytics capabilities.",
    category: "AI Solutions",
  },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've built scalable solutions for startups and enterprises
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -12,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
                        {project.category}
                      </span>
                    </motion.div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link to="/services/web-development">
                        <Button
                          variant="ghost"
                          className="group/btn p-0 h-auto text-primary hover:text-primary"
                        >
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
