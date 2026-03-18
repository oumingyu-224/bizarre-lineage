/**
 * 网站基础配置
 * Site Configuration
 */

export const siteConfig = {
  name: "Bizarre Lineage",
  description: "Master Bizarre Lineage, the JoJo-inspired Roblox RPG where you unlock powerful Stands, battle bosses in Morioh, and dominate PvP combat. Complete guide with tier lists, codes, wiki, and more.",
  domain: "www.bizarrelineage.xyz",
  url: "https://www.bizarrelineage.xyz/",
  email: "support@bizarrelineage.xyz",
  author: "Bizarre Lineage",
  social: {
    twitter: "bizarrelineage",
    facebook: "bizarrelineage",
  },
  metadata: {
    keywords: [
      "Bizarre Lineage",
      "Bizarre Lineage game",
      "Bizarre Lineage Roblox",
      "Bizarre Lineage codes",
      "Bizarre Lineage tier list",
      "Bizarre Lineage stands",
      "Bizarre Lineage trello",
      "Bizarre Lineage stand tier list",
      "code bizarre lineage",
      "Bizarre Lineage discord",
      "tier list bizarre lineage",
      "Bizarre Lineage guide",
      "Bizarre Lineage script",
      "codes bizarre lineage",
      "Bizarre Lineage skins",
      "trello bizarre lineage",
      "Bizarre Lineage skin",
      "night vampire bizarre lineage",
      "avdol raid bizarre lineage",
      "JoJo Roblox game",
      "Roblox Stand game",
      "Stand abilities",
      "Bizarre Lineage tips"
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
