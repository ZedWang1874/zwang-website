export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Content Layout Service',
    description:
      'Contributed to a GraphQL microservice powering dynamic page rendering across walmart.com — supporting billions of monthly requests with a modular zone-based layout system and ATF/BTF split-loading.',
    tags: ['React', 'GraphQL', 'Node.js', 'Microservices'],
    featured: true,
  },
  {
    title: 'iSAM / Item360',
    description:
      'Worked on a multi-tenant supplier platform for managing omni-channel item data at Walmart, contributing to repo consolidation, per-tenant config, i18n support, and a feature flag framework.',
    tags: ['React', 'TypeScript', 'Redux', 'i18n'],
    featured: true,
  },
  {
    title: "Sam's Club Checkout",
    description:
      'Contributed to checkout and payment features for samsclub.com — shipping method selection, membership-tier pricing, accessible EBT payment flow, and end-to-end test coverage.',
    tags: ['React', 'TypeScript', 'A11y', 'Redux'],
    featured: true,
  },
  {
    title: 'Personal Website',
    description:
      'This site — built with Astro, Tailwind CSS v4, and TypeScript. Static-first, fast, dark mode enabled, deployed on GitHub Pages with Cloudflare.',
    tags: ['Astro', 'Tailwind CSS', 'TypeScript'],
    url: 'https://github.com/ZedWang1874',
    featured: false,
  },
];
