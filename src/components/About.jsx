import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code2,
  Laptop,
  Brain,
  InstagramIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

function About() {
  return (
    <div className="min-h-screen p-4 md:p-8 container mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Starts invisible and slightly lower
        whileInView={{ opacity: 1, x: 0 }} // Fades in and moves up when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.23 }}
      >
        <Card className="max-w-4xl mx-auto overflow-hidden bg-white/20 backdrop-blur-sm border-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left Column - Photo and Quick Info */}
            <div className="space-y-6 text-center md:text-left">
              <div className="relative inline-block">
                <Avatar className="w-48 h-48 mx-auto md:mx-0 border border-primary">
                  <AvatarImage
                    src="/pranav-photo-2.png"
                    alt="Pranav Titambe"
                    className="object-cover"
                  />
                  <AvatarFallback>PT</AvatarFallback>
                </Avatar>
                <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">
                  <Terminal className="w-3 h-3 mr-1" />
                  Linux User
                </Badge>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Pranav Titambe
                </h1>
                <p className="text-muted-foreground text-white">
                  Software Engineer
                </p>
              </div>

              <div className="flex gap-2 justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-blue-300 border-none"
                >
                  <a href="https://github.com/Pranavlovescode">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-blue-400 border-none"
                >
                  <a href="https://www.linkedin.com/in/pranav-titambe/">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-blue-500 border-none"
                >
                  <a href="mailto:pranavtitambe04@gmail.com">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-blue-600 border-none"
                >
                  <a href="https://www.instagram.com/pranav_p_titambe/">
                    <InstagramLogoIcon className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  About Me
                </h2>
                <p className="text-white leading-relaxed">
                  I am a software engineer with a passion for web development.
                  As a self-taught developer with over 2 years of coding
                  experience, I've worked on various projects building
                  full-stack applications.
                </p>
              </div>

              <div className="grid gap-4">
                <Card className="p-4 transition-colors hover:bg-blue-500 bg-blue-200 border-none">
                  <div className="flex items-center gap-4">
                    <Code2 className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Passionate Coder</h3>
                      <p className="text-sm text-gray-600">
                        Building applications that solve real-world problems
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 transition-colors hover:bg-blue-500 bg-blue-300 border-none">
                  <div className="flex items-center gap-4">
                    <Laptop className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Full-Stack Developer</h3>
                      <p className="text-sm text-gray-600">
                        Experience in building end-to-end applications
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 transition-colors hover:bg-blue-500 bg-blue-400 border-none">
                  <div className="flex items-center gap-4">
                    <Brain className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Self-Taught</h3>
                      <p className="text-sm text-gray-600">
                        Continuous learner with a growth mindset
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

export default About;
