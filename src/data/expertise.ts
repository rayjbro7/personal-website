/** Areas of professional focus shown on the homepage. Edit freely. */
export interface ExpertiseArea {
  title: string;
  description: string;
  /** Optional link to a dedicated page for this area. */
  href?: string;
}

export const expertise: ExpertiseArea[] = [
  {
    title: 'Technical SEO',
    href: '/technical-seo/',
    description:
      'Making sure search engines can crawl, render and index a site properly — site architecture, internal linking, canonicalisation, structured data and the details that quietly hold rankings back.',
  },
  {
    title: 'SEO Strategy',
    description:
      'Turning business goals into a realistic search plan: where the opportunity is, what to prioritise first and how progress will be judged.',
  },
  {
    title: 'On-Page SEO',
    description:
      'Page-level work that helps both people and search engines understand a page — titles, headings, copy, media and how pages connect to one another.',
  },
  {
    title: 'Content Strategy',
    description:
      'Planning content around what people are genuinely searching for, how topics fit together and where existing pages can be improved rather than replaced.',
  },
  {
    title: 'SEO Auditing',
    description:
      'Structured reviews of a website’s technical health, content and performance, with findings ranked by impact so the important fixes happen first.',
  },
  {
    title: 'Analytics and Reporting',
    description:
      'Using search and analytics data to understand what is working, explain it clearly and decide where to focus next.',
  },
];
