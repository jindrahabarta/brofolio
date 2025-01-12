import React from 'react'

const Content = () => {
    return (
        <div
            id='aboutUs-TvFill'
            className=' bg-blue-400 h-fit flex flex-col justify-start scale-[0.5]'
            style={{ transformOrigin: 'center 15%' }}
        >
            <div className='h-screen'>
                <video
                    className='w-full h-screen object-cover'
                    autoPlay
                    loop
                    src='https://media.istockphoto.com/id/649431220/cs/video/k%C3%B3d-obrazovky-po%C4%8D%C3%ADta%C4%8De-z%C3%A1vadov%C3%BD-efekt-4k.mp4?s=mp4-640x640-is&k=20&c=NzqFy_RmQPW34BSKh8m6cSVK_ws-n6fDLFKtJz_m9EI='
                ></video>
            </div>

            <div className='h-fit bg-yellow-400'>
                <h1 className='text-center text-amber-500'>
                    <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo nemo recusandae magni corporis? Non illum tenetur
                        quisquam, ipsum voluptatum, consequuntur deleniti sed
                        obcaecati praesentium provident corporis repellendus
                        esse. Illo, corporis!
                    </strong>
                </h1>
            </div>
            <div className='h-fit bg-blue-400'>
                <h1 className='text-center text-amber-500'>
                    <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo nemo recusandae magni corporis? Non illum tenetur
                        quisquam, ipsum voluptatum, consequuntur deleniti sed
                        obcaecati praesentium provident corporis repellendus
                        esse. Illo, corporis!
                    </strong>
                </h1>
            </div>
            <div className='h-fit bg-orange-400'>
                <h1 className='text-center text-amber-500'>
                    <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo nemo recusandae magni corporis? Non illum tenetur
                        quisquam, ipsum voluptatum, consequuntur deleniti sed
                        obcaecati praesentium provident corporis repellendus
                        esse. Illo, corporis!
                    </strong>
                </h1>
            </div>
        </div>
    )
}

export default Content
