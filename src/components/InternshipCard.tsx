"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Rocket } from "lucide-react";

const services = {
  intro:
    "Let's build something powerful together 🚀. Whether you're looking for a high-converting Shopify store, a complete funnel, or automations that scale — I've got you covered.",
  offerings: [
    {
      title: "Shopify Store Setup",
      description:
        "Custom Shopify stores built for conversion — from theme setup to product pages and checkout optimization.",
    },
    {
      title: "Landing Pages & Funnels",
      description:
        "Design and build landing pages that drive results. High-impact funnels for both eCom and service-based businesses.",
    },
    {
      title: "GHL Automations",
      description:
        "Automate your workflows, follow-ups, and lead nurturing using GoHighLevel and third-party integrations.",
    },
    {
      title: "Ringba Tracking Setup",
      description:
        "Setup call tracking, IVR, and attribution dashboards to monitor performance marketing campaigns effectively.",
    },
    {
      title: "Paid Ads Management",
      description:
        "Facebook, Instagram, Google, and TikTok campaigns that scale — tested strategies delivering $5M+ sales.",
    },
  ],
  callToAction: {
    text: "Book a free 30-min consultation",
    link: "https://calendly.com/shahryarsaleem/30min",
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const ServicesCard = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-10 font-sans shadow-2xl backdrop-blur-md sm:px-10 md:px-16"
    >
      <motion.div variants={fadeInUp} className="flex flex-col gap-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-lg">
          <Rocket className="h-7 w-7" />
        </div>
        <h2 className="text-foreground text-3xl font-semibold">Work with Shahryar</h2>
        <p className="text-muted-foreground text-sm md:text-base">{services.intro}</p>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-8 space-y-6">
        {services.offerings.map((service, index) => (
          <motion.div
            key={service.title}
            custom={index + 1}
            variants={fadeInUp}
            className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-card/80 p-6 text-left shadow-sm backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-10 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Calendar className="h-4 w-4 text-primary" />
          <span>Limited availability for new projects</span>
        </div>
        <a
          href={services.callToAction.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white shadow-md transition-colors duration-300 hover:bg-zinc-800"
        >
          {services.callToAction.text}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ServicesCard;
