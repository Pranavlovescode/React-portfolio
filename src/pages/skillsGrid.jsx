import { motion } from "framer-motion";
import { SkillCard } from "@/pages/skillsCard";

export function SkillsGrid({ skills }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          {...skill}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  );
}