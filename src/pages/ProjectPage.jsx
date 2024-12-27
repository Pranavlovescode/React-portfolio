import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { projects } from "@/data/project";
import "@/pages/styles.css";

export function ProjectPage() {
  return (
    <div className="main py-20">
      <motion.div
        className="min-h-screen text-white p-8 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-t  from-purple-400 to-pink-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovative Creations
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore a collection of cutting-edge projects that push the
            boundaries of technology and creativity.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Tilt
                  className="h-full"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.05}
                  gyroscope={true}
                >
                  <Card className="h-full flex flex-col border-0 bg-white/20 overflow-hidden hover:border-blue-300 hover:border-2">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-l  from-purple-400 to-pink-600">
                        {project.title}
                      </CardTitle>
                      <CardDescription className={"text-blue-300"}>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" >
                            {tech}
                          </Badge>
                        ))}
                      </motion.div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild className="bg-gradient-to-tl from-blue-400 to-blue-600 border-0">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <GithubIcon className="mr-2 h-4 w-4" />
                          GitHub
                        </motion.a>
                      </Button>
                      <Button variant="default" size="sm" asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLinkIcon className="mr-2 h-4 w-4 " />
                          Live Demo
                        </motion.a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
