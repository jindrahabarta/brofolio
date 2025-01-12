import React from 'react'
import Content from './Content'
import ScrollEffect from './ScrollEffect'

const AboutUs = () => {
    return (
        <section id='about' className='bg-black relative select-none'>
            <div className='h-44 bg-gradient-to-b from-0% from-black to-[rgba(223, 232, 233, 0.2)] absolute z-10 w-full'></div>

            <Content></Content>

            <ScrollEffect></ScrollEffect>
        </section>
    )
}

export default AboutUs
