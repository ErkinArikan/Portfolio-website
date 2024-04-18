"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As a 3’rd year Software Engineering student at Atılım University, I've dedicated considerable time to mastering iOS development, with a focus on SwiftUI and UIKit technologies, along with exploring backend technologies like .NET and Spring. I approach software engineering with a keen interest in research, hands-on learning, and teamwork. I thrive on challenges, constantly seeking opportunities to expand my knowledge base and collaborate effectively within diverse teams. Driven by a deep passion for software engineering, I am committed to developing impactful solutions that simplify and enrich the lives of users.
{" "}
        <span className="font-medium"></span>
        {" "}
        <span className="font-medium"></span>.{" "}
        <span className="italic"></span> 
         <span className="underline"></span> {" "}
        <span className="font-medium">
         
        </span>
        {" "}
        <span className="font-medium"></span> 
      </p>

      <p>
        <span className="italic"></span>{" "}
        <span className="font-medium"></span>{" "}
        <span className="font-medium"></span>
      </p>
    </motion.section>
  );
}
