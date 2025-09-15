# eNID 数字身份前端应用

基于Vue3构建的eNID数字身份应用前端界面，复现了原始设计图中的视觉效果。

## 功能特性

- 🎨 现代化的渐变背景设计
- 📱 响应式手机界面展示
- 🆔 完整的数字身份证卡片界面
- 🔔 通知系统界面
- 📲 应用下载按钮
- 💫 流畅的动画效果

## 技术栈

- Vue 3
- Vite
- CSS3 (渐变、动画、响应式设计)

## 快速开始

### 安装依赖

```bash
cd frontend
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 http://localhost:3000 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
frontend/
├── src/
│   ├── components/
│   │   ├── MainPage.vue      # 主页面组件
│   │   └── PhoneInterface.vue # 手机界面组件
│   ├── App.vue               # 根组件
│   ├── main.js               # 入口文件
│   └── style.css             # 全局样式
├── index.html                # HTML模板
├── package.json              # 项目配置
├── vite.config.js            # Vite配置
└── README.md                 # 项目说明
```

## 设计特色

### 渐变背景
- 从黄色到橙色的对角线渐变
- 波浪形分隔线设计
- 现代化的视觉效果

### 手机界面
- 完整的eNID应用界面复现
- 巴布亚新几内亚身份证卡片
- 功能按钮和通知系统
- 底部导航栏

### 响应式设计
- 支持桌面端和移动端
- 自适应布局
- 优化的触摸交互

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 开发说明

项目使用Vue 3的Composition API和Vite作为构建工具，确保快速的开发体验和优化的生产构建。
