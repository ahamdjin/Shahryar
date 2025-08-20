import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Shahryar Saleem. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Shahryar Saleem — a 20-year-old automation nerd from Lahore who believes n8n flows should come with a seatbelt. I build AI-driven systems that work *while I sleep* 😎. If it's automatable, I'll automate it—sometimes even my breakfast reminders. Let's make the future a bit smarter (and lazier).",
    };
  },
});
