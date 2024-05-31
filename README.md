## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

### 工程构建
* 工程初始化
```bash
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```
### 工程结构
* /app: 包含所有的路由页面，组件，和实现逻辑
* /app/lib: 包含应用使用的函数，比如功能函数和数据获取函数等
* /app/ui: 包含所有的ui组件实现，比如卡片、表格等
* /public: 包含所有的静态文件，比如图片等
* /scripts: 包含所有的工程脚本，这里是填充数据库的脚本
* 其他就是工程的配置文件

### 运行工程
```bash
# npm 18+
nvm use 18

# 安装依赖库
npm i

# 启动开发环境
npm run dev
```