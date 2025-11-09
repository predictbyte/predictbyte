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
  Database,
  Users,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

const ERP = () => {
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
      icon: Database,
      title: "Inventory Management",
      desc: "Real-time tracking and automated stock control",
    },
    {
      icon: Users,
      title: "HR & Payroll",
      desc: "Streamline employee management and payroll processing",
    },
    {
      icon: DollarSign,
      title: "Finance & Accounting",
      desc: "Automated invoicing, expenses, and financial reporting",
    },
    {
      icon: TrendingUp,
      title: "Production Planning",
      desc: "Optimize manufacturing and supply chain operations",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      desc: "Enterprise-grade security with role-based access",
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      desc: "Advanced analytics and customizable dashboards",
    },
  ];

  const industries = [
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Education",
    "Logistics",
    "Hospitality",
  ];
  const technologies = [
    "Node.js",
    "React",
    "MongoDB",
    "PostgreSQL",
    "AI Integration",
    "Cloud Hosting",
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
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
        />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
          >
            Custom ERP Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Build intelligent ERP systems that simplify operations, boost
            efficiency, and drive growth across your entire organization.
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
              What is ERP?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Enterprise Resource Planning (ERP) systems integrate all facets of
              your business—finance, HR, inventory, production, and more—into
              one unified platform. At PredictByte, we design custom ERP
              solutions tailored to your unique workflows, ensuring seamless
              operations and data-driven decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our ERP Expertise
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
              Benefits of Custom ERP
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  Seamless Integration:
                </strong>{" "}
                Connect all departments and systems for unified data flow and
                collaboration.
              </p>
              <p>
                <strong className="text-foreground">Automation:</strong> Reduce
                manual tasks with automated workflows, invoicing, reporting, and
                approvals.
              </p>
              <p>
                <strong className="text-foreground">Scalability:</strong> Build
                a system that grows with your business, adapting to new
                challenges and opportunities.
              </p>
              <p>
                <strong className="text-foreground">Real-Time Insights:</strong>{" "}
                Make informed decisions with live dashboards, KPIs, and advanced
                analytics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industries.map((industry, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full font-semibold"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Our Technology Stack
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
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="px-6 py-3 bg-accent/10 text-accent rounded-lg font-semibold"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-secondary/30">
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
                <strong className="text-foreground">Custom Design:</strong> No
                generic templates—we build ERP systems designed specifically for
                your business processes.
              </p>
              <p>
                <strong className="text-foreground">
                  Enterprise Security:
                </strong>{" "}
                Advanced encryption, role-based permissions, and
                compliance-ready architecture.
              </p>
              <p>
                <strong className="text-foreground">Ongoing Support:</strong>{" "}
                From deployment to maintenance, our team ensures your ERP
                evolves with your needs.
              </p>
              <p>
                <strong className="text-foreground">End-to-End Service:</strong>{" "}
                Strategy, development, integration, training, and support—all
                under one roof.
              </p>
            </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our ERP experts and discover how
              PredictByte can streamline your operations.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://cal.com/predictbyte/30min" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-lg px-8 py-6"
                >
                  Request a Demo
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

export default ERP;
