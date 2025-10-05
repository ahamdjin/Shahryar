"use client";

import { motion } from "framer-motion";

const resume = {
  description: "Shopify Expert • GHL Automations • Ringba Tracking • Paid Ads • $5M+ in Client Sales",
};

export function Resume() {
  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="rounded-xl bg-accent p-6 text-center shadow-md"
      >
        <h3 className="text-lg font-semibold text-foreground">Snapshot</h3>
        <p className="text-muted-foreground mt-2 text-sm md:text-base">
          {resume.description}
        </p>
      </motion.div>
    </div>
  );
}

export default Resume;
