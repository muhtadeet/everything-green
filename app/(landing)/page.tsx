"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../fonts/greenWeb_logo_white-92e5f3a6.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SustainableWebsites from "@/components/body";
import Footer from "@/components/footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import leaf from "../fonts/image-removebg-preview (2).png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const router = useRouter();

  const toLogin = () => {
    router.push("https://everythinggreen.org/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-green-400 font-sans">
      <motion.header
        className={`p-6 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-teal-600 shadow-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-2 mx-10">
          <motion.div className="text-white text-xl font-bold flex items-center">
            <Image src={logo} width={200} height={200} alt="logo" />
          </motion.div>
          <div className="flex-grow mx-8">
            <div
              className={`border-t ${
                isScrolled ? "border-white" : "border-white"
              }`}
            ></div>
          </div>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://everythinggreen.org/sustainable-website-hong-kong"
                  className={`transition-all ease-linear ${
                    isScrolled
                      ? "text-white hover:text-gray-300"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Sustainable Websites
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://blog.everythinggreen.org/"
                  className={`transition-all ease-linear ${
                    isScrolled
                      ? "text-white hover:text-gray-300"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Blog
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://everythinggreen.org/contact-us"
                  className={`transition-all ease-linear ${
                    isScrolled
                      ? "text-white hover:text-gray-300"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Contact Us
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://everythinggreen.org/login"
                  className={`transition-all ease-linear ${
                    isScrolled
                      ? "text-white hover:text-gray-300"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Login
                </a>
              </motion.li>
            </ul>
          </nav>
          <div className=" mx-8 w-28">
            <div
              className={`border-t ${
                isScrolled ? "border-white" : "border-white"
              }`}
            ></div>
          </div>
        </div>
      </motion.header>
      <main className="container mx-auto px-2 my-auto flex items-center h-[85vh]">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="w-full flex"
        >
          <motion.div className="w-1/2 pr-8" variants={itemVariants}>
            <h1 className="text-6xl font-bold text-white mb-4">
              Unlock Insights for a Greener Future!
            </h1>
            <p className="text-white mb-8 pr-28 text-lg">
              Download our comprehensive whitepaper now and embark on a journey
              towards a more sustainable future.
              <TooltipProvider delayDuration={5}>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="text-sm font-bold text-teal-600 cursor-default">
                      &#9432;
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white border-none">
                    <p className="w-96 text-gray-400 font-mono">
                      Find out how many visitors from different traffic sources
                      interact with your website.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </p>
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white rounded-3xl shadow-xl text-teal-600 transition-all duration-300 ease-linear font-bold transform hover:bg-black hover:text-white hover:shadow-2xl"
                >
                  Download Now!
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white w- flex flex-row justify-evenly items-center min-w-[800px] p-10">
                <div>
                  <Image src={leaf} height={150} width={150} alt="leaf" />
                </div>
                <div>
                  <div className="flex items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-slate-700 flex flex-row">
                        Go&nbsp;<h2 className="text-teal-600">Green</h2>
                        &nbsp;With Us
                      </h2>
                      <p className="text-gray-600">Signup to our newsletter</p>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        className="mt-1 bg-slate-200 border-none w-[500px]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="mt-1 bg-slate-200 border-none w-[500px]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="mt-1 bg-slate-200 border-none w-[500px]"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      onClick={toLogin}
                      className="w-full bg-teal-600 hover:bg-teal-400 text-white"
                    >
                      Download Now
                    </Button>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
          <motion.div className="w-1/2 relative h-1/4" variants={itemVariants}>
            <motion.div
              className="absolute -top-12 -right-10 w-72 h-80 bg-white rounded-lg shadow-xl transform rotate-6"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-slate-800">
                  Thank You!
                </h2>
                <div className="w-12 h-12 bg-green-500 rounded-full mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-0 right-0 w-72 h-80 bg-white rounded-lg shadow-xl"
              whileHover={{ scale: 1.05, rotate: -6 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-slate-800">
                  White Paper
                </h2>
                <div className="w-16 h-16 bg-green-500 rounded-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <div className="bg-white">
        <SustainableWebsites />
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
