// @ts-check
const { siteConfig } = require('./content/site');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:  siteConfig.url,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.9,
  outDir: './public',
  generateIndexSitemap: false,
  transform: async (config, path) => {
    let priority = 0.9;
    let changefreq = 'monthly';

    if (path === '/' || path === '') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (['/stands', '/codes', '/tier-list', '/wiki'].includes(path)) {
      priority = 0.95;
      changefreq = 'daily';
    } else if (['/raids', '/stats', '/skins', '/changelog', '/links'].includes(path)) {
      priority = 0.85;
      changefreq = 'weekly';
    } else if (['/privacy-policy', '/terms-of-service', '/about', '/contact'].includes(path)) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'OAI-SearchBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Anthropic-AI',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'PerplexityBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'DeepseekBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'cohere-ai',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'YouBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'GoogleOther',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'DuckAssistBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
    ],
    additionalSitemaps: [],
  },
}
