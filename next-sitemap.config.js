/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://developer-shakib.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin', '/private'],
  robotsTxtOptions: {
    sitemaps: [
      'https://developer-shakib.vercel.app/sitemap.xml',
    ],
  },
};

export default config;