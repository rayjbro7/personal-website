/**
 * Site configuration — the single place for personal details.
 *
 * Anything left as an empty string is treated as "not yet provided":
 * it is hidden from the public page and from structured data, or shown
 * as a clearly labelled placeholder. Nothing here is invented.
 */

export interface SocialProfile {
  /** Visible label, e.g. "LinkedIn" */
  label: string;
  /** Full URL. Leave empty to hide the profile. */
  url: string;
}

export const site = {
  /**
   * Show dashed "to be added" notes and demonstration project cards.
   * Set to false before launch: missing items are then simply hidden.
   */
  showPlaceholders: true,

  /**
   * Switch on once the matching page routes exist, so previews only
   * link to pages that are really there (no broken links).
   */
  features: {
    articlePages: false, // /articles/[slug]/
  },

  /** Your name as it should appear across the site. */
  name: 'Ray Brown',

  /** Current role and employer (verified, used in Person structured data). */
  jobTitle: 'SEO Manager',
  employer: {
    name: 'Codefixer',
    /** Optional employer website, e.g. 'https://www.codefixer.com'. */
    url: '',
  },

  /** Language and locale for <html lang> and Open Graph. */
  lang: 'en-GB',
  locale: 'en_GB',

  /** Default SEO metadata for the homepage. */
  meta: {
    title: 'Ray Brown — SEO Manager at Codefixer',
    description:
      'Personal website of Ray Brown, SEO Manager at Codefixer. Notes, projects and articles on technical SEO, content strategy and website performance.',
    /** Default social sharing image (1200 × 630) in /public. */
    ogImage: '/og-default.png',
  },

  /** Contact details. Leave empty until you are ready to publish them. */
  contact: {
    email: '',
  },

  /**
   * Professional profiles. Empty URLs are hidden on the page and excluded
   * from the Person schema `sameAs` list.
   */
  social: {
    linkedin: { label: 'LinkedIn', url: '' },
    others: [
      // { label: 'GitHub', url: 'https://github.com/your-handle' },
      // { label: 'Bluesky', url: 'https://bsky.app/profile/your-handle' },
    ] as SocialProfile[],
  },
} as const;

/** Homepage section anchors, shared by the header and footer navigation. */
export const navigation = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' },
] as const;

/** All configured profile links (LinkedIn first), with empty ones removed. */
export const profileLinks: SocialProfile[] = [
  site.social.linkedin,
  ...site.social.others,
].filter((profile) => profile.url.trim() !== '');
