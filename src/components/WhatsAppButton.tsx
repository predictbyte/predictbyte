import { MessageCircle } from "lucide-react";
import WhatsappIcon from "../assets/whatsapp.png";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  const phoneNumber = "+917302227370";
  const message = encodeURIComponent(
    "Hi! I'm interested in PredictByte's services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg  transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Pulsing glow effect */}
            <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />

            {/* Icon */}
            <img src={WhatsappIcon} className="rounded-[50%]" />
          </motion.a>
        </TooltipTrigger>
        <TooltipContent side="left" className="mr-2">
          <p>Chat with us on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
