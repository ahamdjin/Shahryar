'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function Resume() {
  // Resume details
  const resumeDetails = {
    title: 'Snapshot',
    description: 'Shopify Expert • GHL Automations • Ringba Tracking • Paid Ads • $5M+ in Client Sales',
    fileType: '',
    lastUpdated: '',
    fileSize: '',
    downloadUrl: '',
  };

  const hasFile = Boolean(resumeDetails.downloadUrl);

  const handleDownload = () => {
    if (!hasFile) return;

    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = resumeDetails.downloadUrl.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        onClick={hasFile ? handleDownload : undefined}
        className={`group relative overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300 ${
          hasFile ? 'cursor-pointer' : 'cursor-default'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0, ease: 'easeOut' }}
        whileHover={hasFile ? { scale: 1.01 } : undefined}
      >
        {/* Details area (bottom part) */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">{resumeDetails.title}</h3>
              <p className="text-sm text-muted-foreground">{resumeDetails.description}</p>
              {hasFile && (
                <div className="mt-1 flex text-xs text-muted-foreground">
                  {resumeDetails.fileType && <span>{resumeDetails.fileType}</span>}
                  {resumeDetails.fileType && resumeDetails.lastUpdated && <span className="mx-2">•</span>}
                  {resumeDetails.lastUpdated && <span>Updated {resumeDetails.lastUpdated}</span>}
                  {resumeDetails.lastUpdated && resumeDetails.fileSize && <span className="mx-2">•</span>}
                  {resumeDetails.fileSize && <span>{resumeDetails.fileSize}</span>}
                </div>
              )}
            </div>

            {/* Download indicator */}
            {hasFile && (
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-primary-foreground group-hover:bg-black/80"
                initial={{ scale: 1 }}
              >
                <Download className="h-5 w-5" />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
