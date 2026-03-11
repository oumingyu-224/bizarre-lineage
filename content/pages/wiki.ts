/**
 * Wiki 页面内容配置
 * Wiki Page Content
 */

export const wikiContent = {
  title: "Bizarre Lineage Wiki & Complete Guide",
  description: "Complete wiki and guide for Bizarre Lineage. Learn game mechanics, stats system, progression, raids, and more.",

  intro: {
    text: "Bizarre Lineage is a JoJo's Bizarre Adventure-inspired Roblox RPG set in the open world of Morioh. This comprehensive guide covers everything you need to master the game, from basic mechanics to advanced strategies.",
  },

  sections: [
    {
      id: "getting-started",
      title: "Getting Started",
      content: [
        {
          subtitle: "Tutorial & First Steps",
          text: "When you first spawn at the Morioh Grand Hotel, complete the short tutorial. Don't skip it - it gives you a 15-minute 1.5x XP boost that helps with early leveling. Choose your starting stats wisely as they affect your early game progression.",
        },
        {
          subtitle: "Controls",
          text: "Movement: WASD | Jump: Space | Sprint: Shift | Stand Summon: Q | Abilities: E, R, T, Y, F, G | Block: X | Dash: C | You can rebind keys in the Settings menu.",
        },
      ],
    },
    {
      id: "stats-system",
      title: "Stats System",
      content: [
        {
          subtitle: "Understanding Stats",
          text: "Every level up gives you stat points to allocate. Key stats include: Destructive Power (red damage scaling), Destructive Energy (blue damage scaling), Health (survivability), Strength (melee damage), Weapon (weapon damage), and Speed (movement).",
        },
        {
          subtitle: "Stat Allocation Tips",
          text: "Health is the safest stat to invest in regardless of build. For Stand-focused builds, prioritize Destructive Power and Destructive Energy. For melee builds, focus on Strength and Weapon. Check your ability damage colors: red scales with Destructive Power, blue with Destructive Energy.",
        },
        {
          subtitle: "Recommended Builds",
          text: "Star Platinum build: 100 Destructive Power, 30 Destructive Energy, 20 Health. Weather Report build: 80 Destructive Energy, 50 Destructive Power, 20 Health. Balanced build: 60 Destructive Power, 60 Destructive Energy, 30 Health.",
        },
      ],
    },
    {
      id: "stands",
      title: "Stands System",
      content: [
        {
          subtitle: "What are Stands?",
          text: "Stands are manifestations of your fighting spirit. There are 17 unique Stands in the game, each with different rarities (Common, Uncommon, Rare, Legendary, Mythical) and unique movesets. Some Stands can evolve into more powerful forms.",
        },
        {
          subtitle: "How to Get Stands",
          text: "Use Stand Arrows (Uncommon rarity item) to randomly obtain a Stand. Stand Arrows can be found from raid bosses, chests, or purchased. The rarity of the Stand you receive is random, with Mythical being the rarest.",
        },
        {
          subtitle: "Stand Evolutions",
          text: "Some Stands can evolve: White Snake → C-Moon → Made In Heaven. Gold Experience → Gold Experience Requiem. Star Platinum → Star Platinum: The World. Evolution requirements vary by Stand.",
        },
      ],
    },
    {
      id: "raids-bosses",
      title: "Raids & Bosses",
      content: [
        {
          subtitle: "Raid Bosses",
          text: "There are 4 main raid bosses: Yoshikage Kira (Bus Stop 1), Chumbo/Jotaro (Bus Stop 2), Muhammad Avdol (Bus Stop 14), and ???/Dio (Bus Stop 15). Raid bosses drop Chests, Stand Arrows, and up to 35 Tokens based on your contribution.",
        },
        {
          subtitle: "Avdol Raid Guide",
          text: "Muhammad Avdol is located at Bus Stop 14. He uses Magician's Red with powerful fire attacks. Bring a group for easier completion. Drops include Rare Chests and Stand Arrows. Recommended level: 35+.",
        },
        {
          subtitle: "Mini Bosses",
          text: "Mini bosses spawn at various Bus Stops (3, 9, 14, and others). They have lower health than raid bosses but still drop valuable loot including Stand Arrows and materials.",
        },
      ],
    },
    {
      id: "sub-abilities",
      title: "Sub Abilities & Specs",
      content: [
        {
          subtitle: "Vampire",
          text: "Become a Vampire by using a Vampire Mask, then travel to the Cathedral in the Graveyard (Bus Stop 18) to begin the 'An Ancient Evil' quest from the Elder Vampire. Complete material collections, PvP wins, and boss fights to unlock full Vampire powers.",
        },
        {
          subtitle: "Night Vampire",
          text: "Night Vampires are rare mobs required for the Hamon quest. They spawn at any normal NPC spawn point but only during night time in-game. Run PvE Mission Board missions during the night for higher spawn chances.",
        },
        {
          subtitle: "Ripple/Hamon",
          text: "To get Ripple (Hamon), take any bus to Bus Station 13, find the bridge with sunflowers, and talk to the Ancient Ghost NPC. Complete the quest requirements including defeating Night Vampires.",
        },
        {
          subtitle: "Cyborg",
          text: "Cyborg sub-ability provides technological enhancements. Check the Trello board for specific unlock requirements and NPC locations.",
        },
      ],
    },
    {
      id: "progression",
      title: "Progression & Leveling",
      content: [
        {
          subtitle: "Leveling Guide",
          text: "Max player level is 50. Complete quests, defeat enemies, and participate in raids to earn EXP. The tutorial gives a 15-minute 1.5x XP boost - use it wisely. Focus on main story quests for efficient leveling.",
        },
        {
          subtitle: "Stand Awakening",
          text: "Reach player level 50 (max) and get your Stand Conjuration to level 100. Go to the Gym (Bus Stop 2), sit on the mat, and choose 'I want to surpass my limits' to unlock Stand Awakening.",
        },
      ],
    },
    {
      id: "skins",
      title: "Skins & Cosmetics",
      content: [
        {
          subtitle: "Stand Skins",
          text: "Skins are cosmetic items that change your Stand's appearance without affecting stats. Skins can be obtained through Stand Arrows (small chance), Skin Essences, or special events. Each Stand has multiple skin variants.",
        },
        {
          subtitle: "How to Get Skins",
          text: "Use Stand Arrows for a small chance of getting a Stand with a skin. Use Skin Reroll Essence to reroll your current Stand's skin. Purchase skins from the shop or obtain them through events.",
        },
      ],
    },
  ],

  tips: {
    title: "Pro Tips",
    items: [
      "Complete the tutorial for a 15-minute 1.5x XP boost",
      "Health is the safest stat to invest in regardless of build",
      "Check ability damage colors: red = Destructive Power, blue = Destructive Energy",
      "Join Discord for trading, codes, and community events",
      "Farm Avdol raid at Bus Stop 14 for Stand Arrows",
      "Night Vampires spawn more frequently during night time",
      "Reach level 50 and Stand Conjuration 100 for Stand Awakening",
      "Use the bus system to fast travel between locations",
      "Save Stat Reset Essences for when you want to try new builds",
      "Check the official Trello for detailed game information",
    ] as string[],
  },

  seo: {
    title: "Bizarre Lineage Wiki - Complete Game Guide & Mechanics",
    description: "Complete Bizarre Lineage wiki covering game mechanics, stats system, Stands, raids, bosses, sub-abilities, progression, and more. Everything you need to master the game.",
    keywords: [
      "Bizarre Lineage wiki",
      "Bizarre Lineage guide",
      "game mechanics",
      "stats guide",
      "how to play",
      "progression guide",
      "raid guide",
      "avdol raid bizarre lineage",
      "night vampire bizarre lineage",
      "Stand Awakening",
      "sub abilities",
    ] as string[],
  },
} as const;
