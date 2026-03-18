/**
 * 首页内容配置
 * Home Page Content
 */

export const homeContent = {
  hero: {
    title: "Bizarre Lineage",
    subtitle: "Complete Guide, Codes & Resources",
    description: "Master Bizarre Lineage, the JoJo-inspired Roblox RPG where you unlock powerful Stands, explore Morioh, battle raid bosses, and dominate PvP combat. Get the latest codes, tier lists, and complete guides!",
    cta: {
      primary: {
        text: "Play on Roblox",
        href: "https://www.roblox.com/games/14890802310/Bizarre-Lineage",
      },
      secondary: {
        text: "Join Discord",
        href: "https://discord.gg/bizarrelineage",
      },
    },
  },

  features: [
    {
      title: "Powerful Stands",
      description: "Unlock and master 17 unique Stands inspired by JoJo's Bizarre Adventure. Each Stand has unique abilities and playstyles.",
      icon: "shield",
    },
    {
      title: "Epic Raids & Bosses",
      description: "Challenge raid bosses like Yoshikage Kira, Dio, and Muhammad Avdol. Earn rare drops and level up your Stand.",
      icon: "trophy",
    },
    {
      title: "Active Community",
      description: "Join thousands of players in our Discord community for tips, trading, and events. Check the official Trello for game info.",
      icon: "users",
    },
    {
      title: "Regular Updates",
      description: "New Stands, skins, raids, and features added regularly. Check our changelog for the latest updates.",
      icon: "refresh",
    },
  ],

  quickLinks: [
    {
      title: "Latest Codes",
      description: "Get free Stand Arrows, essences, and rewards",
      href: "/codes",
      icon: "gift",
    },
    {
      title: "Stand Tier List",
      description: "Best Stands ranked for PvP and PvE combat",
      href: "/tier-list",
      icon: "package",
    },
    {
      title: "All Stands",
      description: "Complete Stand database with stats and abilities",
      href: "/stands",
      icon: "leaf",
    },
    {
      title: "Game Guides",
      description: "Learn game mechanics, stats, and progression",
      href: "/wiki",
      icon: "skull",
    },
  ],

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is Bizarre Lineage?",
        answer: "Bizarre Lineage is a JoJo's Bizarre Adventure-inspired Roblox RPG set in Morioh. You unlock Stands using Stand Arrows, complete quests, battle raid bosses, and engage in PvP combat. The game features 17 unique Stands, sub-abilities, fighting styles, and Stand evolutions.",
      },
      {
        question: "How do I get free codes?",
        answer: "Check our Codes page regularly for the latest active promo codes. Codes give Stand Arrows, Stat Point Essences, and Rare Chests. Join our Discord server for instant notifications when new codes drop! The developer releases codes at milestone achievements.",
      },
      {
        question: "What are the best Stands to use?",
        answer: "White Snake, Made In Heaven, and C-Moon are currently the strongest Stands in the meta. White Snake excels in both PvP and PvE. Weather Report is the best early-game Stand. Check our Stand Tier List for complete rankings and build guides.",
      },
      {
        question: "How do I get Stands?",
        answer: "Use Stand Arrows to randomly obtain Stands. Stand Arrows are Uncommon rarity items that can be found from bosses, chests, or purchased. Each Stand has different rarities: Common, Uncommon, Rare, Legendary, and Mythical.",
      },
      {
        question: "Where is the Trello board?",
        answer: "The official Bizarre Lineage Trello board contains detailed information about Stands, regions, progression, game mechanics, sub-abilities, items, and more. Check our Links page for the official Trello and Discord links.",
      },
      {
        question: "How do stats work in Bizarre Lineage?",
        answer: "Every level up gives stat points to allocate. Key stats include Destructive Power (red damage), Destructive Energy (blue damage), Health, Strength, and Weapon. Red numbers scale with Destructive Power, blue with Destructive Energy. Check our Wiki for detailed stat guides.",
      },
    ],
  },

  comments: {
    title: "Community Reviews",
    description: "See what players are saying about Bizarre Lineage",
    enabled: true,
  },

  seo: {
    title: "Bizarre Lineage - Complete Guide, Codes & Tier List",
    description: "Master Bizarre Lineage, the JoJo-inspired Roblox RPG where you unlock powerful Stands, explore Morioh, battle raid bosses, and dominate PvP combat. Get the latest codes, tier lists, and complete guides!",
    keywords: [
      "Bizarre Lineage",
      "Bizarre Lineage game",
      "Bizarre Lineage Roblox",
      "Bizarre Lineage codes",
      "Bizarre Lineage tier list",
      "Bizarre Lineage stands",
      "Bizarre Lineage guide",
      "Bizarre Lineage trello",
      "Bizarre Lineage discord",
      "JoJo Roblox game",
      "Roblox Stand game",
      "Bizarre Lineage tips",
    ] as string[],
  },
} as const;
