import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Layout,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const WebDevelopment = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const expertise = [
    {
      icon: Layout,
      title: "Custom Website Design",
      description:
        "Beautiful, responsive designs tailored to your brand identity and user needs.",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "End-to-end development using modern frameworks like React, Next.js, and Node.js.",
    },
    {
      icon: Database,
      title: "CMS Solutions",
      description:
        "Easy-to-manage content systems that put you in control of your website.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Lightning-fast websites optimized for speed, SEO, and user experience.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      description: "Understanding your business goals and target audience",
    },
    {
      step: "02",
      title: "Design",
      description: "Creating intuitive interfaces and user experiences",
    },
    {
      step: "03",
      title: "Develop",
      description: "Building with clean, scalable, and maintainable code",
    },
    {
      step: "04",
      title: "Deliver",
      description: "Launching your website with ongoing support",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "AWS",
    "Vercel",
  ];

  const benefits = [
    "User-Centric Design Philosophy",
    "Scalable & Maintainable Architecture",
    "SEO-Optimized Code Structure",
    "Mobile-First Responsive Design",
    "Long-Term Support & Maintenance",
    "Fast Loading Times & Performance",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring" as const,
              stiffness: 50,
            }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Web Development</span> That Powers
              Growth
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building powerful, engaging web experiences that turn visitors
              into customers
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://cal.com/predictbyte/30min" target="_blank">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">
              Transform Your Digital Presence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PredictByte, we help businesses establish a powerful online
              presence with custom web solutions designed for performance,
              scalability, and growth. From sleek landing pages to complex web
              applications, we build digital experiences that engage users and
              drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive web development services for modern businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                A proven approach to delivering exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="text-5xl font-bold text-gradient mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-lg text-muted-foreground">
                Modern tech stack for cutting-edge solutions
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  className="px-6 py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm font-medium"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Why Choose PredictByte
              </h2>
              <p className="text-lg text-muted-foreground">
                What makes our web development services stand out
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to Build Your{" "}
              <span className="text-gradient">Perfect Website?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your project and create a web solution that drives
              real business growth.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://cal.com/predictbyte/30min" target="_blank">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
