import Link from 'next/link'
import React from 'react'

const E404 = () => {
    return (
        <section className='text-white pt-9 h-screen bg-black overflow-hidden flex flex-col items-center justify-center'>
            <h1 className=' bottom-4 text-[4vw] left-4 text-center'>
                <strong>404</strong>
            </h1>
            <p>Tato stránka neexistuje</p>

            <Link className='underline mt-4 hover:no-underline' href={'/'}>
                Jít domů
            </Link>
        </section>
    )
}

export default E404
