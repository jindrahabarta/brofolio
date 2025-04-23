import React from 'react'
import Content from './Content'
import ScrollEffect from './ScrollEffect'

const AboutUs: React.FC<{
    onTvLoad: () => void
    onAbout1Load: () => void
    onAbout2Load: () => void
}> = ({ onTvLoad, onAbout1Load, onAbout2Load }) => {
    return (
        <section id='about' className=' relative select-none'>
            <div className='h-44 bg-gradient-to-b from-0% from-black to-[rgba(223, 232, 233, 0.2)] absolute z-10 w-full'></div>

            <Content
                onAbout1Load={onAbout1Load}
                onAbout2Load={onAbout2Load}
            ></Content>

            <ScrollEffect onTvLoad={onTvLoad}></ScrollEffect>
        </section>
    )
}

export default AboutUs
