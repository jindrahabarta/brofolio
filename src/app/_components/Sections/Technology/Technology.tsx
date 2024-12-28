import React from 'react'
import { technology } from '@/_constants/technology'
import Marquee from '@/_components/Marquee/Marquee'
import TechBadge from './TechBadge'

const Technology = () => {
    const { coding, design, other } = technology

    return (
        <section
            id='technology'
            className='min-h-screen flex flex-col justify-center bg-black py-16'
        >
            <div className='flex flex-col gap-2 md:gap-4'>
                <Marquee duration='30s' className='gap-2 md:gap-4 pr-2 md:pr-4'>
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
                    className='gap-2 md:gap-4 pr-2 md:pr-4'
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
