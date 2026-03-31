import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['cs', 'en', 'no'],
    defaultLocale: 'cs',
    localeCookie: { name: 'NEXT_LOCALE', maxAge: 60 * 60 * 24 * 365 },
    localeDetection: true,
})
