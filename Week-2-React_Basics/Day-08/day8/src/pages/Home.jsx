import { motion } from "framer-motion";
export default function Home() {
    return <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl text-orange-700">🏠 Welcome Home!</motion.div>;
  }
  