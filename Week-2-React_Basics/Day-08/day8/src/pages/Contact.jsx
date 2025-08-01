import { motion } from "framer-motion";

export default function Contact() {
    return <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl text-green-700">📞 Contact Page</motion.div>;
  }
  