import React from 'react'
import Marquee from '../Marquee/Marquee'

const FooterBottom = () => {
    return (
        <section className='select-none mt-10'>
            <div className='w-full max-w-full overflow-hidden'>
                <h1 className='flex gap-[3vw] text-[8vw] sm:text-[7.9vw] leading-tight text-center text-nowrap overflow-hidden'>
                    <span className='font-black footerHeading translate-y-full inline-block'>
                        <strong>Motion</strong>
                    </span>{' '}
                    <span className='font-owners font-black footerHeading translate-y-full inline-block'>
                        <strong>Labs</strong>
                    </span>
                </h1>
                <div className='w-full overflow-hidden'>
                    <p className='footerHeading translate-y-full text-2xl leading-normal flex gap-4 items-center text-nowrap '>
                        <Marquee
                            duration='20s'
                            sets={4}
                            direction='left'
                            className='gap-2 sm:gap-4 pr-2 sm:pr-4'
                        >
                            <span className='font-charm text-nowrap whitespace-nowrap'>
                                Motion graphic
                            </span>
                            <span className='text-sm'>&#9679;</span>
                            <span className='font-charm text-nowrap whitespace-nowrap'>
                                Website developement
                            </span>
                            <span className='text-sm'>&#9679;</span>
                            <span className='font-charm'>UX</span>
                            <span className='text-sm'>&#9679;</span>
                            <span className='font-charm'>UI</span>
                            <span className='text-sm'>&#9679;</span>
                            <span className='font-charm'>Performance</span>
                            <span className='text-sm'>&#9679;</span>
                            <span className='font-charm'>Design</span>
                            <span className='text-sm'>&#9679;</span>
                        </Marquee>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FooterBottom
