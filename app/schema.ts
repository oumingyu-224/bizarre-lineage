import { siteConfig } from "@/content/site";

export const generateGameSchema = (game: {
  title: string;
  description: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.description,
    "playMode": "SinglePlayer",
    "applicationCategory": "Browser Game",
    "gamePlatform": ["Web Browser"],
    "url": `${siteConfig.url}${game.url}`,
    "inLanguage": "en",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

import { content } from "@/config/content";

export const howToPlaySchema = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  "name": content.howToPlay.title,
  "url": "https://crazy-cattle.net",
  "inLanguage": "en",
  "image": {
    "@type": "ImageObject",
    "url": content.howToPlay.image
  },
  "step": [{
    "@type": "HowToStep",
    "position": "1",
    "name": content.howToPlay.title,
    "text": content.howToPlay.description,
    "image": content.howToPlay.image
  }]
};

export const generateRatingSchema = (rating: number, votes: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": siteConfig.name,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": votes,
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.url}${item.url}`
    }))
  };
};

export const faqSchema = (items: readonly { question: string; answer: string }[] | Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "url": siteConfig.url,
  "logo": `${siteConfig.url}${siteConfig.images.og}`,
  "description": siteConfig.description,
  "sameAs": [
    `https://twitter.com/${siteConfig.social.twitter}`,
    `https://facebook.com/${siteConfig.social.facebook}`,
    siteConfig.discordUrl,
    siteConfig.robloxGameUrl
  ]
};



