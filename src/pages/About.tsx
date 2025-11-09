import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamGrid, { TeamMember } from "@/components/TeamGrid";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Award,
  Users,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency and honesty",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality in every project",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
    },
    {
      icon: Target,
      title: "Customer Success",
      description: "Your growth is our ultimate goal",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Aashu Khare",
      role: "Chief Executive Officer",
      imgSrc: "/aashu-khare.jpg",
      bio: "Visionary CEO leading Predictbyte Infosoft with a focus on innovation, strategic growth, and technology-driven solutions.",
      linkedin: "https://www.linkedin.com/company/predictbyte-infosoft",
      twitter: "https://twitter.com",
      email: "ashu@predictbyte.com",
    },
    {
      name: "Nikhil Tarar",
      role: "Chief Operating Officer",
      imgSrc: "/placeholder.svg",
      bio: "Experienced operations leader optimizing business performance and driving organizational efficiency across all departments.",
      linkedin: "https://www.linkedin.com/company/predictbyte-infosoft",
      twitter: "https://twitter.com",
      email: "ashu@predictbyte.com",
    },
    {
      name: "Uttam Thakur",
      role: "Chief Technology Officer",
      imgSrc: "/placeholder.svg",
      bio: "Technical visionary overseeing product architecture and driving innovation in scalable software and cloud-based solutions.",
      linkedin: "https://www.linkedin.com/company/predictbyte-infosoft",
      twitter: "https://twitter.com",
      email: "ashu@predictbyte.com",
    },
    {
      name: "Abhishek Singh",
      role: "Chief Financial Officer",
      imgSrc: "/placeholder.svg",
      bio: "Finance strategist managing budgets, optimizing investments, and ensuring the financial stability and growth of the company.",
      linkedin: "https://www.linkedin.com/company/predictbyte-infosoft",
      twitter: "https://twitter.com",
      email: "ashu@predictbyte.com",
    },
    {
      name: "Mohit Kumar",
      role: "Senior Software Developer",
      imgSrc: "/placeholder.svg",
      bio: "Seasoned developer building high-performance web applications and leading teams in modern software development practices.",
      linkedin: "https://www.linkedin.com/company/predictbyte-infosoft",
      twitter: "https://twitter.com",
      email: "ashu@predictbyte.com",
    },
    {
      name: "Rishasbh Sinha",
      role: "MERN Stack Developer",
      imgSrc: "/placeholder.svg",
      bio: "Proficient MERN stack developer crafting dynamic, responsive, and scalable full-stack web applications.",
      linkedin: "https://www.linkedin.com/company/predictbyte-infosoft",
      twitter: "https://twitter.com",
      email: "ashu@predictbyte.com",
    },
    {
      name: "Shivani Prajapati",
      role: "MERN Stack Developer",
      imgSrc: "/placeholder.svg",
      bio: "Full-stack developer passionate about building efficient and user-friendly web solutions using the MERN framework.",
      linkedin: "https://www.linkedin.com/company/predictbyte-infosoft",
      twitter: "https://twitter.com",
      email: "ashu@predictbyte.com",
    },
    {
      name: "Shubham Singh",
      role: "App Developer",
      imgSrc: "/placeholder.svg",
      bio: "Mobile app developer creating intuitive and high-performing Android and iOS applications with seamless user experiences.",
      linkedin: "https://www.linkedin.com/company/predictbyte-infosoft",
      twitter: "https://twitter.com",
      email: "ashu@predictbyte.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
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
              About <span className="text-gradient">PredictByte</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a technology agency on a mission to empower businesses with
              intelligent digital solutions that drive growth, innovation, and
              lasting success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-4xl font-bold">Who We Are</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  PredictByte is a team of passionate innovators, engineers, and
                  designers dedicated to building exceptional digital
                  experiences. We combine technical expertise with creative
                  vision to transform complex challenges into elegant, scalable
                  solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our diverse team brings together years of experience across
                  various industries, united by a shared passion for technology
                  and a commitment to delivering results that exceed
                  expectations.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "50+", label: "Projects Delivered" },
                    { number: "30+", label: "Happy Clients" },
                    { number: "5+", label: "Years Experience" },
                    { number: "15+", label: "Team Members" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-center"
                      whileHover={{
                        y: -10,
                        scale: 1.05,
                        transition: { type: "spring" as const, stiffness: 300 },
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-gradient mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">What We Do</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in Web Development, App Development, Digital
              Marketing, AI Solutions, and Custom Software Development including
              CRM and ERP systems. Our comprehensive services help businesses
              streamline operations, enhance customer experiences, and scale
              efficiently in today's digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage. We believe
                in creating digital products that not only meet today's needs
                but anticipate tomorrow's opportunities.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To shape the future of business through innovation and
                data-driven solutions. We envision a world where technology
                seamlessly integrates with human creativity, enabling
                organizations to achieve extraordinary results and lasting
                impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary/30">
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
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all"
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { type: "spring" as const, stiffness: 300 },
                  }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
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
            className="max-w-4xl mx-auto"
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
                What sets us apart in the digital landscape
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
                  title: "Uncompromising Quality",
                  description:
                    "We deliver solutions that are not just functional, but exceptional. Every line of code, every design element is crafted with precision and care.",
                },
                {
                  title: "Proven Experience",
                  description:
                    "With years of expertise across diverse industries, we bring best practices and battle-tested solutions to every project.",
                },
                {
                  title: "Client-First Approach",
                  description:
                    "Your success is our success. We work as an extension of your team, maintaining transparent communication and delivering results that matter.",
                },
                {
                  title: "Scalable Solutions",
                  description:
                    "We build for growth. Our solutions are designed to scale seamlessly as your business expands, ensuring long-term value and ROI.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
                  whileHover={{
                    x: 10,
                    transition: { type: "spring" as const, stiffness: 300 },
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-7xl mx-auto"
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
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented individuals behind PredictByte's success. Our
                diverse team brings together expertise in technology, design,
                and innovation.
              </p>
            </motion.div>

            <TeamGrid members={teamMembers} />
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
              Ready to Build Something{" "}
              <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's collaborate and turn your vision into reality. Get in touch
              with us today.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <a href="https://cal.com/predictbyte/30min" target="_blank">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <Link to="/">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
