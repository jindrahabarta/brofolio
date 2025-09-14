import React from 'react'

import Accordion from './Accordion'

const FAQ = () => {
    return (
        <section className='bg-black text-white px-8 py-16'>
            <div className=''>
                <div className='flex-1'>
                    <h1>
                        <strong>FAQ</strong>
                    </h1>
                    <h2 className='text-2xl mt-2'>
                        <em>* Často kladené dotazy</em>
                    </h2>
                </div>

                <Accordion />
            </div>

            <div className='mt-16 flex flex-col items-center'>
                <h2 className='text-center leading-relaxed'>
                    <strong>Máte další otázky?</strong>
                </h2>
                <p className='text-center font-instrument text-2xl leading-relaxed'>
                    Neváhejte nám zaslat email s vašim dotazem či poptávkou
                </p>

                <p className='p-2 bg-gray-100/80 rounded-xl text-black w-fit flex gap-6 items-center mt-6'>
                    <span>contact@email.cz</span>
                    <button
                        type='button'
                        aria-label='Copy email'
                        className='bg-white hover:bg-gray-100 duration-200 py-2 px-4 rounded-lg font-emberlyRegular text-xl'
                    >
                        copy
                    </button>
                </p>
            </div>
        </section>
    )
}

export default FAQ
