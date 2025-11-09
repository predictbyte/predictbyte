import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Search,
  Share2,
  Target,
  TrendingUp,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const DigitalMarketing = () => {
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

  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Boost your organic visibility and drive qualified traffic with data-driven SEO strategies.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build engaged communities and amplify your brand across all major social platforms.",
    },
    {
      icon: Target,
      title: "PPC Campaigns",
      description:
        "Maximize ROI with targeted paid advertising on Google Ads, Facebook, and LinkedIn.",
    },
    {
      icon: TrendingUp,
      title: "Content Marketing",
      description:
        "Create compelling content that attracts, engages, and converts your target audience.",
    },
    {
      icon: BarChart3,
      title: "Brand Strategy",
      description:
        "Develop a cohesive brand identity that resonates with your audience and stands out.",
    },
  ];

  const benefits = [
    "Years of Industry Experience",
    "Transparent Communication & Reporting",
    "Data-Driven Decision Making",
    "Measurable ROI Focus",
    "Customized Marketing Strategies",
    "Dedicated Account Management",
  ];

  const metrics = [
    { value: "250%", label: "Avg. Traffic Growth" },
    { value: "180%", label: "Avg. Lead Increase" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "3.5x", label: "Avg. ROI Multiplier" },
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
              Grow Your Brand with{" "}
              <span className="text-gradient">Smart Marketing</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Data-driven digital strategies that turn clicks into customers and
              build lasting brand loyalty
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
                  Grow Your Business
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
              Marketing That Drives Real Growth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PredictByte, we blend creativity with analytics to deliver
              digital marketing solutions that generate measurable results. From
              increasing brand awareness to driving conversions, we create
              strategies tailored to your business goals and target audience.
              Our data-driven approach ensures every marketing dollar delivers
              maximum impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-lg text-muted-foreground">
                Numbers that speak for themselves
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={itemVariants}
                  className="text-center p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className="text-5xl font-bold text-gradient mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" as const }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive digital marketing solutions for modern businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
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
              <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground">
                How we deliver marketing success
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "ROI-Focused Strategy",
                  description:
                    "Every campaign is designed with clear KPIs and measurable return on investment in mind.",
                },
                {
                  title: "Analytics & Insights",
                  description:
                    "We leverage advanced analytics tools to track performance and optimize campaigns in real-time.",
                },
                {
                  title: "Long-Term Brand Building",
                  description:
                    "Beyond quick wins, we focus on sustainable growth and lasting brand impact in your market.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">
                    {item.description}
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
                Your trusted partner for digital growth
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

      {/* Success Metrics Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">
                Performance Tracking & Optimization
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in complete transparency. Our clients receive
                detailed monthly reports showing exactly how their campaigns are
                performing. We track every metric that matters—from traffic and
                engagement to conversions and ROI. This data-driven approach
                allows us to continuously optimize your campaigns for better
                results month after month.
              </p>
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
              Ready to{" "}
              <span className="text-gradient">Accelerate Your Growth?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your digital growth journey with PredictByte. Let's create a
              marketing strategy that delivers results.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8"
              >
                Get Free Marketing Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
