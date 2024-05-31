/**
 * loading.tsx是next框架的一个页数文件，用于组件处于加载状态时显示的内容。
 * 该文件和page.tsx放在了一个路由组里面，所以该文件只作用与dashboard，而不会在继续作用于下面的子路由，例如customers和invoices
 */

import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  // 在组件处于加载状态时显示的内容，这里相当于用的一个骨架展示图
  return <DashboardSkeleton />;
}