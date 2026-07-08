import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match root
    '/',
    // Match all locale-prefixed paths
    '/(fr|en)/:path*',
    // Exclude API routes, _next, static files
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
