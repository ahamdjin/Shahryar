"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, Rocket, Settings2, Sparkles, Target } from "lucide-react";

const experience = [
  {
    year: "2015",
    title: "Started as Shopify Expert",
    description:
      "Began my journey building Shopify stores, learning theme customization, and mastering the Shopify ecosystem.",
    icon: <Sparkles className="h-6 w-6 text-emerald-500" />,
  },
  {
    year: "2016 - Present",
    title: "Freelance Shopify Developer & Consultant",
    description:
      "Launched my freelancing career. Built and optimized 100+ Shopify stores, focusing on conversion-driven designs and product validation for dropshipping brands.",
    icon: <Target className="h-6 w-6 text-blue-500" />,
  },
  {
    year: "2020 - Present",
    title: "Performance Marketer (Paid Ads)",
    description:
      "Ran paid ads on Facebook, Instagram, Google, and TikTok, generating over $5M+ in sales for clients. Specialized in eCom growth, funnel optimization, and scaling campaigns profitably.",
    icon: <Rocket className="h-6 w-6 text-purple-500" />,
  },
  {
    year: "2023 - Present",
    title: "GHL Automation Expert",
    description:
      "Built automated funnels, CRM workflows, and pipelines using GoHighLevel for agencies and eCommerce brands. Focused on automating lead nurturing and sales follow-ups.",
    icon: <Settings2 className="h-6 w-6 text-amber-500" />,
  },
  {
    year: "2024 - Present",
    title: "Exploring AI Call Agents",
    description:
      "Currently learning and experimenting with AI call agent systems using Vapi.ai and Twilio to enhance client engagement and lead follow-up automations.",
    icon: <CalendarCheck2 className="h-6 w-6 text-rose-500" />,
  },
];

const Experience = () => {
  return (
    <div className="relative z-0 mx-auto w-full max-w-5xl px-6 py-20 font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-gray-100 to-white"
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-bold text-foreground"
      >
        Experience
      </motion.h2>

      <div className="relative space-y-12 border-l-2 border-muted pl-8">
        {experience.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="absolute left-[-1.3rem] top-1 rounded-full bg-background p-2 shadow-md"
            >
              {item.icon}
            </motion.div>

            <div className="rounded-xl bg-card/70 p-6 shadow-lg backdrop-blur-md">
              <p className="text-sm font-medium text-primary">{item.year}</p>
              <h3 className="mt-1 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
