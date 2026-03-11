/**
 * Skins 页面内容配置
 * Skins Page Content
 */

export const skinsContent = {
  title: "Bizarre Lineage Skins Guide",
  description: "Complete guide to all Stand skins in Bizarre Lineage. Learn how to get skins, which Stands have skins, and showcase your rare cosmetics.",

  intro: {
    text: "Skins are cosmetic items in Bizarre Lineage that alter the appearance of your Stand. While skins don't provide stat advantages, they allow you to personalize your gameplay and flex rare cosmetics. Each Stand has different skins available through various methods.",
  },

  categories: [
    {
      id: "kawaii",
      name: "Kawaii Variants",
      description: "Cute, anime-style versions of Stands with bright colors and chibi aesthetics.",
      skins: [
        { name: "Kawaii Star Platinum", stand: "Star Platinum", obtainMethod: "Stand Arrow (rare)" },
        { name: "Kawaii The World", stand: "The World", obtainMethod: "Stand Arrow (rare)" },
        { name: "Kawaii Killer Queen", stand: "Killer Queen", obtainMethod: "Stand Arrow (rare)" },
      ],
    },
    {
      id: "alternate-colors",
      name: "Alternate Colors",
      description: "Color palette swaps that give Stands a fresh look while maintaining the original design.",
      skins: [
        { name: "Blue Star Platinum", stand: "Star Platinum", obtainMethod: "Skin Reroll Essence" },
        { name: "Red The World", stand: "The World", obtainMethod: "Skin Reroll Essence" },
        { name: "Green Weather Report", stand: "Weather Report", obtainMethod: "Skin Reroll Essence" },
        { name: "Purple King Crimson", stand: "King Crimson", obtainMethod: "Skin Reroll Essence" },
      ],
    },
    {
      id: "shiny",
      name: "Shiny/Metallic",
      description: "Rare metallic and shiny variants with special visual effects.",
      skins: [
        { name: "Shiny White Snake", stand: "White Snake", obtainMethod: "Stand Arrow (very rare)" },
        { name: "Shiny Made In Heaven", stand: "Made In Heaven", obtainMethod: "Evolution with shiny" },
        { name: "Golden Experience", stand: "Gold Experience", obtainMethod: "Stand Arrow (rare)" },
      ],
    },
  ],

  howToGet: {
    title: "How to Get Stand Skins",
    methods: [
      "Use Stand Arrows - small chance to get a Stand with a random skin",
      "Use Skin Reroll Essences to reroll your current Stand's skin",
      "Participate in special events for exclusive limited-time skins",
      "Trade with other players in the Discord community",
      "Complete special quests or achievements for unique skins",
    ] as string[],
  },

  tips: [
    "Skins are purely cosmetic and don't affect Stand stats or abilities",
    "Rare skins from Stand Arrow rolls are completely random",
    "Save Skin Reroll Essences for Stands you plan to main",
    "Some skins are exclusive to certain Stand rarities",
    "Trading is the most reliable way to get specific skins you want",
    "Check the official Trello for a complete visual gallery of all skins",
  ] as string[],

  seo: {
    title: "Bizarre Lineage Skins - All Stand Skins & How to Get Them",
    description: "Complete guide to all Stand skins in Bizarre Lineage. Learn how to obtain skins, which Stands have cosmetics, and showcase rare variants.",
    keywords: [
      "Bizarre Lineage skins",
      "Bizarre Lineage skin",
      "stand skins",
      "cosmetics",
      "how to get skins",
      "skin guide",
      "rare skins",
      "skin trading",
      "kawaii skins",
    ] as string[],
  },
} as const;
