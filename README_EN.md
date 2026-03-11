# SoFlo Wheelie Life Game Website

🎮 **Official Website**: [SoFlo Wheelie Life Official Website](https://www.soflowheelielife.dev/)

📖 **中文版本**: [README.md](./README.md)

This is the official website project for SoFlo Wheelie Life game, built with Next.js. The website provides multiple game embeds, game information display, and optimization for search engines and AI crawlers.

## Project Overview

SoFlo Wheelie Life is a physics-based 3D motorcycle stunt game that runs directly in browsers without downloads. This project is the official website for the game, now expanded into a multi-game platform offering multiple different types of browser games.

## About the Game

**SoFlo Wheelie Life** is an independently developed free online motorcycle stunt game featuring explosive physics-based gameplay. Unlike traditional racing games that focus on speed, SoFlo Wheelie Life emphasizes balance and stunt mechanics, creating a unique and thrilling gaming experience.

### Game Highlights

🎮 **Physics-Based Gameplay**: Master authentic motorcycle control with a groundbreaking physics engine designed for realistic environmental interactions and precise balance mechanics.

🌍 **Urban Playground**: Perform stunts in the vibrant streets of South Florida with varied terrains and challenging obstacles.

⚡ **Skill-Based Progression**: No paid advantages, just pure skill-based gameplay. Perfect your timing for perfect wheelies and stylish landings.

🎯 **Easy to Learn, Hard to Master**: Intuitive controls with mouse steering, but deep mechanics reward advanced techniques and strategic thinking.

### Why Play SoFlo Wheelie Life?

- **Free & Unblocked**: Play instantly in your browser without downloads
- **Cross-Platform**: Compatible with Windows, Mac, Linux, and mobile devices
- **Unique Gameplay**: Experience physics-based motorcycle stunts like no other game
- **Regular Updates**: Continuously improved with new features and optimizations

The game delivers exciting stunt action, where balance and timing matter more than speed. Whether you're a newcomer learning the basics or a veteran mastering advanced techniques, SoFlo Wheelie Life offers consistently engaging gameplay that keeps you coming back for more.

### Supported Games List

1. **[SoFlo Wheelie Life](https://www.soflowheelielife.dev/)** - Main game, physics-based 3D motorcycle stunt game
2. **[Street Wheelie](https://www.soflowheelielife.dev/street-wheelie)** - Street motorcycle stunt game
3. **[Stickman Bike](https://www.soflowheelielife.dev/stickman-bike)** - Stickman bike game
4. **[Wheelie Life](https://www.soflowheelielife.dev/wheelie-life)** - Motorcycle wheelie game

### Main Features

- **Multi-Game Embed & Display** - Supports multiple different types of browser games
- **Unified Game Page Template** - Each game has complete introduction, features, gameplay and FAQ
- **Game Features, Gameplay & FAQ Introduction** - Detailed game guides and common questions
- **Search Engine Optimization (SEO)** - Complete meta tags and structured data
- **AI Crawler Special Content Optimization** - Dedicated llms.txt files
- **Responsive Design** - Supports various devices and screen sizes
- **Game Recommendation System** - Recommends other games on each game page

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
│   ├── street-wheelie/     # Street Wheelie game page
│   ├── stickman-bike/      # Stickman Bike game page
│   ├── wheelie-life/       # Wheelie Life game page
│   ├── games/              # Game list and data configuration
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy-policy/     # Privacy policy page
│   ├── terms-of-service/   # Terms of service page
│   ├── layout.tsx          # Global layout
│   ├── page.tsx            # Homepage (SoFlo Wheelie Life)
│   ├── schema.ts           # Structured data configuration
│   └── globals.css         # Global styles
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
- 🏠 **Homepage**: [SoFlo Wheelie Life Official Website](https://www.soflowheelielife.dev/)
- 📞 **Contact Us**: [Contact Us](https://www.soflowheelielife.dev/contact)
- ℹ️ **About Us**: [About Us](https://www.soflowheelielife.dev/about)
- 🔒 **Privacy Policy**: [Privacy Policy](https://www.soflowheelielife.dev/privacy-policy)
- 📋 **Terms of Service**: [Terms of Service](https://www.soflowheelielife.dev/terms-of-service)

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

© 2025 SoFlo Wheelie Life. All rights reserved.