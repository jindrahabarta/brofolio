import React from 'react'
import Image from 'next/image'
import MlLogoStroke from '@/_assets/brand/MlLogoStroke'
import LogoSvg from '@/../public/brand/ml_logo.svg'

const Loader = () => {
    return (
        <div
            className={`loader fixed inset-0 z-[999] flex justify-center items-center bg-gray-900 select-none duration-500 opacity-100`}
            data-lenis-loaded='false'
            data-logo-loaded='false'
            data-tv-loaded='false'
            data-about-1-loaded='false'
            data-about-2-loaded='false'
        >
            <div
                className='relative w-1/2 max-w-xs'
                style={{ transform: 'rotate3d(1, 1, 0, 10deg)' }}
            >
                <MlLogoStroke className='absolute text-motionGreen animate-logoFirst' />

                <MlLogoStroke className='absolute text-motionEmerald animate-logoFirst animation-delay-1000' />

                <MlLogoStroke className='absolute text-motionBlue animate-logoFirst animation-delay-2000' />

                <Image
                    src={LogoSvg}
                    alt={'logo'}
                    width={300}
                    height={300}
                    className='invert w-full'
                />
            </div>
        </div>
    )
}

export default Loader
