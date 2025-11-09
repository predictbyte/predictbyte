import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Tablet,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import appShowcase from "@/assets/app-dev-showcase.jpg";

const AppDevelopment = () => {
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
      icon: Smartphone,
      title: "Native iOS Development",
      description:
        "High-performance apps built with Swift for seamless Apple ecosystem integration.",
    },
    {
      icon: Tablet,
      title: "Native Android Development",
      description:
        "Robust Android apps using Kotlin that leverage the full power of the platform.",
    },
    {
      icon: Zap,
      title: "Cross-Platform Solutions",
      description:
        "Efficient development with React Native and Flutter for iOS and Android simultaneously.",
    },
    {
      icon: Shield,
      title: "Enterprise App Development",
      description:
        "Secure, scalable applications designed for large-scale business operations.",
    },
  ];

  const industries = [
    { name: "eCommerce", description: "Feature-rich shopping experiences" },
    { name: "Education", description: "Interactive learning platforms" },
    { name: "Healthcare", description: "HIPAA-compliant medical apps" },
    { name: "Finance", description: "Secure fintech solutions" },
    { name: "Social Media", description: "Engaging community platforms" },
    { name: "On-Demand", description: "Real-time service delivery" },
  ];

  const benefits = [
    "User Experience Excellence",
    "Performance & Speed Optimization",
    "Agile Development Methodology",
    "Post-Launch Support & Updates",
    "Rigorous Quality Assurance",
    "Scalable Architecture Design",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/10 to-transparent" />
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
              Create <span className="text-gradient">Impactful</span> Mobile
              Experiences
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your vision into high-performance mobile apps that users
              love and businesses rely on
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
                  Start Your App Project
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
            <h2 className="text-4xl font-bold">Turn Ideas Into Innovation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PredictByte, we transform concepts into powerful mobile
              applications that deliver real business value. Whether you need a
              consumer app, enterprise solution, or innovative startup product,
              we bring technical excellence and creative vision to every
              project. Our apps are built for performance, designed for users,
              and engineered for scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* App Showcase Image */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 mix-blend-overlay" />
              <img
                src={appShowcase}
                alt="Modern mobile app development showcase with UI/UX designs"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.p
              className="text-center text-muted-foreground mt-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Creating beautiful, intuitive mobile experiences that users love
            </motion.p>
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
                Comprehensive mobile development for every platform
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

      {/* Our Approach */}
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
              <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground">
                Building apps that users love and businesses trust
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Zap,
                  title: "User Experience First",
                  description:
                    "Intuitive interfaces and seamless interactions that delight users",
                },
                {
                  icon: TrendingUp,
                  title: "Performance Driven",
                  description:
                    "Optimized code ensuring fast load times and smooth functionality",
                },
                {
                  icon: Shield,
                  title: "Built to Scale",
                  description:
                    "Architecture designed to grow with your user base and business needs",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="text-center p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-muted-foreground">
                Delivering specialized solutions across diverse sectors
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.description}
                  </p>
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
                What sets our app development apart
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
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
              Let's Build Your Next{" "}
              <span className="text-gradient">Game-Changing App</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today and let's discuss how we can bring your mobile
              app vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://cal.com/predictbyte/30min" target="_blank">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8"
                >
                  Start Your App Project
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

export default AppDevelopment;
