import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

/**
 * 该文件是对中间件的配置
 */

export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};