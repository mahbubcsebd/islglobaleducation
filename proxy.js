import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/dictionaries';

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Ignore internal Next.js assets, public files, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if the current pathname already includes a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Check cookie preference first (set when user toggles language)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  let targetLocale = defaultLocale;

  if (cookieLocale && locales.includes(cookieLocale)) {
    targetLocale = cookieLocale;
  } else {
    // Detect preferred locale from accept-language header
    const acceptLanguage = request.headers.get('accept-language') || '';
    if (acceptLanguage.includes('bn')) {
      targetLocale = 'bn';
    }
  }

  // Redirect to localized path
  const redirectUrl = new URL(
    `/${targetLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`,
    request.url
  );
  redirectUrl.search = request.nextUrl.search;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Match all paths except api, static files, images, and favicon
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
