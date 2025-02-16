import React from 'react'
import Image from 'next/image'
import DicaprioGif from '@/../public/images/AboutUs/DicaprioGif.gif'

const DiCaprioGifs = () => {
    return (
        <div className='aboutUsGifScale grid h-full sm:scale-[1.9] w-full sm:grid-cols-3 grid-rows-3'>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='hidden sm:block w-full h-full translate-y-80 object-cover aboutUsGridScrollSpeed'
            ></Image>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='w-full h-full object-cover'
            ></Image>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='hidden sm:block w-full h-full -translate-y-56 object-cover aboutUsGridScrollSpeed'
            ></Image>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='hidden sm:block w-full h-full translate-y-80 object-cover aboutUsGridScrollSpeed'
            ></Image>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='w-full h-full  object-cover '
            ></Image>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='hidden sm:block w-full h-full -translate-y-56 object-cover aboutUsGridScrollSpeed'
            ></Image>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='hidden sm:block w-full h-full translate-y-80 object-cover aboutUsGridScrollSpeed'
            ></Image>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='w-full h-full object-cover'
            ></Image>
            <Image
                src={DicaprioGif}
                alt={'Dicaprio Gif'}
                width={320}
                height={280}
                className='hidden sm:block w-full h-full -translate-y-56 object-cover aboutUsGridScrollSpeed'
            ></Image>
        </div>
    )
}

export default DiCaprioGifs
