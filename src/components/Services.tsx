import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, TrendingUp, Brain, Database, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your brand and reach your target audience.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered features to transform your business operations.",
  },
  {
    icon: Database,
    title: "Custom ERP",
    description: "Enterprise Resource Planning systems tailored to your business processes and needs.",
  },
  {
    icon: Briefcase,
    title: "Custom CRM",
    description: "Customer Relationship Management solutions to enhance your customer interactions.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver end-to-end technology solutions for modern businesses
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring" as const, stiffness: 300, damping: 15 }
                }}
              >
                <Card className="group h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
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

export default Services;
