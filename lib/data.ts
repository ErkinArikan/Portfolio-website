import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaSwift } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/04.png";
import rmtdevImg from "@/public/04.png";
import wordanalyticsImg from "@/public/04.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mobile Developer Intern at Biligoba",
    location: "Ankara, Turkey",
    description:
      "I worked as a mobile developer intern at  Biligoba. I developed mobile applications using Swift and I developed a desktop application using WPF.",
    icon: React.createElement(FaSwift),
    date: "2023 May - 2024 May",
  },
] as const;

export const projectsData = [
  {
    title: "Atilim Career Ambassador App",
    description:
      "In this application, career ambassadors can chat among themselves and see the tasks assigned to them. The aim of this application is to increase the popularity of the community.",
    tags: ["Swift", "SwiftUi", "Firebase","XCode"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "iOS",
  "Swift",
  "SwiftUI",
  "UIKit",
  "Flutter",
  "Java",
  "Spring",
  "C#",
  "WPF",
  "UNITY(UI-Toolkit)",
  "MySQL",
  "SqLite",
  "postgreSQL",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "Python",
] as const;
