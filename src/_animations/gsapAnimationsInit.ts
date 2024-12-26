import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapAnimationsInit = (path: string) => {
    gsap.registerPlugin(ScrollTrigger)

    if (path === '/') {
        console.log(path)

        gsap.utils.toArray('.projectsItem').forEach((item) => {
            if (!item) return

            console.log(item)

            gsap.to(item, {
                opacity: 1,
                x: 0,
                duration: 0.35,
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: item as HTMLElement,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none reverse',
                },
            })
        })
    }
}

export default gsapAnimationsInit