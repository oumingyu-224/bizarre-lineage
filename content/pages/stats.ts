/**
 * Stats 页面内容配置
 * Stats Page Content
 */

export const statsContent = {
  title: "Bizarre Lineage Stats Guide",
  description: "Complete guide to the stats system in Bizarre Lineage. Learn how to allocate stat points, best builds for each Stand, and optimize your character.",

  intro: {
    text: "Understanding the stats system is crucial for success in Bizarre Lineage. Every level up gives you stat points to allocate across different attributes. This guide covers all stats, their effects, and optimal builds for every Stand type.",
  },

  sections: [
    {
      id: "stats-overview",
      title: "Stats Overview",
      content: [
        {
          subtitle: "Destructive Power",
          text: "Increases damage for abilities that show RED damage numbers. Essential for most Stand builds. Soft cap at 100 points. Primary stat for close-range power Stands like Star Platinum, The World, and Crazy Diamond.",
        },
        {
          subtitle: "Destructive Energy",
          text: "Increases damage for abilities that show BLUE damage numbers. Important for ranged and ability-focused Stands. Soft cap at 100 points. Primary stat for long-range Stands like Weather Report, Magician's Red, and Hierophant Green.",
        },
        {
          subtitle: "Health",
          text: "Increases your maximum HP. The safest stat to invest in regardless of build type. Recommended 20-30 points for all builds, more for PvP-focused characters. Soft cap at 50 points.",
        },
        {
          subtitle: "Strength",
          text: "Increases melee damage for physical attacks without Stand. Important for hybrid builds. Only invest if using melee weapons or hybrid combat style. Soft cap at 80 points.",
        },
        {
          subtitle: "Weapon",
          text: "Increases damage with equipped weapons. Synergizes with Strength stat. Recommended for weapon-focused builds only. Pairs well with Anubis or melee playstyles. Soft cap at 80 points.",
        },
        {
          subtitle: "Speed",
          text: "Increases movement speed and dash distance. Useful for mobility and positioning. Recommended 10-20 points for PvP builds, less important for PvE. Soft cap at 40 points.",
        },
      ],
    },
  ],

  recommendedBuilds: {
    title: "Recommended Builds by Stand",
    builds: [
      {
        stand: "Star Platinum / The World",
        description: "Close-range power Stand focused on red damage barrages",
        stats: ["100 Destructive Power", "30 Destructive Energy", "20 Health"],
      },
      {
        stand: "Weather Report",
        description: "Long-range ability Stand with excellent crowd control",
        stats: ["80 Destructive Energy", "50 Destructive Power", "20 Health"],
      },
      {
        stand: "White Snake",
        description: "Balanced evolution Stand preparing for C-Moon/Made In Heaven",
        stats: ["70 Destructive Power", "70 Destructive Energy", "10 Health"],
      },
      {
        stand: "Made In Heaven",
        description: "Speed-based Stand with high mobility",
        stats: ["90 Destructive Power", "20 Speed", "20 Health", "20 Destructive Energy"],
      },
      {
        stand: "King Crimson",
        description: "Burst damage Stand for PvP",
        stats: ["100 Destructive Power", "20 Health", "30 Destructive Energy"],
      },
      {
        stand: "Crazy Diamond",
        description: "Support Stand with restoration abilities",
        stats: ["80 Destructive Power", "40 Destructive Energy", "30 Health"],
      },
    ],
  },

  tips: [
    "Health is the safest stat - invest at least 20 points regardless of build",
    "Check your ability damage colors: red = Destructive Power, blue = Destructive Energy",
    "Don't spread points too thin - focus on 2-3 main stats",
    "You can use Stat Reset Essences to respec your points",
    "Soft caps exist - diminishing returns after certain point thresholds",
    "PvP builds need more Health than PvE builds",
    "Test your build in PvE before committing to PvP",
  ] as string[],

  seo: {
    title: "Bizarre Lineage Stats Guide - Best Builds for Every Stand",
    description: "Complete stats guide for Bizarre Lineage. Learn how to allocate stat points, best builds for each Stand type, and optimize your character for PvP and PvE.",
    keywords: [
      "Bizarre Lineage stats",
      "stat guide",
      "best stats",
      "stat builds",
      "Destructive Power",
      "Destructive Energy",
      "stat allocation",
      "build guide",
      "Stand builds",
      "stat reset",
    ] as string[],
  },
} as const;
