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
    role: 'Sr. React Developer',
    start: 'Jul 2024',
    end: 'Jan 2026',
    bullets: [
      'Contributed to Content Layout Service — a mission-critical GraphQL microservice powering dynamic page rendering across walmart.com, supporting 10+ page types with billions of monthly requests.',
      'Worked on zone-based modular layout system with ATF/BTF split-loading strategy, contributing to a 30% improvement in Largest Contentful Paint (LCP).',
      'Helped implement multi-tenant configuration logic supporting regional variations (US, CA, MX, CL), enabling business teams to self-serve page layouts.',
    ],
  },
  {
    company: 'Walmart',
    role: 'Front-End Engineer',
    start: 'Jan 2023',
    end: 'Jun 2024',
    bullets: [
      'Contributed to iSAM/Item360 — a supplier platform for managing omni-channel item data, helping integrate multiple repos into a unified multi-tenancy codebase with per-tenant config loading.',
      'Developed a localized string module using react-i18n with server-side translation files and on-demand language downloads per tenant.',
      'Participated in the design of a feature flag framework in TypeScript based on Togglz, supporting trunk-based development across engineering teams.',
    ],
  },
  {
    company: "Sam's Club",
    role: 'Front-End Engineer',
    start: 'Jan 2022',
    end: 'Jan 2023',
    bullets: [
      'Contributed to checkout and payment feature development for samsclub.com, including shipping method selection and cost display based on membership tier.',
      'Helped implement accessible (A11y) EBT payment section with end-to-end testing for shipping address validation and error handling.',
      'Collaborated closely with QA on A/B testing to optimize checkout conversion.',
    ],
  },
];
