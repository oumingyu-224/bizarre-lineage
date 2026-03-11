/**
 * 网站基础配置
 * Site Configuration
 */

export const siteConfig = {
  name: "Bizarre Lineage",
  description: "Master Bizarre Lineage, the JoJo-inspired Roblox RPG where you unlock powerful Stands, battle bosses in Morioh, and dominate PvP combat. Complete guide with tier lists, codes, wiki, and more.",
  domain: "bizarrelineage.xyz",
  url: "https://bizarrelineage.xyz/",
  email: "support@bizarrelineage.xyz",
  author: "Bizarre Lineage",
  social: {
    twitter: "bizarrelineage",
    facebook: "bizarrelineage",
  },
  metadata: {
    keywords: [
      "Bizarre Lineage",
      "Bizarre Lineage codes",
      "Bizarre Lineage tier list",
      "Bizarre Lineage trello",
      "Bizarre Lineage stand tier list",
      "Bizarre Lineage wiki",
      "code bizarre lineage",
      "Bizarre Lineage discord",
      "tier list bizarre lineage",
      "Bizarre Lineage script",
      "Bizarre Lineage stands",
      "Bizarre Lineage roblox",
      "codes bizarre lineage",
      "Bizarre Lineage skins",
      "trello bizarre lineage",
      "Bizarre Lineage skin",
      "night vampire bizarre lineage",
      "avdol raid bizarre lineage",
      "Roblox game",
      "JoJo game",
      "Stand abilities",
      "RPG game"
    ] as string[],
    themeColor: "#8b5cf6",
    manifestPath: "/manifest.webmanifest",
  },
  images: {
    icon: {
      favicon: "/favicon.ico",
      favicon16: "/favicon-16x16.png",
      favicon32: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
    og: "/logo.png",
  },
  robloxGameUrl: "https://www.roblox.com/games/14890802310/Bizarre-Lineage",
  discordUrl: "https://discord.gg/bizarrelineage",
  trelloUrl: "https://trello.com/b/bizarrelineage",
  developerDiscordUrl: "https://discord.com/invite/jtkxMvhCau",
  robloxCommunityUrl: "https://www.roblox.com/communities/bizarre-lineage",
};

export type SiteConfig = typeof siteConfig;
