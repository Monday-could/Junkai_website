# Junkai Yang - Personal Resume Website

这是一个个人简历网站，展示 Junkai Yang 的学术背景和科研成果。

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 中英文双语切换
- ✅ Hash Router 支持 GitHub Pages 部署
- ✅ 符合 WCAG 无障碍访问标准
- ✅ 科研成果展示（支持下拉切换）
- ✅ 个人简介页面

## 技术栈

- React 18.2.0
- React Router DOM 6.20.0 (Hash Router)
- CSS3

## 安装和运行

### 前置要求

- Node.js (版本 14 或更高)
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm start
```

应用将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `build` 目录中。

## 部署到 GitHub Pages

### 步骤 1: 更新 package.json

确保 `package.json` 中的 `homepage` 字段设置为你的 GitHub Pages URL：

```json
"homepage": "https://yourusername.github.io/junkaiyang_web"
```

将 `yourusername` 替换为你的 GitHub 用户名。

### 步骤 2: 安装 gh-pages

```bash
npm install --save-dev gh-pages
```

### 步骤 3: 添加部署脚本

在 `package.json` 的 `scripts` 部分添加：

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

### 步骤 4: 部署

```bash
npm run deploy
```

### 步骤 5: 启用 GitHub Pages

1. 前往你的 GitHub 仓库
2. 点击 Settings
3. 在左侧菜单中找到 Pages
4. 在 Source 下拉菜单中选择 `gh-pages` 分支
5. 点击 Save

你的网站将在 `https://yourusername.github.io/junkaiyang_web` 可用。

## 项目结构

```
junkaiyang_web/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Layout.js
│   │   └── Layout.css
│   ├── contexts/
│   │   └── LanguageContext.js
│   ├── pages/
│   │   ├── AboutMe.js
│   │   ├── AboutMe.css
│   │   ├── Research.js
│   │   └── Research.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── translations.js
├── package.json
└── README.md
```

## 添加新的科研成果

要添加新的科研成果信息，编辑 `src/translations.js` 文件，在 `research2` 或 `research3` 部分添加相应的内容。

## 无障碍访问 (WCAG)

本网站遵循 WCAG 2.1 标准，包括：

- 语义化 HTML
- 适当的 ARIA 标签
- 键盘导航支持
- 足够的颜色对比度
- 可访问的表单控件

## 许可证

MIT License




