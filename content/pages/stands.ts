/**
 * Stands 页面内容配置
 * Stands Page Content
 */

export const standsContent = {
  title: "Bizarre Lineage All Stands and Stats",
  description: "Complete guide to all Stands in Bizarre Lineage. Learn about Stand stats, abilities, rarities, and how to obtain them.",

  intro: {
    text: "Stands are manifestations of your fighting spirit in Bizarre Lineage. There are 17 unique Stands inspired by JoJo's Bizarre Adventure, each with different rarities, abilities, and playstyles. Use Stand Arrows to unlock Stands randomly, with higher rarities being more powerful.",
  },

  categories: [
    {
      id: "mythical",
      name: "Mythical Stands",
      rarity: "Mythical",
      color: "#ff0000",
    },
    {
      id: "legendary",
      name: "Legendary Stands",
      rarity: "Legendary",
      color: "#f59e0b",
    },
    {
      id: "rare",
      name: "Rare Stands",
      rarity: "Rare",
      color: "#3b82f6",
    },
    {
      id: "uncommon",
      name: "Uncommon Stands",
      rarity: "Uncommon",
      color: "#10b981",
    },
    {
      id: "common",
      name: "Common Stands",
      rarity: "Common",
      color: "#9ca3af",
    },
  ],

  howToGet: {
    title: "How to Get Stands",
    steps: [
      "Obtain Stand Arrows from bosses, chests, or purchase them",
      "Use a Stand Arrow from your inventory",
      "Receive a random Stand based on rarity chances",
      "Some Stands can evolve into stronger forms",
    ] as string[],
  },

  tips: [
    "White Snake, Made In Heaven, and C-Moon are the strongest Stands in the current meta",
    "Weather Report is the best early-game Stand for beginners",
    "Red damage numbers scale with Destructive Power stat",
    "Blue damage numbers scale with Destructive Energy stat",
    "Some Stands like White Snake can evolve into more powerful forms",
    "Stand skins are purely cosmetic and don't affect stats",
  ] as string[],

  seo: {
    title: "Bizarre Lineage All Stands - Complete Stats & Abilities Guide",
    description: "Comprehensive database of all 17 Stands in Bizarre Lineage with stats, abilities, rarities, and how to obtain them. Find the best Stands for PvP and PvE.",
    keywords: [
      "Bizarre Lineage stands",
      "Bizarre Lineage stand tier list",
      "all stands",
      "stand stats",
      "stand guide",
      "best stands",
      "stand abilities",
      "how to get stands",
      "Stand Arrow",
      "White Snake",
      "Made In Heaven",
      "Star Platinum",
    ] as string[],
  },
} as const;
