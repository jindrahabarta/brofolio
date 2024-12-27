import React from 'react'

import Accordion from './Accordion'

const FAQ = () => {
    return (
        <section className='bg-black text-white px-8 py-16 flex gap-10'>
            <div className='flex-1'>
                <h1>
                    <strong>FAQ</strong>
                </h1>
                <h2 className='text-2xl mt-2'>
                    <em>* Často kladené dotazy</em>
                </h2>
            </div>

            <Accordion />
        </section>
    )
}

export default FAQ
