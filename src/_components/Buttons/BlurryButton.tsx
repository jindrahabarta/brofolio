import Link from 'next/link'
import React from 'react'
import gsap from 'gsap'

const BlurryButton = ({
    text,
    link,
    id,
    onClick,
}: {
    text: string
    link: string
    id: string
    onClick: (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        id: string
    ) => void
}) => {
    const mouseEnter: React.MouseEventHandler<HTMLAnchorElement> = () => {
        gsap.to(`#btnBlur-${id}`, {
            width: 50 + '%',

            duration: 0.3,
        })
    }

    const mouseOver: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - buttonRect.left
        const offsetY = e.clientY - buttonRect.top

        gsap.to(`#btnBlur-${id}`, {
            top: offsetY,
            left: offsetX,
            delay: 0.2,
        })
    }

    const mouseLeave: React.MouseEventHandler<HTMLAnchorElement> = () => {
        gsap.to(`#btnBlur-${id}`, {
            width: 0,
            ease: 'power1.in',
            duration: 0.3,
        })
    }

    return (
        <Link
            onMouseMove={mouseOver}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            id={id}
            href={link}
            onClick={(e) => onClick(e, '#contact')}
            className='btnFilter blurryBtn h-12 sm:h-14 w-fit px-4 sm:px-8 flex items-center rounded-xl text-xs sm:text-sm relative overflow-hidden'
            aria-label={`Navigation link to ${text}`}
        >
            <figure
                id={`btnBlur-${id}`}
                className='blurryBtnFill hidden sm:block w-0 absolute top-0 left-0 aspect-square rounded-full -translate-x-1/2 -translate-y-1/2'
            ></figure>
            <span className='blurryBtnText backdrop:invert z-10 font-owners text-xs md:text-base'>
                {text}
            </span>
        </Link>
    )
}

export default BlurryButton
