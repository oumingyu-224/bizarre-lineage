# Bing IndexNow 快速提交指南

## 1. 生成密钥

1. 访问 [Bing IndexNow 入门页面](https://www.bing.com/indexnow/getstarted#)
2. 生成密钥并下载密钥文件
3. 将密钥文件上传到网站根目录

## 2. 提交 URL (curl 命令)

```bash
curl -X POST "https://www.bing.com/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "www.soflowheelielife.dev",
    "key": "60c1f021f8bf4251a63eace188cfc920",
    "keyLocation": "https://www.soflowheelielife.dev/60c1f021f8bf4251a63eace188cfc920.txt",
    "urlList": [
      "https://www.soflowheelielife.dev/",
      "https://www.soflowheelielife.dev/street-wheelie",
      "https://www.soflowheelielife.dev/stickman-bike",
      "https://www.soflowheelielife.dev/wheelie-life"
    ]
  }'
```

添加 `-v` 参数可查看详细响应：

```bash
curl -v -X POST "https://www.bing.com/IndexNow" ...
```