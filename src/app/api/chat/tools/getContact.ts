import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    "Provides Shahryar's latest contact details.",
  parameters: z.object({}),
  execute: async () => {
    return "📩 Email: shahryar@shahryarsaleem.com\n📞 Phone: +13073102584\n📅 Book a Call: https://calendly.com/shahryarsaleem/30min";
  },
});
