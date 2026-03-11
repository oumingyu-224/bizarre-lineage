# Bizarre Lineage 游戏资源网站

🎮 **官方网站**: [Bizarre Lineage](https://bizarrelineage.xyz/)

📖 **English Version**: [README_EN.md](./README_EN.md)

这是 Bizarre Lineage 游戏的资源网站项目，基于 Next.js 构建。该网站提供全面的游戏指南、代码、Stand 信息、Tier List 等内容，帮助玩家掌握这款 JoJo 风格的 Roblox RPG 游戏。

## 项目概述

Bizarre Lineage 是一款受 JoJo 启发的 Roblox RPG 游戏，玩家可以解锁强大的 Stand、在 Morioh 挑战 Boss、参与 PvP 战斗。本网站为玩家提供完整的游戏攻略、代码、Wiki 等资源。

### 主要内容板块

1. **[Wiki](https://bizarrelineage.xyz/wiki)** - 游戏百科全书
2. **[Codes](https://bizarrelineage.xyz/codes)** - 最新游戏代码
3. **[Tier List](https://bizarrelineage.xyz/tier-list)** - Stand 强度排行
4. **[Stands](https://bizarrelineage.xyz/stands)** - Stand 详细信息
5. **[Raids](https://bizarrelineage.xyz/raids)** - Raid Boss 攻略
6. **[Stats](https://bizarrelineage.xyz/stats)** - 属性系统指南
7. **[Skins](https://bizarrelineage.xyz/skins)** - 皮肤收藏
8. **[Links](https://bizarrelineage.xyz/links)** - 官方链接汇总
9. **[Changelog](https://bizarrelineage.xyz/changelog)** - 更新日志

### 主要功能

- **完整的游戏指南** - 涵盖游戏各个方面的详细攻略
- **实时更新的代码** - 最新可用的游戏兑换码
- **Stand 数据库** - 所有 Stand 的详细信息和获取方法
- **Tier List 排行** - 基于当前 Meta 的 Stand 强度排名
- **Raid Boss 攻略** - 详细的 Boss 战斗策略
- **针对搜索引擎优化 (SEO)** - 完整的 meta 标签和结构化数据
- **响应式设计** - 支持各种设备和屏幕尺寸
- **社区资源整合** - Discord、Trello 等官方链接

## 技术栈

- **框架**: Next.js 13.5.1 (App Router)
- **语言**: TypeScript 5.2.2
- **样式**: Tailwind CSS 3.3.3
- **UI组件**: Radix UI (完整无障碍组件库)
- **部署**: Vercel
- **SEO**: next-sitemap 4.2.3
- **表单**: React Hook Form + Zod
- **图标**: Lucide React

## 项目结构

```
/
├── app/                    # Next.js 应用目录 (App Router)
│   ├── wiki/               # Wiki 百科页面
│   ├── codes/              # 游戏代码页面
│   ├── tier-list/          # Tier List 页面
│   ├── stands/             # Stand 信息页面
│   ├── raids/              # Raid 攻略页面
│   ├── stats/              # 属性系统页面
│   ├── skins/              # 皮肤页面
│   ├── links/              # 链接汇总页面
│   ├── changelog/          # 更新日志页面
│   ├── about/              # 关于页面
│   ├── contact/            # 联系页面
│   ├── privacy-policy/     # 隐私政策页面
│   ├── terms-of-service/   # 服务条款页面
│   ├── layout.tsx          # 全局布局
│   ├── page.tsx            # 首页
│   └── globals.css         # 全局样式
├── components/             # React 组件库
│   ├── layout/             # 布局组件 (Header, Footer)
│   ├── home/               # 首页组件 (FAQ, Comments)
│   └── ui/                 # 基础UI组件 (基于Radix UI)
├── content/                # 内容配置文件
│   ├── site.ts             # 站点基本配置
│   ├── navigation.ts       # 导航配置
│   └── pages/              # 各页面内容配置
├── config/                 # 配置文件
│   ├── layout.ts           # 布局配置
│   └── theme.ts            # 主题配置
├── data/                   # 数据文件
│   ├── stands.ts           # Stand 数据
│   ├── raids.ts            # Raid 数据
│   └── codes.ts            # 代码数据
├── hooks/                  # 自定义React Hooks
├── lib/                    # 工具函数库
├── public/                 # 静态资源
│   ├── logo.png            # 网站Logo
│   └── favicon.ico         # 网站图标
├── types/                  # TypeScript 类型定义
├── next.config.js          # Next.js 配置
├── next-sitemap.config.js  # Sitemap 和 robots.txt 配置
├── tailwind.config.ts      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
└── components.json         # shadcn/ui 组件配置
```

## 开发指南

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn

### 环境变量配置

在项目根目录创建 `.env.local` 文件：

```bash
# Google Analytics Configuration
# 请替换为您自己的 Google Analytics ID
# 获取方式: https://analytics.google.com/ → 管理 → 数据流 → 衡量ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 其他可选配置
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**注意**: 
- `.env.local` 文件已在 `.gitignore` 中，不会被提交到代码库
- 请将 `G-XXXXXXXXXX` 替换为您自己的 Google Analytics 衡量ID

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 本地开发

```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000 查看网站。

### 构建项目

```bash
npm run build
# 或
yarn build
```

### 生成 Sitemap

```bash
npm run sitemap
# 或
yarn sitemap
```

### 清理 Sitemap

```bash
npm run clean-sitemap
```

## 游戏嵌入指南

网站通过 iframe 嵌入游戏，每个游戏都有对应的嵌入路由：

- `/soflo-wheelie-life.embed` → `/game/soFlowheelielife/index.html`
- `/street-wheelie.embed` → `/game/streetWheelie/index.html`
- `/stickman-bike.embed` → `/game/stickmanbike/index.html`
- `/wheelie-life.embed` → `/game/wheelielife/index.html`

详细的游戏本地化部署指南可参考 `IFRAME_DOWNLOAD_README.md`。

## 添加新游戏指南

要添加新游戏，需要以下步骤：

1. **添加游戏文件**: 将游戏文件放入 `public/game/[游戏名]/` 目录
2. **创建游戏页面**: 在 `app/[游戏名]/` 创建页面目录和文件
3. **配置游戏数据**: 在 `app/games/game-data.ts` 中添加游戏信息
4. **添加游戏内容**: 创建游戏的 `content.ts` 配置文件
5. **配置路由重写**: 在 `next.config.js` 中添加嵌入路由
6. **添加游戏资源**: 在 `public/assets/[游戏名]/` 添加相关图片

### 相关链接和资源

#### 官方页面
- 🏠 **主页**: [Bizarre Lineage](https://bizarrelineage.xyz/)
- 📞 **联系我们**: [联系我们](https://bizarrelineage.xyz/contact)
- ℹ️ **关于我们**: [关于我们](https://bizarrelineage.xyz/about)
- 🔒 **隐私政策**: [隐私政策](https://bizarrelineage.xyz/privacy-policy)
- 📋 **服务条款**: [服务条款](https://bizarrelineage.xyz/terms-of-service)

#### 外部链接 (Footer Quick Links)
- 📝 **Telegram**: [Telegram 频道](https://t.me/isaac_free_games)
- 📅 **CAL**: [Vincent AI 日历预约](https://cal.com/isaac-mingyu)
- 💰 **Patreon**: [Patreon 支持页面](https://www.patreon.com/posts/144957222?pr=true)
- 🔗 **Linktr**: [Linktr 链接树](https://linktr.ee/Isaac_mingyu)
- 📌 **Pinterest**: [Pinterest 图片分享](https://pin.it/1tTYsCdmW)
- 💻 **GitHub**: [SoFlo Wheelie Life GitHub 仓库](https://github.com/oumingyu-224/SoFlo-Wheelie-Life)

## AI 爬虫优化

本项目针对 AI 爬虫进行了特殊优化：

1. **专用内容文件**: 提供了 `llms.txt` 和 `llms-full.txt` 文件，包含结构化的游戏信息
2. **robots.txt 配置**: 引导 AI 爬虫访问专用文件，限制对网站其他部分的访问
3. **支持的AI爬虫**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot 等

详细配置可查看 `next-sitemap.config.js`。

## OG 图片生成

社交媒体预览图片生成指南可参考 `OG_IMAGE_README.md`。

## 部署

项目配置为通过 Vercel 自动部署。推送到主分支的更改将自动部署到生产环境。

### Vercel 环境变量配置

在 Vercel 控制台中配置以下环境变量：

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择您的项目
3. 进入 **Settings** → **Environment Variables**
4. 添加以下变量：

```
Name: NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX
Environment: Production, Preview, Development
```

**或者使用 Vercel CLI：**

```bash
# 安装 Vercel CLI
npm i -g vercel

# 设置环境变量
vercel env add NEXT_PUBLIC_GA_ID
# 输入值: G-XXXXXXXXXX
# 选择环境: Production, Preview, Development
```

### 自动部署

- **生产环境**: 推送到 `main` 分支自动部署
- **预览环境**: 创建 Pull Request 自动生成预览链接
- **开发环境**: 使用 `vercel dev` 本地开发

## 许可证

© 2025 Bizarre Lineage. 保留所有权利。