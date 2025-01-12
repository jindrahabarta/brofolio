import React from 'react'
import ScrollLength from './ScrollLength'
import TVSection from './TVSection'
import TVScreen from './TVScreen'

const AboutUs2 = () => {
    return (
        <section className='relative w-full bg-green-400 '>
            <ScrollLength height={200}></ScrollLength>
            <TVSection></TVSection>

            {/* <div className='absolute top-0 left-0 w-full h-fit opacity-45 '>
                <div
                    id='aboutUs-TvFill'
                    className='w-full h-fit flex flex-col justify-start items-start bg-blue-500'
                >
                    <div
                        id='aboutUs-TvFill'
                        className='w-full h-screen bg-blue-100'
                    ></div>
                    <div
                        id='aboutUs-TvFill'
                        className='w-full h-screen bg-blue-800'
                    ></div>
                </div>
            </div> */}

            <div className='h-screen bg-yellow-300'>
                <h1>
                    <strong>nezavisle pokracovani sekce</strong>
                </h1>
            </div>
        </section>
    )
}

export default AboutUs2
