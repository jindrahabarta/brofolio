import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapAnimationsInit = (path: string) => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.killAll()

    if (path === '/') {
        gsap.utils.toArray('.projectsItem').forEach((item) => {
            if (!item) return

            gsap.to(item, {
                opacity: 1,
                x: 0,
                duration: 0.35,
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: item as HTMLElement,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none none',
                },
            })
        })
    }

    const aboutUsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#aboutus',
            start: 'top top',
            end: '80% bottom',
            scrub: 0.1,

            snap: 'labels',
        },
    })

    aboutUsTimeline
        .to(
            '.aboutUs-scale',
            {
                scale: 5,
                x: 70,
                y: -150,
            },
            0
        )
        .to(
            '#aboutus-TVFill',
            {
                opacity: 0,
            },
            'AUTLend'
        )
}

export default gsapAnimationsInit
