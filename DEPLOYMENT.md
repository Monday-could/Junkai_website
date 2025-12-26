# GitHub Pages 部署指南

## 快速部署步骤

### 1. 安装 gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. 更新 package.json

在 `package.json` 中添加以下内容：

```json
{
  "homepage": "https://yourusername.github.io/junkaiyang_web",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

**重要**: 将 `yourusername` 替换为你的实际 GitHub 用户名。

### 3. 构建并部署

```bash
npm run deploy
```

这个命令会：
1. 自动运行 `npm run build` 构建生产版本
2. 将构建文件推送到 `gh-pages` 分支

### 4. 在 GitHub 上启用 Pages

1. 前往你的 GitHub 仓库
2. 点击 **Settings** (设置)
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 下拉菜单中选择 `gh-pages` 分支
5. 在 **Folder** 中选择 `/ (root)`
6. 点击 **Save**

### 5. 访问你的网站

等待几分钟后，你的网站将在以下地址可用：
```
https://yourusername.github.io/junkaiyang_web
```

## 更新网站内容

每次更新内容后，只需再次运行：

```bash
npm run deploy
```

## 故障排除

### 问题：网站显示 404

- 确保 GitHub Pages 已启用并选择了 `gh-pages` 分支
- 检查 `package.json` 中的 `homepage` 字段是否正确
- 等待 5-10 分钟让 GitHub 处理更新

### 问题：路由不工作

- 确保使用的是 Hash Router（已配置）
- 检查 URL 是否包含 `#` 符号（例如：`https://yourusername.github.io/junkaiyang_web/#/about-me`）

### 问题：样式不显示

- 确保构建成功完成
- 检查浏览器控制台是否有错误
- 清除浏览器缓存

## 自定义域名（可选）

如果你想使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入你的域名（例如：`www.yourdomain.com`）
3. 在你的域名 DNS 设置中添加 CNAME 记录指向 `yourusername.github.io`

