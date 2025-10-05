import Image from "next/image";

const projects = [
  {
    title: "RipStick Shopify Store",
    year: "2023",
    description:
      "Built and scaled a dropshipping Shopify store that crossed $1M in sales within 12 months. Handled store design, product validation, ad creatives, and CRO.",
    stack: ["Shopify", "PageFly", "Facebook Ads", "Klaviyo"],
    image: "/projects/ripstick.jpg",
  },
  {
    title: "GHL Automation Funnel for Agency",
    year: "2024",
    description:
      "Developed a full lead funnel with automated email and SMS follow-ups using GoHighLevel. Increased booked calls by 4x in 2 months.",
    stack: ["GoHighLevel", "Zapier", "Calendly", "Twilio"],
    image: "/projects/ghl-funnel.jpg",
  },
  {
    title: "Ringba Tracking Setup",
    year: "2024",
    description:
      "Configured Ringba tracking system for a performance marketing agency. Implemented dynamic routing, IVR, and webhook integrations for 100% lead attribution.",
    stack: ["Ringba", "Webhooks", "Google Sheets", "API Integrations"],
    image: "/projects/ringba.jpg",
  },
  {
    title: "Paid Ads Case Study",
    year: "2023",
    description:
      "Managed $120k+ ad spend across multiple eCommerce clients, achieving a combined ROAS of 4.7x and generating $1.2M in tracked sales.",
    stack: ["Facebook Ads", "TikTok Ads", "Google Analytics"],
    image: "/projects/ads.jpg",
  },
];

type Project = (typeof projects)[number];

const ProjectContent = ({ project }: { project: Project }) => {
  const projectData = projects.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.year}</span>
          </div>

          <p className="font-sans text-base leading-relaxed text-gray-800 dark:text-gray-200 md:text-lg">
            {projectData.description}
          </p>

          <div className="pt-4">
            <h3 className="mb-3 text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {projectData.image && (
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image src={projectData.image} alt={projectData.title} fill className="object-cover" />
        </div>
      )}
    </div>
  );
};

export const data = [
  {
    category: "Shopify",
    title: "RipStick Shopify Store",
    src: "/projects/ripstick.jpg",
    content: <ProjectContent project={projects[0]} />,
  },
  {
    category: "Automations",
    title: "GHL Automation Funnel for Agency",
    src: "/projects/ghl-funnel.jpg",
    content: <ProjectContent project={projects[1]} />,
  },
  {
    category: "Tracking",
    title: "Ringba Tracking Setup",
    src: "/projects/ringba.jpg",
    content: <ProjectContent project={projects[2]} />,
  },
  {
    category: "Paid Ads",
    title: "Paid Ads Case Study",
    src: "/projects/ads.jpg",
    content: <ProjectContent project={projects[3]} />,
  },
];
