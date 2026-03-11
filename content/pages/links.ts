/**
 * Links 页面内容配置
 * Links Page Content
 */

export const linksContent = {
  title: "Bizarre Lineage Links",
  description: "Official links and resources for Bizarre Lineage community including Trello, Discord, and wiki.",

  officialLinks: [
    {
      title: "Play on Roblox",
      description: "Official Roblox game page",
      href: "https://www.roblox.com/games/14890802310/Bizarre-Lineage",
      icon: "gamepad",
    },
    {
      title: "Official Discord",
      description: "Join the community for codes, trading, and events",
      href: "https://discord.gg/bizarrelineage",
      icon: "message-circle",
    },
    {
      title: "Official Trello",
      description: "Detailed game information, mechanics, and guides",
      href: "https://trello.com/b/bizarrelineage",
      icon: "book",
    },
    {
      title: "Developer Discord",
      description: "Connect with developers and report bugs",
      href: "https://discord.com/invite/jtkxMvhCau",
      icon: "code",
    },
    {
      title: "Roblox Community",
      description: "Official Roblox community group",
      href: "https://www.roblox.com/communities/bizarre-lineage",
      icon: "users",
    },
  ],

  resources: [
    {
      title: "Trello Board",
      description: "The official Bizarre Lineage Trello board is the primary manual for the game. It contains detailed information organized into columns: Regions, Stands, Progression, Game Mechanics, Sub Abilities, Fighting Styles, Evolutions, Items, Skins, Accessories, Raids, and more.",
    },
    {
      title: "Discord Server",
      description: "The Discord server is the main hub for the Bizarre Lineage community. Get instant code notifications, find trading partners, participate in events, ask questions, and connect with other players. The server has dedicated channels for trading, guides, and support.",
    },
    {
      title: "Wiki Resources",
      description: "Multiple community wikis provide detailed guides on Stands, stats, bosses, items, and progression. Check our Wiki page for comprehensive game information.",
    },
  ],

  seo: {
    title: "Bizarre Lineage Links - Official Trello, Discord & Resources",
    description: "Official links for Bizarre Lineage including Trello board, Discord server, Roblox game, and community resources. Everything you need to master the game.",
    keywords: [
      "Bizarre Lineage trello",
      "trello bizarre lineage",
      "Bizarre Lineage discord",
      "Bizarre Lineage wiki",
      "official links",
      "Discord server",
      "Trello board",
      "Roblox game",
      "community resources",
    ] as string[],
  },
} as const;
