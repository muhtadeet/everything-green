"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import google from "../app/fonts/google-0effc151.png";
import facebook from "../app/fonts/facebook-cdaf40bf.png";
import alphabet from "../app/fonts/alphabet-2dd8e6ce.png";
import redinc from "../app/fonts/red-inc-e83de883.png";
import { RainbowButton } from "./ui/rainbow-button";
import { ChevronUp } from "lucide-react";

export default function Body() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-28" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.p
          variants={itemVariants}
          className="text-center text-2xl mx-40 text-gray-400 mb-28 leading-normal"
        >
          The CO<sub>2</sub> footprint of the Internet&apos;s data centers alone
          may already be comparable to that of global air travel. The good news
          is that a growing number of major Internet corporations are becoming
          more environmentally conscientious, opting for more renewable energy
          sources for their data centers and operations.
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-extrabold text-center text-green-600 mb-20"
        >
          sustainable
        <br />
          example websites
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center items-center space-y-8 font-sans"
        >
          <div className="flex flex-row space-x-8">
            <div className="text-center hover:scale-105 transition-all ease-linear">
              <Image
                src={google}
                alt="Google homepage"
                width={300}
                height={200}
                className="mb-4 rounded-lg shadow-xl"
              />
              <h3 className="font-semibold text-black text-lg mb-2">Google</h3>
              <p className="text-gray-600">0.26gm/per visit</p>
            </div>
            <div className="text-center hover:scale-105 transition-all ease-linear">
              <Image
                src={facebook}
                alt="Facebook homepage"
                width={300}
                height={200}
                className="mb-4 rounded-lg shadow-xl"
              />
              <h3 className="font-semibold text-black text-lg mb-2">Facebook</h3>
              <p className="text-gray-600">0.21gm/per visit</p>
            </div>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="text-center hover:scale-105 transition-all ease-linear">
              <Image
                src={alphabet}
                alt="Google homepage"
                width={300}
                height={200}
                className="mb-4 rounded-lg shadow-xl"
              />
              <h3 className="font-semibold text-black text-lg mb-2">Alphabet</h3>
              <p className="text-gray-600">0.094gm/per visit</p>
            </div>
            <div className="text-center hover:scale-105 transition-all ease-linear">
              <Image
                src={redinc}
                alt="Facebook homepage"
                width={300}
                height={200}
                className="mb-4 rounded-lg shadow-xl"
              />
              <h3 className="font-semibold text-black text-lg mb-2">Red-Inc</h3>
              <p className="text-gray-600">0.230gm/per visit</p>
            </div>
          </div>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-center text-2xl mx-40 text-gray-400 my-28 leading-normal"
        >
          These websites avoid bloated frameworks by using compressed graphics,
          efficient file formats, and lightweight fonts. Check out our
          information on developing sustainable websites and establishing a page
          weight budget if you want to learn more.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex justify-center items-center -my-20"
        >
          <RainbowButton>
            <ChevronUp />
            <p className="font-bold">&nbsp;Test Now</p>
          </RainbowButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
