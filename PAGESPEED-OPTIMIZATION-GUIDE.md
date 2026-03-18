# PageSpeed优化指南

## 常见PageSpeed问题及解决方案

### 1. 性能指标 (Performance)

#### LCP (Largest Contentful Paint) - 最大内容绘制
**目标**: < 2.5秒

**常见问题**:
- 图片未优化
- 服务器响应慢
- 渲染阻塞资源

**优化方案**:
```typescript
// next.config.js - 已配置图片优化
images: { unoptimized: true }

// 建议改为:
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

#### FID (First Input Delay) - 首次输入延迟
**目标**: < 100ms

**优化方案**:
- 减少JavaScript执行时间
- 代码分割
- 移除未使用的代码

#### CLS (Cumulative Layout Shift) - 累积布局偏移
**目标**: < 0.1

**优化方案**:
- 为图片和视频设置尺寸
- 避免在现有内容上方插入内容
- 使用transform动画而非改变布局的属性

### 2. 图片优化

#### 当前问题
- 使用PNG/JPG格式
- 未设置明确的width/height
- 未使用懒加载

#### 优化方案
```typescript
// 使用Next.js Image组件
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="Bizarre Lineage Logo"
  width={200}
  height={200}
  priority // 首屏图片
  loading="lazy" // 非首屏图片
/>
```

### 3. JavaScript优化

#### 减少未使用的JavaScript
```json
// package.json - 检查依赖
{
  "dependencies": {
    // 移除未使用的包
  }
}
```

#### 代码分割
```typescript
// 动态导入
const Comments = dynamic(() => import('@/components/home/Comments'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
```

### 4. CSS优化

#### 移除未使用的CSS
```bash
# 使用PurgeCSS
npm install @fullhuman/postcss-purgecss --save-dev
```

#### 关键CSS内联
```typescript
// app/layout.tsx
<style dangerouslySetInnerHTML={{
  __html: criticalCSS
}} />
```

### 5. 字体优化

#### 当前配置
```typescript
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

#### 优化建议
```typescript
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // 字体交换策略
  preload: true,
  fallback: ['system-ui', 'arial']
});
```

### 6. 第三方脚本优化

#### Google Analytics优化
```typescript
// 当前: strategy="afterInteractive"
// 建议: 延迟加载

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
  strategy="lazyOnload" // 改为lazyOnload
/>
```

### 7. 服务器响应时间

#### 优化建议
- 使用CDN (Vercel/Cloudflare)
- 启用HTTP/2
- 启用Gzip/Brotli压缩
- 使用静态生成 (SSG)

### 8. 缓存策略

#### next.config.js
```javascript
async headers() {
  return [
    {
      source: '/:all*(svg|jpg|png|webp)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
}
```

### 9. 预加载关键资源

```typescript
// app/layout.tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://www.google-analytics.com" />
</head>
```

### 10. 减少DOM大小

**目标**: < 1500个节点

**检查方法**:
```bash
# 在浏览器控制台
document.querySelectorAll('*').length
```

## 快速优化清单

### 立即可做
- [ ] 为所有图片添加width和height
- [ ] YouTube iframe添加loading="lazy"
- [ ] Google Analytics改为lazyOnload
- [ ] 添加preconnect链接

### 需要修改代码
- [ ] 将img标签改为Next.js Image组件
- [ ] 动态导入非关键组件
- [ ] 优化字体加载策略
- [ ] 配置图片优化

### 需要部署配置
- [ ] 启用CDN
- [ ] 配置缓存策略
- [ ] 启用压缩
- [ ] 配置HTTP/2

## 测试工具

1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **Lighthouse**: Chrome DevTools
3. **WebPageTest**: https://www.webpagetest.org/
4. **GTmetrix**: https://gtmetrix.com/

## 预期改进

### 优化前 (假设)
- Performance: 60-70
- LCP: 3-4s
- FID: 100-200ms
- CLS: 0.1-0.25

### 优化后 (目标)
- Performance: 90+
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## 下一步

请提供PageSpeed报告中的具体问题，我会针对性地优化：
1. Performance分数
2. 具体的诊断问题
3. 机会建议
4. Core Web Vitals数据
