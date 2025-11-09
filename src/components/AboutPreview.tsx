import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring" as const,
                stiffness: 50,
              }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                About <span className="text-gradient">PredictByte</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PredictByte is a digital agency building next-generation web,
                app, and AI solutions. We're passionate about transforming ideas
                into powerful digital products that drive business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team combines technical expertise with creative innovation
                to deliver solutions that exceed expectations. We believe in
                transparency, quality, and building long-term partnerships with
                our clients.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about">
                  {" "}
                  <Button className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Value Props */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring" as const,
                stiffness: 50,
              }}
            >
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "Empowering businesses with innovative technology solutions that drive growth and efficiency.",
                  delay: 0.1,
                },
                {
                  icon: Lightbulb,
                  title: "Innovation First",
                  description:
                    "We stay ahead of technology trends to bring cutting-edge solutions to every project.",
                  delay: 0.2,
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Our talented professionals bring years of experience across various industries.",
                  delay: 0.3,
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: item.delay,
                    type: "spring" as const,
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring" as const, stiffness: 300 },
                  }}
                >
                  <div className="flex gap-4 items-start">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
