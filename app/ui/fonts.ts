/**
 * 通过next/font渲染的字体会在编译时加载和静态文件一样，所以不会在页面加载是影响性能
 */

import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
});