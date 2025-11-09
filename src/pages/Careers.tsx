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
  Lightbulb,
  Users,
  TrendingUp,
  Heart,
  Target,
  Code,
  Palette,
  LineChart,
  Megaphone,
} from "lucide-react";

const Careers = () => {
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

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We embrace creativity and cutting-edge technology",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Teamwork drives our success and growth",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "Continuous learning and career advancement",
    },
    {
      icon: Heart,
      title: "Integrity",
      desc: "Honesty and transparency in everything we do",
    },
    {
      icon: Target,
      title: "Impact",
      desc: "Building solutions that make a real difference",
    },
  ];

  const benefits = [
    "Mentorship from industry experts",
    "Work on real-world projects with cutting-edge tech",
    "Flexible work environment (remote & hybrid options)",
    "Professional development and training programs",
    "Competitive salary and performance bonuses",
    "Health benefits and wellness programs",
    "Collaborative and supportive team culture",
    "Career growth and promotion opportunities",
  ];

  const openPositions = [
    {
      icon: Code,
      title: "Frontend Developer",
      dept: "Engineering",
      type: "Full-time",
    },
    {
      icon: Code,
      title: "Backend Developer",
      dept: "Engineering",
      type: "Full-time",
    },
    {
      icon: Palette,
      title: "UI/UX Designer",
      dept: "Design",
      type: "Full-time",
    },
    {
      icon: LineChart,
      title: "Data Analyst",
      dept: "Analytics",
      type: "Full-time",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Specialist",
      dept: "Marketing",
      type: "Full-time",
    },
    {
      icon: Users,
      title: "Product Manager",
      dept: "Product",
      type: "Full-time",
    },
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
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
        />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
          >
            Join the PredictByte Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Be part of an innovative team that shapes the future of technology
            and builds solutions that matter.
          </motion.p>
        </div>
      </section>

      {/* About Working Here */}
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
              Working at PredictByte
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At PredictByte, we believe in fostering a culture of innovation,
              collaboration, and continuous growth. We're a team of passionate
              developers, designers, and digital experts who thrive on solving
              complex challenges and creating impactful solutions. Whether
              you're just starting your career or looking to take the next big
              step, PredictByte offers an environment where you can learn, grow,
              and make a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                      className="mx-auto"
                    >
                      <value.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                    </motion.div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Join Us
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-base font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Open Positions
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {openPositions.map((position, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <position.icon className="w-10 h-10 text-primary mb-3" />
                      <CardTitle className="text-xl">
                        {position.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {position.dept} • {position.type}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How to Apply
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to join us? Send your resume and portfolio to{" "}
              <strong className="text-foreground">
                careers@predictbyte.com
              </strong>{" "}
              or fill out our application form. We review all applications
              carefully and will get back to you within 5-7 business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" as const }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Build the Future with Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join PredictByte and be part of something extraordinary. Let's
              innovate, create, and grow together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://wa.me/+91 7302227370">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-lg px-8 py-6"
                >
                  Connect to HR
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

export default Careers;
