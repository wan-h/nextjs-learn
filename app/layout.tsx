/**
 * 该文件是一个全局布局文件，用于定义整个应用程序的布局
 * 上级的layout.tsx会作用到下级路由的所有页面
 */

// 引入全局样式
import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';

// 设置metadata
export const metadata: Metadata = {
  title: {
    // 这里使用的占位符，其他page的title会替换这个占位符
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

// 这里的childre可以是page或则layput，这里是page.tsx页面
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
