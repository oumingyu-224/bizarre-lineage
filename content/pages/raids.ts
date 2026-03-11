/**
 * Raids 页面内容配置
 * Raids Page Content
 */

export const raidsContent = {
  title: "Bizarre Lineage Raids & Boss Guide",
  description: "Complete guide to all raids and bosses in Bizarre Lineage. Learn boss locations, drops, strategies, and respawn times.",

  intro: {
    text: "Raids and boss battles are essential for progression in Bizarre Lineage. Defeat powerful enemies to earn Stand Arrows, Rare Chests, Tokens, and other valuable items. This guide covers all raid bosses, mini bosses, and special encounters.",
  },

  raidBosses: [
    {
      name: "Yoshikage Kira",
      location: "Bus Stop 1",
      level: "45+",
      stand: "Killer Queen",
      description: "The main antagonist with explosive Stand abilities. Uses Primary Bomb, Sheer Heart Attack, and Bites the Dust.",
      drops: ["Rare Chest", "Stand Arrow", "20-35 Tokens", "Killer Queen Disc"],
      strategy: "Avoid his bombs and Sheer Heart Attack. Bring a group for easier completion. Focus on dodging his Bites the Dust ultimate.",
      respawnTime: "15 minutes",
    },
    {
      name: "Chumbo/Jotaro",
      location: "Bus Stop 2",
      level: "40+",
      stand: "Star Platinum",
      description: "Powerful close-range fighter with time stop abilities. Uses Ora Barrage and Star Finger.",
      drops: ["Rare Chest", "Stand Arrow", "20-35 Tokens", "Star Platinum Disc"],
      strategy: "Watch for his time stop animation. Keep distance during Ora Barrage. High Destructive Power builds work best.",
      respawnTime: "15 minutes",
    },
    {
      name: "Muhammad Avdol",
      location: "Bus Stop 14",
      level: "35+",
      stand: "Magician's Red",
      description: "Fire-based Stand user with powerful AoE attacks. Uses Crossfire Hurricane and Red Bind.",
      drops: ["Rare Chest", "Stand Arrow", "15-30 Tokens", "Fire Materials"],
      strategy: "Dodge his fire attacks and Red Bind. Bring water-based abilities if available. Group recommended for faster clear.",
      respawnTime: "12 minutes",
    },
    {
      name: "???/Dio",
      location: "Bus Stop 15",
      level: "48+",
      stand: "The World",
      description: "The ultimate raid boss with time stop and high damage. Uses Muda Barrage, Time Stop, and Road Roller.",
      drops: ["Legendary Chest", "Stand Arrow", "30-35 Tokens", "The World Disc", "Vampire Mask"],
      strategy: "Hardest raid boss. Requires coordinated group. Watch for time stop and Road Roller. Bring healing items.",
      respawnTime: "20 minutes",
    },
  ],

  miniBosses: [
    {
      name: "Night Vampire",
      location: "Random spawns (higher chance at night)",
      level: "20+",
      description: "Rare mob required for Hamon quest. Spawns at any normal NPC spawn point during night time.",
      drops: ["Vampire Blood", "EXP", "Small Chest"],
      strategy: "Run PvE Mission Board missions during night for higher spawn chances. Check multiple spawn locations.",
    },
    {
      name: "Elite Guards",
      location: "Bus Stops 3, 9, 14",
      level: "25+",
      description: "Mini bosses with moderate health and damage. Good for farming materials.",
      drops: ["Materials", "Small Chest", "EXP"],
      strategy: "Easier than raid bosses. Can be soloed at appropriate level.",
    },
  ],

  raidMechanics: {
    title: "Raid Mechanics",
    points: [
      "Raid boss drops scale with your damage contribution",
      "Tokens are used for special purchases and upgrades",
      "Bring a group - raid bosses have high HP and damage",
      "Respawn times are fixed - farm efficiently by rotating bosses",
      "Some bosses drop Stand Discs for specific Stands",
    ],
  },

  tips: [
    "Avdol raid at Bus Stop 14 is the best for mid-level Stand Arrow farming",
    "Dio raid has the best drops but requires level 48+ and a strong group",
    "Night Vampires are essential for Hamon quest - hunt during night time",
    "Use the bus system to fast travel between raid boss locations",
    "Check boss respawn times and set up a farming rotation",
    "Tokens from raids can be used for rare items and upgrades",
  ] as string[],

  seo: {
    title: "Bizarre Lineage Raids Guide - Boss Locations, Drops & Strategies",
    description: "Complete raids and boss guide for Bizarre Lineage including Avdol raid, Dio raid, Night Vampires, and more. Learn locations, drops, strategies, and respawn times.",
    keywords: [
      "avdol raid bizarre lineage",
      "night vampire bizarre lineage",
      "Bizarre Lineage raids",
      "boss guide",
      "raid locations",
      "boss drops",
      "Yoshikage Kira",
      "Dio raid",
      "Muhammad Avdol",
      "raid strategies",
      "boss respawn times",
    ] as string[],
  },
} as const;
