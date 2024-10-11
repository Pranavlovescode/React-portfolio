import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <>
      <div></div>
      <div className="mx-auto px-[100px]">
        <Card className="bg-[#ffffff24] shadow-2xl border-transparent">
          <CardHeader>
            <CardTitle className="text-white text-2xl">About Me</CardTitle>
            <CardDescription className="text-slate-300">
              Btw I use Linux 🖥️
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row justify-center items-center text-white">
            <div className="px-5">
              <img
                src="/pranav-photo-2.png"
                alt="My Photo"
                className="h-[250px] w-[250px] rounded-full"
              />
            </div>
            <div className="px-5">
              <p className="text-white">
                I am a software engineer with a passion for web development.
              </p>
              <p className="text-white">
                I am a self-taught developer and I have been coding for over 2
                years.
              </p>

              <p className="text-white">
                I have worked on various projects and have experience in
                building full-stack applications.
              </p>

              <p className="text-white">
                I am passionate about coding and I enjoy building applications
                that solve real-world problems.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
