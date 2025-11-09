import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Zap, TrendingUp } from "lucide-react";
import aiImage from "@/assets/ai-innovation.jpg";
import { motion } from "framer-motion";

const AIInnovation = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={aiImage} 
          alt="AI neural network visualization representing artificial intelligence innovation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 right-10 lg:right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl max-w-full"
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 lg:left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl max-w-full"
          animate={{ 
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Icon */}
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-glow"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <Brain className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            {/* Heading */}
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Powered by <span className="text-gradient">Artificial Intelligence</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We combine Artificial Intelligence with human creativity to deliver smarter, data-driven products that transform how businesses operate.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: Sparkles, text: "Machine Learning", color: "text-primary", delay: 0.5 },
                { icon: Zap, text: "Smart Automation", color: "text-accent", delay: 0.6 },
                { icon: TrendingUp, text: "Predictive Analytics", color: "text-primary", delay: 0.7 }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: item.delay,
                    type: "spring",
                    stiffness: 200,
                    damping: 12
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-glow">
                  Explore AI Solutions
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovation;
