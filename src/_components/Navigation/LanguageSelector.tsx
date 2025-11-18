'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { useLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { usePathname, useRouter } from '@/i18n/navigation'

const LanguageSelector = () => {
    const [isOpened, setIsOpened] = useState(false)
    const actualLocale = useLocale()
    const locales = routing.locales
    const path = usePathname()
    const router = useRouter()

    const switchLocale = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        locale: string
    ) => {
        e.preventDefault()
        router.replace({ pathname: path }, { locale: locale })
    }

    return (
        <div className='relative' onMouseLeave={() => setIsOpened(false)}>
            <div
                onClick={() => setIsOpened((prev) => !prev)}
                className='blurryBtn btnFilter group w-12 h-12 sm:w-14 sm:h-14 rounded-lg cursor-pointer flex gap-[0.12rem] items-center justify-center select-none'
            >
                {actualLocale}
                <FiChevronDown
                    className={`duration-200 pt-0.5 ${
                        isOpened ? '-rotate-180' : 'rotate-0 '
                    }`}
                    size={18}
                />
            </div>

            {isOpened && (
                <div className='absolute w-full pt-1'>
                    <div className='flex btnFilter blurryBtn !rounded-lg overflow-hidden flex-col items-center'>
                        {locales
                            .filter((locale) => locale !== actualLocale)
                            .map((locale) => (
                                <Link
                                    key={locale}
                                    href={locale}
                                    onClick={(e) => switchLocale(e, locale)}
                                    className='text-center bg-transparent hover:bg-black/20 duration-200 w-full'
                                >
                                    {locale}
                                </Link>
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
