'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Resume() {
  // Resume details
  const resumeDetails = {
    description: 'Shopify Expert • GHL Automations • Ringba Tracking • Paid Ads • $5M+ in Client Sales',
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        className="group relative overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Details area (bottom part) */}
        <div className="p-5">
          <p className="text-foreground text-base leading-relaxed">
            {resumeDetails.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
