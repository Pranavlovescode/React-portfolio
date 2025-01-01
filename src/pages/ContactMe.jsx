import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import nodemailer from 'nodemailer';
import React, { useState } from "react";

const transport = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "3c40b771be9beec56d41905f297b2450",
  },
});

function ContactMe() {
  const [formDetails, setFormDetails] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmission = async (e) => {
    e.preventDefault();
    console.log(formDetails);

    // Logic for sending email
    const msg = {
      to: formDetails.email, // Change to your recipient
      from: "pranav.titambe@pranavtitambe.in", // Change to your verified sender
      subject: `Heyy ${formDetails.name}`,
      text: formDetails.message,
    };

    const info = await transport.sendMail(msg);

    console.log("Message sent: %s", info.messageId);

    setTimeout(() => {
      formDetails.email = "";
      formDetails.name = "";
      formDetails.message = "";
    }, 5000);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -30 }} // Starts invisible and slightly lower
        whileInView={{ opacity: 1, x: 0 }} // Fades in and moves up when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.23 }}
        className="mx-auto grid w-[350px] gap-2 h-[500px] mt-36"
      >
        {/* <div className="grid gap-2 text-center">
          <h1 className="md:mb-[-65px] font-extrabold text-blue-300 mt-[200px] text-[30px] ">
            Contact Me
          </h1>
          <p className="text-balance text-muted-foreground">
            Get in touch with me for any queries or collaborations.
          </p>
        </div> */}
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className={
                "bg-clip-text text-transparent bg-gradient-to-l from-purple-400 to-pink-600"
              }
            >
              Email
            </Label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              onChange={(e) =>
                setFormDetails({ ...formDetails, email: e.target.value })
              }
              className="text-white bg-blue-950 border-2 focus:border-blue-300 border-blue-300 p-[5px] rounded-lg "
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label
                htmlFor="name"
                className={
                  "bg-clip-text text-transparent bg-gradient-to-l from-purple-400 to-pink-600"
                }
              >
                Name
              </Label>
            </div>
            <input
              id="name"
              type="text"
              required
              name="name"
              placeholder="Your name"
              onChange={(e) =>
                setFormDetails({ ...formDetails, name: e.target.value })
              }
              className="text-white bg-blue-950 border-2 focus:border-blue-300
                   border-blue-300 p-[5px] rounded-lg "
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label
                htmlFor="message"
                className={
                  "bg-clip-text text-transparent bg-gradient-to-l from-purple-400 to-pink-600"
                }
              >
                Message
              </Label>
            </div>
            <textarea
              id="message"
              type="text"
              required
              name="message"
              placeholder="Your message here..."
              onChange={(e) =>
                setFormDetails({ ...formDetails, message: e.target.value })
              }
              className="text-white bg-blue-950 border-2 focus:border-blue-300
                   border-blue-300 p-[5px] rounded-lg "
            />
          </div>
          <Button
            type="submit"
            onClick={handleSubmission}
            className="bg-gradient-to-r from-purple-400 to-pink-600 text-black mt-4"
          >
            Send
          </Button>
        </div>
      </motion.div>
    </>
  );
}

export default ContactMe;
