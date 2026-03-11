# 如何将 Crazy Cattle 3D 项目改造成其他游戏项目

本文档提供了详细的步骤说明，帮助您将现有的 Crazy Cattle 3D 网站项目改造为适用于其他游戏的网站项目。

## 1. 项目概览

Crazy Cattle 3D 项目是一个基于 Next.js 的多游戏网站模板，具有以下特点：

- 支持多个游戏的嵌入和展示
- 统一的游戏页面模板系统
- SEO 优化和 AI 爬虫优化
- 响应式设计
- 易于扩展和维护

## 2. 基础配置修改

### 2.1 站点基本信息配置

修改 `config/site.ts` 文件中的站点基本信息：

```typescript
export const siteConfig = {
  name: "你的游戏名称",
  description: "你的游戏描述",
  domain: "你的域名.com",
  url: "https://你的域名.com",
  email: "support@你的域名.com",
  author: "你的游戏名称",
  social: {
    twitter: "你的Twitter账号",
    facebook: "你的Facebook账号",
  },
  metadata: {
    keywords: ["关键词1", "关键词2", "关键词3"],
    themeColor: "#你的主题颜色",
    manifestPath: "/assets/img/site.webmanifest",
  },
  images: {
    icon: {
      favicon: "/assets/img/favicon.ico",
      favicon16: "/assets/img/favicon-16x16.png",
      favicon32: "/assets/img/favicon-32x32.png",
      apple: "/assets/img/apple-touch-icon.png",
    },
    og: "/assets/img/你的游戏-og-image.png",
  },
};
```

### 2.2 内容配置

修改 `config/content.ts` 文件中的内容配置，包括头部、导航、页脚等信息。

### 2.3 布局配置

修改 `config/layout.ts` 文件中的布局配置，如 Logo 路径等。

## 3. 添加新游戏

### 3.1 复制现有游戏目录

1. 在 `app/` 目录下找到一个现有的游戏目录（如 `crazy-chicken-3d`）
2. 复制整个目录并重命名为你的游戏目录名（使用短横线命名法，如 `your-game-name`）

### 3.2 修改游戏页面文件

编辑 `app/[your-game-name]/page.tsx` 文件：

1. 修改导入的内容变量名
2. 更新 [metadata](file:///c:/0%E6%B8%B8%E6%88%8F%E7%AB%99/crazycattle3d/app/schema.ts#L55-L60) 中的标题和描述
3. 更新 gameConfig 中的相关信息
4. 修改组件函数名

### 3.3 修改内容配置文件

编辑 `app/[your-game-name]/content.ts` 文件：

1. 修改导出变量名（使用驼峰命名法）
2. 更新游戏区域配置
3. 修改特性、介绍、玩法和 FAQ 等部分内容
4. 确保图片路径正确

### 3.4 准备图片资源

在 `public/assets/` 目录下创建 `[your-game-name]/` 文件夹，并放入以下图片：

- 游戏 Logo 和宣传图片
- 缩略图 (建议尺寸: 300x200px)
- OG 图片 (建议尺寸: 1200x630px)
- 介绍和玩法说明图片

### 3.5 创建游戏嵌入文件

1. 复制 `public/game/crazy-chicken-3d/` 目录并重命名为 `public/game/[your-game-name]/`
2. 编辑 `public/game/[your-game-name]/index.html` 文件：
   - 更新 `<base href>` 路径
   - 修改 `<title>` 标签内容
   - 更新 iframe 的 `src` 属性（指向实际游戏 URL）
   - 更新 iframe 的 `title` 属性

### 3.6 配置 URL 重写规则

编辑 `next.config.js` 文件，在 `rewrites` 函数中添加新的重写规则：

```javascript
{
  source: '/your-game-name.embed',
  destination: '/game/your-game-name/index.html',
}
```

### 3.7 更新游戏数据源

编辑 `app/games/game-data.ts` 文件，在 games 数组中添加新游戏条目：

```typescript
{
  id: "your-game-name",
  title: "你的游戏名称",
  description: "你的游戏描述",
  url: "/your-game-name",
  image: "/assets/your-game-name/thumbnail.jpg",
}
```

## 4. 更新页脚游戏列表

编辑 `config/content.ts` 文件，在 `footer.games.links` 数组中添加新游戏链接。

## 5. AI 爬虫优化

### 5.1 更新 AI 爬虫文件

修改以下文件以添加新游戏的信息：

- `public/llms.txt`
- `public/llms-full.txt`

### 5.2 更新 Sitemap 配置

如有需要，更新 `next-sitemap.config.js` 文件。

## 6. 网站清单和图标

### 6.1 更新网站清单

修改 `public/assets/img/site.webmanifest` 文件，更新网站名称、图标等信息。

### 6.2 准备网站图标

替换 `public/assets/img/` 目录下的以下图标文件：

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

## 7. 社交媒体预览图片

使用 `OG_IMAGE_README.md` 中的指南生成社交媒体预览图片，并将其放置在 `public/assets/img/` 目录下。

## 8. 更新文档和外部链接

### 8.1 更新 README 文件

更新 `README.md` 和 `README_EN.md` 文件中的游戏列表。

### 8.2 更新外部平台链接

手动更新以下外部平台的游戏链接列表：

- Evernote 笔记
- Substack 博客
- Patreon 页面
- Pinterest
- Linktr 链接树
- Creem 创意平台
- CAL 预约页面
- Github 项目

## 9. 测试验证

启动开发服务器进行测试：

```bash
npm run dev
```

检查以下项目：

1. 游戏页面能否正常访问
2. 游戏能否正确加载
3. 所有文本内容显示正确
4. 图片资源加载正常
5. 页脚和其他游戏区域的链接正确

## 10. 部署

推送到主分支，Vercel 会自动部署。确保在 Vercel 控制台中配置了必要的环境变量。

## 注意事项

1. **文本内容**：所有面向用户的文本内容应该清晰准确
2. **图片优化**：确保图片经过 Web 优化，控制文件大小
3. **命名规范**：
   - 文件夹和 URL 使用短横线分隔（如 `crazy-chicken-3d`）
   - 变量名使用驼峰式命名
   - 组件函数名使用 PascalCase
4. **路径一致性**：确保所有文件路径引用正确且一致
5. **重启服务**：修改 `next.config.js` 后需要重启开发服务器

## 最佳实践

1. **保持一致性**：使用现有游戏作为模板，保持网站风格统一
2. **优化图片**：压缩图片以提高页面加载速度
3. **测试响应式**：在不同设备上测试显示效果
4. **SEO 优化**：精心编写页面标题和描述
5. **内容质量**：提供有价值的游戏介绍和玩法说明