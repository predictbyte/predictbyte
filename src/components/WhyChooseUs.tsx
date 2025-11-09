import { Zap, Award, Wrench, LifeBuoy, Target } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid development cycles with agile methodologies to get your product to market quickly.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Years of experience across various industries and cutting-edge technologies.",
  },
  {
    icon: Target,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise scale.",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description: "Ongoing support and regular updates to keep your systems running smoothly.",
  },
  {
    icon: LifeBuoy,
    title: "Transparency",
    description: "Clear communication and regular updates throughout the development process.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 50
            }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Why Choose <span className="text-gradient">PredictByte</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine technical excellence with business understanding to deliver solutions that drive real results. Our team is committed to your success.
            </p>
            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl hover:bg-background/50 transition-colors"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    x: 8,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 50
            }}
          >
            {features.slice(3).map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex gap-4 items-start">
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="text-5xl font-bold mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
              >
                5+
              </motion.div>
              <div className="text-lg opacity-90">Years of Excellence in Technology Solutions</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
