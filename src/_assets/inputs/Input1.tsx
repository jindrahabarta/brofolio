import * as React from 'react'
import { SVGProps } from 'react'

const Input1: React.FC<
    SVGProps<SVGSVGElement> & {
        strokeWidth: number
    }
> = ({ strokeWidth, ...props }) => (
    <svg xmlns='http://www.w3.org/2000/svg' {...props}>
        <defs>
            <filter
                x={0}
                y={0}
                width='100%'
                height='100%'
                filterUnits='objectBoundingBox'
                id='pencilTexture3'
            >
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency='0.5'
                    numOctaves='5'
                    stitchTiles='stitch'
                    result='f1'
                ></feTurbulence>
                <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5'
                    result='f2'
                ></feColorMatrix>
                <feComposite
                    operator='in'
                    in2='f2'
                    in='SourceGraphic'
                    result='f3'
                ></feComposite>
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency='1.2'
                    numOctaves='3'
                    result='noise'
                ></feTurbulence>
                <feDisplacementMap
                    xChannelSelector='R'
                    yChannelSelector='G'
                    scale='2.5'
                    in='f3'
                    result='f4'
                ></feDisplacementMap>
            </filter>
        </defs>
        <rect
            width='100%'
            height='100%'
            x={0}
            y={0}
            strokeWidth={strokeWidth}
            stroke='black'
            fill='none'
            style={{ filter: 'url(#pencilTexture3)' }}
        />
    </svg>
)

export default Input1
