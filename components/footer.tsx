"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RainbowButton } from "./ui/rainbow-button";
import logo from "../app/fonts/logo-08fd2361.svg";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Signed up with email:", email);
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const router = useRouter();

  const toLinkedin = () => {
    router.push("https://www.linkedin.com/company/everything-green-ltd/");
  };

  return (
    <motion.footer
      className="bg-white pt-28 pb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center text-teal-600 mb-8"
          variants={itemVariants}
        >
          learn more about
          <br />
          web sustainability?
        </motion.h2>

        <motion.div variants={itemVariants}>
          <Card className="max-w-2xl mx-auto mb-12 bg-white border-none shadow-xl rounded-xl space-y-3">
            <CardHeader className="rounded-t-xl">
              <CardTitle className="text-2xl text-center font-semibold text-teal-600 rounded-t-xl">
                Join the greenWeb newsletter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow bg-gray-50 border-none shadow-xl rounded-xl"
                />
                <RainbowButton>Subscribe</RainbowButton>
              </form>
              <p className="text-sm text-gray-500 mt-8 font-sans">
                The greenWeb team will send you occasional updates on web
                accessibility and sustainability. There will be no spam, only
                high-quality information.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="max-w-3xl mx-auto mb-16 bg-white border-none shadow-xl rounded-xl cursor-pointer">
            <CardHeader className="bg-teal-600 text-white rounded-t-xl">
              <h2 className="text-xl font-semibold text-center">
                Claim and download your greenWeb certificate
              </h2>
            </CardHeader>
            <CardContent className="text-center py-8 space-y-2 flex flex-col justify-center items-center">
              <Image
                src={logo}
                width={200}
                height={200}
                alt="logo"
                className="-ml-4"
              />
              <p className="text-gray-700">
                The greenWeb team designed this website&apos;s carbon calculator
                to inspire and enlighten people about the importance of creating
                websites with low carbon emissions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="flex flex-row justify-between items-center my-10"
          variants={itemVariants}
        >
          <div className="flex-grow mr-8">
            <div className="border-t border-teal-600"></div>
          </div>
          <nav>
            <ul className="flex space-x-6 text-teal-600 text-lg">
              <li>
                <a
                  href="https://everythinggreen.org/sustainable-website-hong-kong"
                  className="hover:text-gray-300 transition-all ease-linear"
                >
                  Sustainable Websites
                </a>
              </li>
              <li>
                <a
                  href="https://blog.everythinggreen.org/"
                  className="hover:text-gray-300 transition-all ease-linear"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://everythinggreen.org/contact-us"
                  className="hover:text-gray-300 transition-all ease-linear"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex-grow ml-8">
            <div className="border-t border-teal-600"></div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-between text-md text-gray-500"
          variants={itemVariants}
        >
          <div>
            <p className="text-teal-600">Contact:</p>
            <a
              href="mailto:contact@everythinggreen.org"
              className="hover:underline flex flex-row justify-center items-center"
            >
              <Mail height={20} /> &nbsp;contact@everythinggreen.org
            </a>
          </div>
          <div className="flex flex-row space-x-10 justify-center items-center">
            <p>Privacy Policy</p> <Linkedin height={20} cursor="pointer" onClick={toLinkedin} />
          </div>
          <div className="text-center">
            <p className="text-teal-600">Address:</p>
            <p>China Hong Kong City Block 3, Room 1203,</p>
            <p>12th Floor, 33 Canton Rd, Tsim Sha Tsui, Hong Kong</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
