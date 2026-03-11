/**
 * Tier List 页面内容配置
 * Tier List Page Content
 */

export const tierListContent = {
  title: "Bizarre Lineage Stand Tier List",
  description: "Complete Stand tier list for Bizarre Lineage ranked for both PvP and PvE combat. Updated for March 2026 meta.",

  intro: {
    text: "This tier list ranks all 17 Stands in Bizarre Lineage based on their overall performance in both PvP and PvE. Rankings consider damage output, combo potential, crowd control, mobility, and ease of use. The meta is constantly evolving, so check back regularly for updates.",
  },

  tiers: [
    {
      tier: 'S+',
      name: 'S+ Tier - Meta Defining',
      description: 'The absolute best Stands in the game. Dominant in both PvP and PvE with exceptional abilities.',
      color: '#ff0000',
      stands: ['White Snake', 'Made In Heaven', 'C-Moon', 'Weather Report'],
    },
    {
      tier: 'S',
      name: 'S Tier - Excellent',
      description: 'Top-tier Stands that excel in most situations. Highly competitive and powerful.',
      color: '#ff6b00',
      stands: ['Star Platinum', 'The World', 'King Crimson', 'Gold Experience Requiem'],
    },
    {
      tier: 'A',
      name: 'A Tier - Very Strong',
      description: 'Reliable Stands that perform well in both PvP and PvE. Great choices for most players.',
      color: '#ffd700',
      stands: ['Crazy Diamond', 'Gold Experience', 'Killer Queen', "Magician's Red", 'Anubis', 'The World AU'],
    },
    {
      tier: 'B',
      name: 'B Tier - Solid',
      description: 'Decent Stands that require more skill or specific situations to shine. Still viable for most content.',
      color: '#10b981',
      stands: ['Silver Chariot', 'Hierophant Green', 'Sticky Fingers'],
    },
    {
      tier: 'C',
      name: 'C Tier - Average',
      description: 'Below-average Stands that struggle in higher-level content. Consider rerolling if possible.',
      color: '#6b7280',
      stands: ['Hermit Purple', 'Aerosmith'],
    },
  ],

  buildTips: {
    title: "Stat Build Tips by Stand Type",
    tips: [
      {
        type: "Close-Range Power Stands",
        stands: "Star Platinum, The World, Crazy Diamond",
        stats: "Focus on Destructive Power (100+) and Health (20-30). These Stands rely on red damage numbers.",
      },
      {
        type: "Long-Range Ability Stands",
        stands: "Weather Report, Magician's Red, Hierophant Green",
        stats: "Prioritize Destructive Energy (80+) for blue damage scaling. Add some Health for survivability.",
      },
      {
        type: "Evolution Stands",
        stands: "White Snake, Gold Experience",
        stats: "Balanced build with both Destructive Power and Energy (60-80 each) to prepare for evolutions.",
      },
      {
        type: "Speed-Based Stands",
        stands: "Made In Heaven, Silver Chariot",
        stats: "High Destructive Power with some Speed investment for combo potential.",
      },
    ],
  },

  pvpMeta: {
    title: "Current PvP Meta",
    description: "White Snake dominates the PvP meta with its disc steal and illusion abilities. Made In Heaven's speed makes it nearly impossible to counter. Weather Report provides excellent zoning and crowd control.",
  },

  pveMeta: {
    title: "Best Stands for PvE",
    description: "Weather Report and White Snake are the best for PvE progression. Their AoE abilities and crowd control make boss fights and quests much easier. Star Platinum is also excellent for single-target boss damage.",
  },

  seo: {
    title: "Bizarre Lineage Tier List - Best Stands Ranked for PvP & PvE 2026",
    description: "Complete Bizarre Lineage Stand tier list ranking all 17 Stands for PvP and PvE combat. Updated for March 2026 meta with build tips and strategies.",
    keywords: [
      "Bizarre Lineage tier list",
      "tier list bizarre lineage",
      "Bizarre Lineage stand tier list",
      "best stands",
      "stand rankings",
      "PvP tier list",
      "PvE tier list",
      "meta stands",
      "White Snake tier",
      "Made In Heaven tier",
    ] as string[],
  },
} as const;
