# Bizarre Lineage Game Resource Website

🎮 **Official Website**: [Bizarre Lineage](https://bizarrelineage.xyz/)

📖 **中文版本**: [README.md](./README.md)

This is the resource website project for Bizarre Lineage game, built with Next.js. The website provides comprehensive game guides, codes, Stand information, Tier Lists and more to help players master this JoJo-inspired Roblox RPG.

## Project Overview

Bizarre Lineage is a JoJo-inspired Roblox RPG where players unlock powerful Stands, battle bosses in Morioh, and dominate PvP combat. This website provides complete game guides, codes, wiki and other resources for players.

### Main Content Sections

1. **[Wiki](https://bizarrelineage.xyz/wiki)** - Game encyclopedia
2. **[Codes](https://bizarrelineage.xyz/codes)** - Latest game codes
3. **[Tier List](https://bizarrelineage.xyz/tier-list)** - Stand power rankings
4. **[Stands](https://bizarrelineage.xyz/stands)** - Detailed Stand information
5. **[Raids](https://bizarrelineage.xyz/raids)** - Raid Boss strategies
6. **[Stats](https://bizarrelineage.xyz/stats)** - Stats system guide
7. **[Skins](https://bizarrelineage.xyz/skins)** - Skin collection
8. **[Links](https://bizarrelineage.xyz/links)** - Official links hub
9. **[Changelog](https://bizarrelineage.xyz/changelog)** - Update logs

### Main Features

- **Complete Game Guides** - Detailed strategies covering all aspects of the game
- **Real-time Updated Codes** - Latest available redemption codes
- **Stand Database** - Detailed information and acquisition methods for all Stands
- **Tier List Rankings** - Stand power rankings based on current meta
- **Raid Boss Strategies** - Detailed boss battle tactics
- **Search Engine Optimization (SEO)** - Complete meta tags and structured data
- **Responsive Design** - Supports various devices and screen sizes
- **Community Resource Integration** - Official Discord, Trello and other links

## Tech Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI (Complete accessibility component library)
- **Deployment**: Vercel
- **SEO**: next-sitemap 4.2.3
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Project Structure

```
/
├── app/                    # Next.js App Directory (App Router)
│   ├── wiki/               # Wiki encyclopedia page
│   ├── codes/              # Game codes page
│   ├── tier-list/          # Tier List page
│   ├── stands/             # Stand information page
│   ├── raids/              # Raid strategies page
│   ├── stats/              # Stats system page
│   ├── skins/              # Skins page
│   ├── links/              # Links hub page
│   ├── changelog/          # Changelog page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy-policy/     # Privacy policy page
│   ├── terms-of-service/   # Terms of service page
│   ├── layout.tsx          # Global layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── home/               # Home components (FAQ, Comments)
│   └── ui/                 # Base UI components (based on Radix UI)
├── content/                # Content configuration files
│   ├── site.ts             # Site basic configuration
│   ├── navigation.ts       # Navigation configuration
│   └── pages/              # Page content configurations
├── config/                 # Configuration files
│   ├── layout.ts           # Layout configuration
│   └── theme.ts            # Theme configuration
├── data/                   # Data files
│   ├── stands.ts           # Stand data
│   ├── raids.ts            # Raid data
│   └── codes.ts            # Code data
├── hooks/                  # Custom React Hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
│   ├── logo.png            # Website logo
│   └── favicon.ico         # Website icon
└── types/                  # TypeScript type definitions
├── components/             # React component library
│   ├── game-section/       # Game display components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── templates/          # Page templates (GamePageTemplate)
│   ├── home/               # Homepage components
│   ├── features/           # Game features components
│   ├── what-is/            # Game introduction components
│   ├── how-to-play/        # Gameplay instruction components
│   ├── faq/                # FAQ components
│   ├── other-games/        # Other games recommendation components
│   ├── rating/             # Rating components
│   └── ui/                 # Basic UI components (based on Radix UI)
├── config/                 # Configuration files
│   ├── site.ts/js          # Site basic configuration
│   ├── content.ts          # Game content configuration
│   ├── layout.ts           # Layout configuration
│   └── theme.ts            # Theme configuration
├── hooks/                  # Custom React Hooks
├── lib/                    # Utility function library
├── public/                 # Static assets
│   ├── assets/             # Images and other resources
│   │   ├── street-wheelie/ # Street Wheelie related images
│   │   ├── stickman-bike/  # Stickman Bike related images
│   │   ├── wheelie-life/   # Wheelie Life related images
│   │   └── img/            # Site common images
│   ├── game/               # Game files directory
│   │   ├── soFlowheelielife/  # SoFlo Wheelie Life game files
│   │   ├── streetWheelie/     # Street Wheelie game files
│   │   ├── stickmanbike/      # Stickman Bike game files
│   │   └── wheelielife/       # Wheelie Life game files
│   ├── llms.txt            # AI crawler dedicated content summary
│   ├── llms-full.txt       # AI crawler dedicated full content
│   ├── robots.txt          # Search engine crawler rules
│   └── sitemap.xml         # Site map
├── next.config.js          # Next.js configuration (includes game route rewrites)
├── next-sitemap.config.js  # Sitemap and robots.txt configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── components.json         # shadcn/ui component configuration
```

## Development Guide

### Environment Requirements

- Node.js 16.x or higher
- npm or yarn

### Environment Variables Setup

Create a `.env.local` file in the project root:

```bash
# Google Analytics Configuration
# Replace with your own Google Analytics ID
# How to get: https://analytics.google.com/ → Admin → Data Streams → Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other optional configurations
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Note**: 
- The `.env.local` file is included in `.gitignore` and will not be committed to the repository
- Please replace `G-XXXXXXXXXX` with your own Google Analytics Measurement ID

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Local Development

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to view the website.

### Build Project

```bash
npm run build
# or
yarn build
```

### Generate Sitemap

```bash
npm run sitemap
# or
yarn sitemap
```

### Clean Sitemap

```bash
npm run clean-sitemap
```

## Game Embed Guide

The website embeds games through iframe, each game has corresponding embed routes:

- `/soflo-wheelie-life.embed` → `/game/soFlowheelielife/index.html`
- `/street-wheelie.embed` → `/game/streetWheelie/index.html`
- `/stickman-bike.embed` → `/game/stickmanbike/index.html`
- `/wheelie-life.embed` → `/game/wheelielife/index.html`

For detailed game localization deployment guide, refer to `IFRAME_DOWNLOAD_README.md`.

## Adding New Games Guide

To add new games, follow these steps:

1. **Add Game Files**: Place game files in `public/game/[game-name]/` directory
2. **Create Game Page**: Create page directory and files in `app/[game-name]/`
3. **Configure Game Data**: Add game information in `app/games/game-data.ts`
4. **Add Game Content**: Create game's `content.ts` configuration file
5. **Configure Route Rewrites**: Add embed routes in `next.config.js`
6. **Add Game Assets**: Add related images in `public/assets/[game-name]/`

### Related Links and Resources

#### Official Pages
- 🏠 **Homepage**: [Bizarre Lineage](https://bizarrelineage.xyz/)
- 📞 **Contact Us**: [Contact Us](https://bizarrelineage.xyz/contact)
- ℹ️ **About Us**: [About Us](https://bizarrelineage.xyz/about)
- 🔒 **Privacy Policy**: [Privacy Policy](https://bizarrelineage.xyz/privacy-policy)
- 📋 **Terms of Service**: [Terms of Service](https://bizarrelineage.xyz/terms-of-service)

#### External Links (Footer Quick Links)
- 📝 **Telegram**: [Telegram Channel](https://t.me/isaac_free_games)
- 📅 **CAL**: [Vincent AI Calendar Booking](https://cal.com/isaac-mingyu)
- 💰 **Patreon**: [Patreon Support Page](https://www.patreon.com/posts/144957222?pr=true)
- 🔗 **Linktr**: [Linktr Link Tree](https://linktr.ee/Isaac_mingyu)
- 📌 **Pinterest**: [Pinterest Image Sharing](https://pin.it/1tTYsCdmW)
- 💻 **GitHub**: [SoFlo Wheelie Life GitHub Repository](https://github.com/oumingyu-224/SoFlo-Wheelie-Life)

## AI Crawler Optimization

This project has special optimization for AI crawlers:

1. **Dedicated Content Files**: Provides `llms.txt` and `llms-full.txt` files containing structured game information
2. **robots.txt Configuration**: Guides AI crawlers to access dedicated files while restricting access to other parts of the website
3. **Supported AI Crawlers**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot, etc.

For detailed configuration, see `next-sitemap.config.js`.

## OG Image Generation

For social media preview image generation guide, refer to `OG_IMAGE_README.md`.

## Deployment

The project is configured for automatic deployment through Vercel. Changes pushed to the main branch will automatically deploy to production.

### Vercel Environment Variables Setup

Configure the following environment variables in Vercel Console:

1. Login to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

```
Name: NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX
Environment: Production, Preview, Development
```

**Or using Vercel CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Set environment variable
vercel env add NEXT_PUBLIC_GA_ID
# Enter value: G-XXXXXXXXXX
# Select environments: Production, Preview, Development
```

### Automatic Deployment

- **Production**: Push to `main` branch triggers automatic deployment
- **Preview**: Creating Pull Requests automatically generates preview links
- **Development**: Use `vercel dev` for local development

## License

© 2025 Bizarre Lineage. All rights reserved.