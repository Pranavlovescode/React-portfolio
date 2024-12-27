import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillsGrid } from "@/pages/skillsGrid";
import { skillCategories } from "@/data/skills";
import "@/pages/styles.css"

export function SkillsSection() {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="main py-20">
      <section className="py-20 px-4 md:px-8 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headingVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-t  from-purple-400 to-pink-600">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency
              levels in various technologies and tools.
            </p>
          </motion.div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto my-12 h-10 bg-radial-gradient from-current to-transparent rounded-lg">
              <TabsTrigger value="frontend" className="text-sm md:text-base text-white ">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="text-sm md:text-base text-white ">
                Backend
              </TabsTrigger>
              <TabsTrigger value="tools" className="text-sm md:text-base text-white ">
                Tools
              </TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <SkillsGrid skills={skills} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
