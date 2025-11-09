import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid = ({ members }: TeamGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <TooltipProvider>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {members.map((member, index) => (
          <motion.div
            key={`${member.name}-${index}`}
            variants={itemVariants}
            className="group"
          >
            <motion.div
              className="relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-secondary/30">
                <motion.img
                  src={member.imgSrc || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role} at PredictByte`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                {/* Social Links */}
                {(member.linkedin || member.twitter || member.email) && (
                  <div className="flex gap-3 pt-2">
                    {member.linkedin && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${member.name}'s LinkedIn profile`}
                            className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Linkedin className="w-4 h-4" />
                          </motion.a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    )}

                    {member.twitter && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${member.name}'s Twitter profile`}
                            className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Twitter className="w-4 h-4" />
                          </motion.a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Twitter</p>
                        </TooltipContent>
                      </Tooltip>
                    )}

                    {member.email && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.a
                            href={`mailto:${member.email}`}
                            aria-label={`Email ${member.name}`}
                            className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Mail className="w-4 h-4" />
                          </motion.a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Email</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </TooltipProvider>
  );
};

export default TeamGrid;
