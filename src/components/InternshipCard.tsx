'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const InternshipCard = () => {
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
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans shadow-2xl backdrop-blur-md sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-xl opacity-30 animate-pulse" />
            <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-lg ring-2 ring-gray-300 relative z-10">
              <img
                src="/Shahryar.jpg"
                alt="Shahryar Saleem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">Shahryar Saleem</h2>
            <p className="text-muted-foreground text-sm">Services & Hire Me</p>
          </div>
        </div>

        {/* Live badge */}
        <span className="mt-4 flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500 shadow-sm sm:mt-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Open for projects
        </span>
      </motion.div>

      {/* Internship Info */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          </motion.div>
          <div>
            <p className="text-foreground text-sm font-medium">Primary Focus</p>
            <p className="text-muted-foreground text-sm">High-converting Shopify stores, funnels & paid ads scaling</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
            <Globe className="mt-1 h-5 w-5 text-green-500" />
          </motion.div>
          <div>
            <p className="text-foreground text-sm font-medium">Based in</p>
            <p className="text-muted-foreground text-sm">Kuala Lumpur, Malaysia — serving global eCommerce brands</p>
          </div>
        </div>
      </motion.div>

      {/* Tech stack */}
      <motion.div variants={fadeInUp} className="mt-8 flex items-start gap-3 sm:col-span-2">
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
        </motion.div>
        <div className="w-full">
          <p className="text-foreground text-sm font-medium mb-2">Services Offered</p>
          <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
            <ul className="list-disc space-y-1 pl-4">
              <li>Shopify store setup & optimization</li>
              <li>Landing pages & conversion funnels</li>
              <li>GoHighLevel automations & CRM workflows</li>
            </ul>
            <ul className="list-disc space-y-1 pl-4">
              <li>Ringba tracking setup & attribution dashboards</li>
              <li>Paid ads management across Facebook, Instagram, Google & TikTok</li>
              <li>Automation integrations with Zapier, Make, n8n & Klaviyo</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* What I bring */}
      <motion.div variants={fadeInUp} className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">Let's build something powerful together 🚀</p>
        <p className="text-foreground text-sm">
          Whether you're looking for a high-converting Shopify store, a complete funnel, or automations that scale — I've got you covered.
        </p>
      </motion.div>

      {/* Goal */}
      <motion.div variants={fadeInUp} className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Why clients choose me</p>
        <p className="text-foreground text-sm">
          Shopify Expert since 2015 • GHL Automations • Ringba Tracking • Paid Ads • $5M+ in client sales.
        </p>
      </motion.div>

      {/* Contact button */}
      <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
        <a
          href="https://calendly.com/shahryarsaleem/30min"
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800 shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a free 30-min consultation
        </a>
      </motion.div>
    </motion.div>
  );
};

export default InternshipCard;
