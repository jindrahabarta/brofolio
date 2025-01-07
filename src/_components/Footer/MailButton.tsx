import Link from 'next/link'
import React, { useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

import LetterImage from '@/../public/images/Footer/letter.png'

const MailButton = () => {
    const [letterVisible, setLetterVisible] = useState(false)

    const mouseEnter: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - buttonRect.left
        const offsetY = e.clientY - buttonRect.top

        gsap.set('#mailBtnLetter', {
            left: offsetX,
            top: offsetY,
            onComplete: () => {
                setLetterVisible(true)
            },
        })
    }

    const mouseMove: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - buttonRect.left
        const offsetY = e.clientY - buttonRect.top

        gsap.to('#mailBtnLetter', {
            left: offsetX + 30,
            top: offsetY - 20,
            ease: 'power1.out',
        })
    }

    return (
        <Link
            onMouseEnter={mouseEnter}
            onMouseLeave={() => setLetterVisible(false)}
            onMouseMove={mouseMove}
            id='footerMail'
            className='text-[clamp(1rem,7vw,3.75rem)] sm:text-2xl md:text-3xl lg:text-4xl relative w-fit'
            href={'mailto:motionlabs.cz'}
        >
            motionlabs@info.cz
            <Image
                src={LetterImage}
                width={50}
                height={20}
                alt='Letter icon'
                id='mailBtnLetter'
                className={`absolute  ${
                    letterVisible ? 'opacity-100' : 'opacity-0'
                }`}
            ></Image>
        </Link>
    )
}

export default MailButton
