import React from 'react'
import TVSection from './TVSection'
import TVScreen from './TVScreen'

const ScrollLength = ({ height }: { height: number }) => {
    return (
        <section id='aboutusScroller' className={` bg-red-300 h-[${height}vh]`}>
            <TVSection></TVSection>
        </section>
    )
}

export default ScrollLength
