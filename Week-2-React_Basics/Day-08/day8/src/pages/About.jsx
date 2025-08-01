import { motion } from "framer-motion";
export default function About() {
    return <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl text-blue-700">ℹ️ About Page</motion.div>;
  }