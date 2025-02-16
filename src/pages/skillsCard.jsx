import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import "@/pages/styles.css";

export function SkillCard({ name, icon, proficiency, delay ,description}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="relative p-6 overflow-hidden group bg-white/20 backdrop-blur-sm border-0 hover:border-blue-300 hover:border-2 md:h-60">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col items-start">
          <img src={icon} alt={name} className="w-10 h-10 mb-1 transition-transform group-hover:scale-110" />
          <h3 className="font-bold text-white">{name}</h3>
          <motion.div  className="my-3 text-blue-300">{description}</motion.div>
          <div className="w-full bg-white/40 h-2.5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-700 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${proficiency}%` }}
              transition={{ duration: 1, delay: delay + 0.3 }}
            />
          </div>
          <span className="mt-2 text-sm text-blue-300">{proficiency}%</span>
        </div>
      </Card>
    </motion.div>
  );
}