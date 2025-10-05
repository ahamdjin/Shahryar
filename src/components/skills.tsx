"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, Megaphone, PhoneCall, Repeat, Settings, ShoppingBag } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const Skills = () => {
  const skillsData = [
    {
      category: "Shopify",
      icon: <ShoppingBag className="h-5 w-5" />,
      skills: [
        "Store Setup",
        "Theme Customization",
        "Landing Pages",
        "Product Research",
        "Dropshipping Setup",
        "Store Speed Optimization",
        "Checkout Optimization",
        "Shopify Apps & Integrations",
        "Custom Pages (PageFly, GemPages)",
      ],
      color: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    },
    {
      category: "GHL Automations",
      icon: <Repeat className="h-5 w-5" />,
      skills: [
        "CRM Setup",
        "Funnels & Pipelines",
        "Email/SMS Automations",
        "Lead Nurturing",
        "Abandoned Cart Recovery",
        "Booking & Calendar Integrations",
      ],
      color: "bg-blue-50 text-blue-600 border border-blue-200",
    },
    {
      category: "Ringba",
      icon: <PhoneCall className="h-5 w-5" />,
      skills: [
        "Account Setup",
        "Call Tracking",
        "Dynamic Routing",
        "IVR Setup",
        "Webhook Integration",
        "Performance Analytics",
      ],
      color: "bg-orange-50 text-orange-600 border border-orange-200",
    },
    {
      category: "Paid Ads",
      icon: <Megaphone className="h-5 w-5" />,
      skills: [
        "Facebook Ads",
        "Instagram Ads",
        "Google Ads",
        "TikTok Ads",
        "CAPI & Pixel Setup",
        "ROAS Optimization",
      ],
      color: "bg-purple-50 text-purple-600 border border-purple-200",
    },
    {
      category: "Automations & Integrations",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        "Zapier",
        "Make (Integromat)",
        "n8n",
        "Klaviyo",
        "GA4",
        "GTM",
        "Meta API",
        "Webhooks",
      ],
      color: "bg-cyan-50 text-cyan-600 border border-cyan-200",
    },
    {
      category: "AI Call Agent",
      icon: <Bot className="h-5 w-5" />,
      skills: [
        "Vapi.ai",
        "Twilio",
        "Voiceflow",
        "AI Call Automation (Beginner Level)",
      ],
      color: "bg-rose-50 text-rose-600 border border-rose-200",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto w-full max-w-6xl rounded-4xl px-4"
    >
      <Card className="shadow-none border-none pb-12">
        <CardHeader className="pb-1">
          <CardTitle className="text-primary text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((section, i) => (
              <motion.div key={i} variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-2"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    >
                      <Badge className={`border px-3 py-1.5 font-normal ${section.color}`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
