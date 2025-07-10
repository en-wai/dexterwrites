"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const interests = [
  { name: "Military", slug: "military" },
  { name: "Finance", slug: "finance" },
  { name: "Software Engineering", slug: "software-engineering" },
  { name: "GIS & Remote Sensing", slug: "gis-remote-sensing" },
  { name: "Artificial Intelligence", slug: "artificial-intelligence" },
  { name: "Cybersecurity", slug: "cybersecurity" },
  { name: "Geospatial Intelligence", slug: "geoint" },
  { name: "FX Trading", slug: "fx-trading" },
  { name: "Academics", slug: "academics" },
];

const BlogLandingPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      }}
      className="py-12"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Explore My Interests</h1>
        <p className="text-white/60 mb-12 max-w-2xl mx-auto">
          Dive into curated content across various disciplines — each category reflects what I read, think about, and work on.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interests.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="block p-6 rounded-xl bg-[#1e1e1e] hover:bg-accent transition text-white text-xl font-medium shadow-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogLandingPage;
// This code defines a blog landing page that displays a list of interests as links.
// Each interest is represented as a card that links to a specific blog category page.
// The page uses Framer Motion for animations and Next.js Link for navigation.
// The interests are displayed in a responsive grid layout, with hover effects for interactivity.
// The design is focused on a clean, modern aesthetic with a dark theme and emphasis on readability.
// The page is structured to be visually appealing and user-friendly, encouraging exploration of different topics.
// The use of Tailwind CSS classes ensures a consistent and responsive design across devices.
// The page is designed to be part of a larger Next.js application, leveraging its routing capabilities
// and client-side rendering features for a smooth user experience.
// The component is exported as the default export, making it available for use in the Next.js    