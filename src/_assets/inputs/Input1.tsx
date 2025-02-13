import * as React from 'react'
import { SVGProps } from 'react'

const Input1 = (props: SVGProps<SVGSVGElement>) => (
    <svg width={500} height={100} {...props}>
        <defs>
            <filter
                id='a'
                width='100%'
                height='100%'
                x='0%'
                y='0%'
                filterUnits='objectBoundingBox'
            >
                <feTurbulence
                    baseFrequency={0.5}
                    numOctaves={5}
                    result='f1'
                    stitchTiles='stitch'
                    type='fractalNoise'
                />
                <feColorMatrix
                    result='f2'
                    values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5'
                />
                <feComposite
                    in='SourceGraphic'
                    in2='f2b'
                    operator='in'
                    result='f3'
                />
                <feTurbulence
                    baseFrequency={1.2}
                    numOctaves={3}
                    result='noise'
                    type='fractalNoise'
                />
                <feDisplacementMap
                    in='f3'
                    result='f4'
                    scale={2.5}
                    xChannelSelector='R'
                    yChannelSelector='G'
                />
            </filter>
        </defs>
        <g filter='url(#a)'>
            <path
                fill='none'
                stroke='#000'
                strokeWidth={15}
                d='M5 5h480v80H5z'
            />
        </g>
    </svg>
)

export default Input1
