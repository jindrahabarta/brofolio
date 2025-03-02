'use client'

import Image from 'next/image'
import React from 'react'

import 'react-phone-number-input/style.css'

import ContactForm from '@/_components/ContactForm/ContactForm'

const Contact = () => {
    return (
        <section id='contact' className='relative overflow-x-hidden w-full'>
            <Image
                src='/images/contact/paper_edge.png'
                alt='Paper edge'
                width={2500}
                height={212}
                className='absolute top-[2px] z-10 w-full select-none'
            />
            <div id='contact-bg' className='absolute inset-0' />

            <div className='relative w-full flex flex-col lg:flex-row-reverse justify-evenly items-center gap-12 lg:gap-8 px-4 sm:px-8 py-16 pt-[11.8vw]'>
                <div className='flex-1 sm:max-w-xl'>
                    <Image
                        src='/images/contact/ContactGif2.webp'
                        unoptimized
                        width={600}
                        height={600}
                        alt='Contact form'
                        className='w-full sm:max-w-lg aspect-square object-cover object-center mix-blend-multiply select-none pointer-events-none'
                    />
                </div>

                <ContactForm></ContactForm>
            </div>
        </section>
    )
}

export default Contact
