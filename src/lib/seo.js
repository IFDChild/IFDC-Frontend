import defaultShareImage from '../assets/images/hero/hero-classroom-computers.jpg';

/**
 * The site address comes from VITE_SITE_URL so canonical links point at the
 * real domain once one is connected; it falls back to the Vercel address.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://ifdc-frontend.vercel.app').replace(/\/+$/, '');
export const SITE_NAME = 'IFDC — International Foundation for Digital Child';
export const DEFAULT_SHARE_IMAGE = defaultShareImage;

export const absoluteUrl = (path) => {
  if (!path) return `${SITE_URL}${defaultShareImage}`;
  return /^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};

/** Details of the organisation itself, for the home page. */
export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'International Foundation for Digital Child',
  alternateName: 'IFDC',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-512.png`,
  email: 'info@ifdchild.org',
  description:
    'IFDC protects and empowers children in the digital world through education, advocacy, research and innovation in Sri Lanka and beyond.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '110/24, Ranaviru Prabath Cooray Mawatha',
    addressLocality: 'Nawala',
    addressCountry: 'LK'
  },
  memberOf: {
    '@type': 'Organization',
    name: 'WeProtect Global Alliance',
    url: 'https://www.weprotect.org'
  },
  sameAs: [
    'https://www.facebook.com/ifdchild',
    'https://www.linkedin.com/company/ifdchild'
  ]
};

/** Schema for a news article or blog post. */
export const articleSchema = ({ title, description, image, url, publishedAt, modifiedAt, author }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image: image ? [absoluteUrl(image)] : undefined,
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  datePublished: publishedAt,
  dateModified: modifiedAt || publishedAt,
  author: { '@type': 'Organization', name: author || 'IFDC' },
  publisher: {
    '@type': 'Organization',
    name: 'International Foundation for Digital Child',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon-512.png` }
  }
});
