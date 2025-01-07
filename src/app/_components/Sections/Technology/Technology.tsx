'use client'

import React, { useEffect, useRef } from 'react'
import { technology } from '@/_constants/technology'
import Marquee from '@/_components/Marquee/Marquee'
import TechBadge from './TechBadge'

const Technology = () => {
    const topFadeContainer = useRef<HTMLDivElement | null>(null)

    const { coding, design, other } = technology

    const generateTopFade = () => {
        if (!topFadeContainer.current) return

        const ROWS = 15
        const { offsetWidth, offsetHeight } = topFadeContainer.current
        const width = Math.floor(offsetHeight / ROWS)
        const rowLength = Math.ceil(offsetWidth / width)
        let innerHtml = ''

        for (let i = 0; i < ROWS + 1; i++) {
            let row = '<span class="flex">'

            for (let j = 0; j < rowLength; j++) {
                const possibility = Math.random() * ROWS <= i
                row += `<span class="w-[0.4rem] h-[0.4rem] ${
                    possibility ? 'bg-black' : ''
                }"></span>`
            }
            row += '</span>'
            innerHtml += row
        }

        topFadeContainer.current.innerHTML = innerHtml
    }

    useEffect(() => {
        generateTopFade()

        window.addEventListener('resize', generateTopFade)

        return () => {
            window.removeEventListener('resize', generateTopFade)
        }
    }, [])

    return (
        <section
            id='technology'
            className='relative flex flex-col gap-12 justify-center bg-black py-32'
        >
            <div
                ref={topFadeContainer}
                className='absolute -top-24 left-0 w-full h-24 overflow-hidden'
            />

            <div className='flex flex-col gap-2 sm:gap-3'>
                <Marquee duration='30s' className='gap-2 sm:gap-3 pr-2 md:pr-4'>
                    {coding.map((item, index) => (
                        <TechBadge
                            key={`${index}-coding-${item.name}`}
                            tool={item}
                        />
                    ))}
                </Marquee>

                <Marquee
                    duration='20s'
                    sets={4}
                    direction='right'
                    className='gap-2 sm:gap-4 pr-2 sm:pr-4'
                >
                    {design.map((item, index) => (
                        <TechBadge
                            key={`${index}-design-${item.name}`}
                            tool={item}
                        />
                    ))}
                </Marquee>

                <Marquee sets={4} className='gap-2 md:gap-4 pr-2 md:pr-4'>
                    {other.map((item, index) => (
                        <TechBadge
                            key={`${index}-other-${item.name}`}
                            tool={item}
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Technology
