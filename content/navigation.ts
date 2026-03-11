/**
 * 导航配置
 * Navigation Configuration
 */

export const navigationConfig = {
  mainNav: [
    { text: "Home", href: "/" },
    { text: "Stands", href: "/stands" },
    { text: "Tier List", href: "/tier-list" },
    { text: "Codes", href: "/codes" },
    { text: "Wiki", href: "/wiki" },
    { text: "Skins", href: "/skins" },
    { text: "Raids", href: "/raids" },
    { text: "Stats Guide", href: "/stats" },
    { text: "Changelog", href: "/changelog" },
    { text: "Links", href: "/links" },
  ],
  footerNav: {
    quickLinks: [
      { text: "Stands", href: "/stands" },
      { text: "Codes", href: "/codes" },
      { text: "Tier List", href: "/tier-list" },
      { text: "Wiki", href: "/wiki" },
    ],
    legal: [
      { text: "About Us", href: "/about" },
      { text: "Contact Us", href: "/contact" },
      { text: "Privacy Policy", href: "/privacy-policy" },
      { text: "Terms of Service", href: "/terms-of-service" },
    ],
  },
} as const;
