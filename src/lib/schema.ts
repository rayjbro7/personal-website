/**
 * JSON-LD builders. Only verified details from src/config/site.ts are used;
 * empty values are omitted rather than guessed.
 */
import { site, profileLinks } from '@/config/site';

export function personSchema(siteUrl: URL) {
  const sameAs = profileLinks.map((profile) => profile.url);
  const worksFor: Record<string, unknown> = {
    '@type': 'Organization',
    name: site.employer.name,
  };
  if (site.employer.url) worksFor.url = site.employer.url;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': new URL('/#person', siteUrl).href,
    name: site.name,
    url: siteUrl.href,
    jobTitle: site.jobTitle,
    worksFor,
    knowsAbout: [
      'Search engine optimisation',
      'Technical SEO',
      'Content strategy',
      'Website performance',
    ],
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function websiteSchema(siteUrl: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': new URL('/#website', siteUrl).href,
    url: siteUrl.href,
    name: site.name,
    inLanguage: site.lang,
    publisher: { '@id': new URL('/#person', siteUrl).href },
  };
}

export function profilePageSchema(siteUrl: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': new URL('/#profilepage', siteUrl).href,
    url: siteUrl.href,
    name: site.meta.title,
    inLanguage: site.lang,
    isPartOf: { '@id': new URL('/#website', siteUrl).href },
    mainEntity: { '@id': new URL('/#person', siteUrl).href },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(siteUrl: URL, crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: new URL(crumb.path, siteUrl).href,
    })),
  };
}

/** WebPage describing a topic page, authored by the site owner. */
export function topicPageSchema(
  siteUrl: URL,
  page: { path: string; name: string; description: string; about: string },
) {
  const url = new URL(page.path, siteUrl).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.name,
    description: page.description,
    inLanguage: site.lang,
    about: { '@type': 'Thing', name: page.about },
    isPartOf: { '@id': new URL('/#website', siteUrl).href },
    author: { '@id': new URL('/#person', siteUrl).href },
  };
}
