import Link from 'next/link'
import React, { useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const MailButton = () => {
    const [cursor, setLetterVisible] = useState(false)

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

        if (buttonRect.width / 2 <= offsetX) {
            gsap.to('#mailBtnLetter', {
                left: offsetX + 30,
                top: offsetY - 20,
                ease: 'power1.out',
            })
        } else {
            gsap.to('#mailBtnLetter', {
                left: offsetX - 70,
                top: offsetY - 20,
                ease: 'power1.out',
            })
        }
    }

    return (
        <Link
            onMouseEnter={mouseEnter}
            onMouseLeave={() => setLetterVisible(false)}
            onMouseMove={mouseMove}
            id='footerMail'
            className='text-[clamp(1rem,7vw,3.75rem)] sm:text-2xl md:text-2xl lg:text-4xl relative w-fit'
            href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#111;&#111;&#116;&#105;&#111;&#110;&#108;&#97;&#98;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
        >
            &#109;&#111;&#111;&#116;&#105;&#111;&#110;&#108;&#97;&#98;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
            <Image
                src={
                    'https://media.tenor.com/m-OEv4Zz1zEAAAAM/mailman-postman.gif'
                }
                unoptimized
                width={120}
                height={100}
                alt='Letter icon'
                id='mailBtnLetter'
                className={`absolute duration-200 w-auto  ${
                    cursor ? 'opacity-70' : 'opacity-0'
                }`}
            ></Image>
        </Link>
    )
}

export default MailButton
