import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiQgis,
  SiArcgis,
} from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import { GiBattleGear } from "react-icons/gi";
import { BsGlobe2 } from "react-icons/bs";

const about = {
  title: "About me",
  description:
    "Military officer with over 9 years of experience leading and training personnel across Africa and the Middle East. I specialize in tactical planning, training program development, and terrain analysis. I’m passionate about technology and bridging the gap between strategy and digital solutions.",
  info: [
    { fieldName: "Name", fieldValue: "Augustine NY Asare" },
    { fieldName: "Phone", fieldValue: "+233 547222072" },
    { fieldName: "Experience", fieldValue: "9+ Years" },
    { fieldName: "Skype", fieldValue: "nyasare" },
    { fieldName: "Nationality", fieldValue: "Ghanaian" },
    { fieldName: "Email", fieldValue: "nyasare@hotmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "A decade of progressive leadership in training, operations, and internal security under the Ghana Armed Forces and United Nations missions in DRC and Lebanon.",
  items: [
    {
      company: "155 Armoured Regiment",
      position: "Acting 2IC",
      duration: "Nov 2024 – Present",
    },
    {
      company: "Armour Training Sch, Sunyani",
      position: "Course Commander",
      duration: "Apr 2021 – May 2021",
    },
    {
      company: "UN Mission in DRC",
      position: "Officer Commanding, BMR",
      duration: "Mar 2019 – Nov 2020",
    },
    {
      company: "Army Recruit Training Sch",
      position: "Platoon Commander/Instructor",
      duration: "Feb 2017 – Mar 2019",
    },
    {
      company: "UN Mission in DRC",
      position: "Troop Leader, BMR",
      duration: "Jan 2016 – Jan 2017",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Blending tactical military education with tech and strategic training to drive operational and digital excellence.",
  items: [
    {
      institution: "Army Combat Training Sch",
      degree: "Combat Team Commanders Course 2-24",
      duration: "Nov 2024",
    },
    {
      institution: "GAF Command & Staff College",
      degree: "Pass Junior Staff Course (JSC)",
      duration: "May 2024",
    },
    {
      institution: "Ghana Military Academy",
      degree: "Diploma in Military Studies",
      duration: "Jan 2014",
    },
    {
      institution: "University of Ghana, Accra",
      degree: "BA Geography",
      duration: "Jun 2012",
    },
    {
      institution: "ALX Africa",
      degree: "Professional Cert: Software Engineering (Back-end)",
      duration: "2023 - 2025",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "A cross-section of battlefield coordination, digital transformation, and GIS-backed planning expertise.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiQgis />, name: "QGIS" },
    { icon: <SiArcgis />, name: "ArcGIS" },
    { icon: <BsGlobe2 />, name: "Remote Sensing" },
    { icon: <MdSupportAgent />, name: "Technical Support" },
    { icon: <GiBattleGear />, name: "Military Planning" },
  ],
};

export { about, experience, education, skills };
