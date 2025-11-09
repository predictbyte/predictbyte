import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "PredictByte transformed our business with their innovative solutions. Their team's expertise in AI and web development exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "Outstanding work on our mobile app! The attention to detail and commitment to quality was impressive. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content: "Their digital marketing strategies helped us achieve 300% growth in just 6 months. Professional, creative, and results-driven team.",
    rating: 5,
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  rotate: [0, -1, 1, 0],
                  transition: { 
                    y: { type: "spring", stiffness: 300, damping: 20 },
                    rotate: { duration: 0.3 }
                  }
                }}
              >
                <Card className="relative group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    {/* Quote Icon */}
                    <motion.div 
                      className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity"
                      animate={{ 
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Quote className="w-12 h-12 text-primary" />
                    </motion.div>

                    {/* Rating */}
                    <motion.div 
                      className="flex gap-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 0.4 + i * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <Star className="w-5 h-5 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Content */}
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <motion.img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                        className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
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

export default Testimonials;
