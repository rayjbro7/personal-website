/**
 * Employment history, newest first.
 * Leave a field as an empty string (or an empty array) until you have
 * the details — it will show as a labelled placeholder rather than
 * invented content.
 */
export interface Role {
  title: string;
  organisation: string;
  organisationUrl?: string;
  /** e.g. 'Mar 2024' */
  startDate: string;
  /** Leave as 'Present' for your current role. */
  endDate: string;
  location?: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export const roles: Role[] = [
  {
    title: 'SEO Manager',
    organisation: 'Codefixer',
    organisationUrl: '',
    startDate: '',
    endDate: 'Present',
    location: '',
    summary: '',
    highlights: [],
    current: true,
  },
  // Add previous roles below, for example:
  // {
  //   title: 'Job title',
  //   organisation: 'Organisation',
  //   startDate: 'Jan 2020',
  //   endDate: 'Feb 2023',
  //   summary: 'One or two sentences about the role.',
  //   highlights: ['A responsibility or verified achievement'],
  // },
];
