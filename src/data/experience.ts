export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: 'Walmart',
    role: 'Front-End Engineer',
    start: 'Jul 2024',
    end: 'Jan 2026',
    bullets: [
      'Contributed to Content Layout Service (CLS) — a GraphQL microservice serving 500M+ monthly users on Walmart.com; implemented schema updates, resolvers, and data integrations for modular page composition.',
      'Worked on ATF/BTF rendering strategies to prioritize critical content delivery, measurably reducing Time-to-Interactive (TTI) and improving Core Web Vitals (LCP, CLS) across high-traffic page types.',
      'Integrated with Tempo, Walmart\'s internal content configuration platform, to dynamically serve visual modules (carousels, banners, image blocks) across multiple storefronts.',
      'Contributed to multi-tenant configuration logic supporting per-region content variations across 4 international markets (US, CA, MX, CL), enabling localized experiences without duplicating application logic.',
    ],
  },
  {
    company: 'Walmart',
    role: 'Front-End Engineer',
    start: 'Feb 2023',
    end: 'Jun 2024',
    bullets: [
      'Conducted a proof-of-concept (POC) evaluating i18n frameworks for the Item360 platform, establishing the architectural foundation for subsequent multi-locale implementation.',
      'Implemented a multi-tenancy i18n localized string module for the iSAM/Item360 supplier platform, enabling full multi-locale support and expanding global supplier accessibility.',
    ],
  },
  {
    company: "Sam's Club",
    role: 'Front-End Engineer',
    start: 'Jan 2022',
    end: 'Jan 2023',
    bullets: [
      'Developed the checkout shipping section UI dynamically rendering available shipping methods and real-time cost estimates based on membership tier, improving UX across desktop and mobile web.',
      'Implemented item slot restriction features adapting to backend API changes, enhancing checkout throughput and contributing to an estimated $37M in incremental annual revenue.',
      'Implemented WCAG 2.1 / A11y-compliant EBT/SNAP payment UI, expanding federal-benefit payment accessibility and meeting federal accessibility standards.',
      'Authored unit and integration tests using Jest, React Testing Library, and Enzyme, maintaining high test coverage across rapid Agile development cycles.',
    ],
  },
];
