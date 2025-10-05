import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

// Enhanced project content array with all projects
const PROJECT_CONTENT: ProjectProps[] = [
  {
    title: 'RipStick Shopify Store',
    description:
      'Built and scaled a dropshipping Shopify store that crossed $1M in sales within 12 months. Handled store design, product validation, ad creatives, and CRO.',
    techStack: ['Shopify', 'PageFly', 'Facebook Ads', 'Klaviyo'],
    date: '2023',
    images: [
      {
        src: '/projects/ripstick.jpg',
        alt: 'RipStick Shopify store mockup showcasing product pages',
      },
    ],
  },
  {
    title: 'GHL Automation Funnel for Agency',
    description:
      'Developed a full lead funnel with automated email and SMS follow-ups using GoHighLevel. Increased booked calls by 4x in 2 months.',
    techStack: ['GoHighLevel', 'Zapier', 'Calendly', 'Twilio'],
    date: '2024',
    images: [
      {
        src: '/projects/ghl-funnel.jpg',
        alt: 'Automation flow overview for GoHighLevel funnel project',
      },
    ],
  },
  {
    title: 'Ringba Tracking Setup',
    description:
      'Configured Ringba tracking system for a performance marketing agency. Implemented dynamic routing, IVR, and webhook integrations for 100% lead attribution.',
    techStack: ['Ringba', 'Webhooks', 'Google Sheets', 'API Integrations'],
    date: '2024',
    images: [
      {
        src: '/projects/ringba.jpg',
        alt: 'Ringba tracking dashboard setup for performance marketing',
      },
    ],
  },
  {
    title: 'Paid Ads Case Study',
    description:
      'Managed $120k+ ad spend across multiple eCommerce clients, achieving a combined ROAS of 4.7x and generating $1.2M in tracked sales.',
    techStack: ['Facebook Ads', 'TikTok Ads', 'Google Analytics'],
    date: '2023',
    images: [
      {
        src: '/projects/ads.jpg',
        alt: 'Paid ads performance charts highlighting ROAS results',
      },
    ],
  },
];

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="font-sans text-base leading-relaxed md:text-lg text-gray-800 dark:text-gray-200">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {(projectData.techStack ?? []).map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {(projectData.links?.length ?? 0) > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {(projectData.links ?? []).map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {(projectData.images?.length ?? 0) > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {(projectData.images ?? []).map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Shopify',
    title: 'RipStick Shopify Store',
    src: '/projects/ripstick.jpg',
    content: <ProjectContent project={{ title: 'RipStick Shopify Store' }} />,
  },
  {
    category: 'Automation',
    title: 'GHL Automation Funnel for Agency',
    src: '/projects/ghl-funnel.jpg',
    content: <ProjectContent project={{ title: 'GHL Automation Funnel for Agency' }} />,
  },
  {
    category: 'Ringba',
    title: 'Ringba Tracking Setup',
    src: '/projects/ringba.jpg',
    content: <ProjectContent project={{ title: 'Ringba Tracking Setup' }} />,
  },
  {
    category: 'Paid Ads',
    title: 'Paid Ads Case Study',
    src: '/projects/ads.jpg',
    content: <ProjectContent project={{ title: 'Paid Ads Case Study' }} />,
  },
];
