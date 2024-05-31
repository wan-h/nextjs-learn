import type { NextAuthConfig } from 'next-auth';

/**
 * 配置身份校验，这里配置了登录页面的路径
 */
 
export const authConfig = {
    pages: {
      signIn: '/login',
    },
    // The authorized callback is used to verify if the request is authorized to access a page via Next.js Middleware. 
    // It is called before a request is completed, and it receives an object with the auth and request properties.
    callbacks: {
      authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
      },
    },
    providers: [], // Add providers with an empty array for now
  } satisfies NextAuthConfig;