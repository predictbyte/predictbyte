import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Target,
  BarChart3,
  Workflow,
  MessageSquare,
  Calendar,
} from "lucide-react";

const CRM = () => {
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
        damping: 12,
      },
    },
  };

  const features = [
    {
      icon: Users,
      title: "Lead Management",
      desc: "Capture, track, and nurture leads through every stage",
    },
    {
      icon: Target,
      title: "Sales Pipeline",
      desc: "Visualize deals and optimize your conversion process",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      desc: "Data-driven insights to measure performance and growth",
    },
    {
      icon: Workflow,
      title: "Automation",
      desc: "Automate repetitive tasks and streamline workflows",
    },
    {
      icon: MessageSquare,
      title: "Communication Tools",
      desc: "Centralized messaging, emails, and customer interactions",
    },
    {
      icon: Calendar,
      title: "Task & Event Tracking",
      desc: "Never miss a follow-up with smart reminders and scheduling",
    },
  ];

  const benefits = [
    "Improved Customer Retention",
    "Enhanced Team Productivity",
    "Centralized Data Access",
    "Better Sales Forecasting",
    "Seamless Third-Party Integrations",
    "Real-Time Performance Tracking",
  ];

  const processSteps = [
    {
      title: "Discover",
      desc: "Understand your business, goals, and customer journey",
    },
    {
      title: "Design",
      desc: "Create intuitive interfaces and custom workflows",
    },
    { title: "Develop", desc: "Build scalable CRM with your tech stack" },
    { title: "Deploy", desc: "Launch with training and seamless migration" },
    {
      title: "Support",
      desc: "Ongoing maintenance, updates, and enhancements",
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "WebSockets",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" as const }}
          className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"
        />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
          >
            Custom CRM Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Empower your business with smart CRM solutions that enhance customer
            engagement, boost sales, and strengthen team collaboration.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is CRM?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Customer Relationship Management (CRM) is the backbone of modern
              business success. At PredictByte, we create personalized CRM
              systems that help you manage customer interactions, optimize sales
              processes, and build lasting relationships—all in one powerful
              platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Core Features
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      <feature.icon className="w-12 h-12 text-primary mb-4" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefits of Custom CRM
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-lg font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Process
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring" as const, stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground"
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose PredictByte
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Scalability:</strong> Build
                a CRM that grows with your business, from startup to enterprise.
              </p>
              <p>
                <strong className="text-foreground">Customization:</strong>{" "}
                Tailored features, workflows, and integrations to match your
                exact needs.
              </p>
              <p>
                <strong className="text-foreground">Reliability:</strong> Robust
                architecture ensuring 99.9% uptime and data security.
              </p>
              <p>
                <strong className="text-foreground">Support:</strong> Dedicated
                team for training, onboarding, and ongoing assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Tech Stack We Use
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="px-6 py-3 bg-accent/10 text-accent rounded-lg font-semibold"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" as const }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Your Perfect CRM
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact PredictByte today and transform how you manage customers,
              sales, and relationships.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://cal.com/predictbyte/30min" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-lg px-8 py-6"
                >
                  Get Started
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

export default CRM;
