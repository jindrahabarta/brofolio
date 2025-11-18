import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { hasLocale } from 'next-intl'

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale

    const layout = (await import(`./locales/${locale}/layout.json`)).default
    const mainPage = await import(`./locales/${locale}/mainPage.json`)
    const projects = (await import(`./locales/${locale}/projects.json`)).default
    const form = (await import(`./locales/${locale}/form.json`)).default

    const messages = { ...mainPage, ...projects, ...layout, ...form }

    return {
        locale,
        messages: messages,
    }
})
