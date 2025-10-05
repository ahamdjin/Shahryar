'use client';

import { motion } from 'framer-motion';
import { CalendarCheck2, Rocket, Settings2, Sparkles, Target } from 'lucide-react';

const journey = [
  {
    icon: <Sparkles className="h-6 w-6 text-emerald-500" />,
    title: '2015 — Started as Shopify Expert',
    description: (
      <p className="text-muted-foreground text-sm">
        Built my first Shopify stores, learned theme customization, and obsessed over how design choices impact conversion.
      </p>
    ),
  },
  {
    icon: <Target className="h-6 w-6 text-blue-500" />,
    title: '2016 – Present — Freelance Shopify Developer & Consultant',
    description: (
      <p className="text-muted-foreground text-sm">
        Launched my freelance practice and have since delivered 100+ stores with validated products, optimized layouts, and data-backed CRO for dropshipping brands.
      </p>
    ),
  },
  {
    icon: <Rocket className="h-6 w-6 text-purple-500" />,
    title: '2020 – Present — Performance Marketer (Paid Ads)',
    description: (
      <p className="text-muted-foreground text-sm">
        Managed Facebook, Instagram, Google, and TikTok campaigns pushing $5M+ in tracked revenue through tight offers, creative testing, and funnel optimization.
      </p>
    ),
  },
  {
    icon: <Settings2 className="h-6 w-6 text-amber-500" />,
    title: '2023 – Present — GHL Automation Expert',
    description: (
      <p className="text-muted-foreground text-sm">
        Architected GoHighLevel automations—pipelines, CRM workflows, and nurture sequences—that keep leads engaged without manual follow-up.
      </p>
    ),
  },
  {
    icon: <CalendarCheck2 className="h-6 w-6 text-rose-500" />,
    title: '2024 – Present — Exploring AI Call Agents',
    description: (
      <p className="text-muted-foreground text-sm">
        Prototyping Vapi.ai and Twilio call agents that qualify leads, sync to CRMs, and trigger automations for faster responses.
      </p>
    ),
  },
];

const Experience = () => {
  return (
    <div className="relative z-0 mx-auto w-full max-w-5xl px-6 py-20 font-sans">
      {/* Subtle animated background particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-gray-100 to-white animate-pulse"
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold text-foreground mb-12"
      >
        My Experience Journey 🚀
      </motion.h2>

      <div className="relative border-l-2 border-muted pl-6 space-y-16">
        {journey.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Timeline Dot with Icon Animation */}
            <motion.div
              initial={{ scale: 0.8, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="absolute left-[-1.2rem] top-1 z-0 bg-background p-2 rounded-full shadow-md"
            >
              {item.icon}
            </motion.div>

            {/* Content */}
            <div className="bg-card/70 shadow-lg rounded-xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <div>{item.description}</div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
