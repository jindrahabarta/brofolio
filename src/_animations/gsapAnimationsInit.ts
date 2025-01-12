import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapAnimationsInit = (path: string) => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.killAll()

    if (path === '/') {
        //PROJECTS
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

    //ABOUT US

    //TV Transition
    const aboutUsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top top',
            end: '50% bottom',
            scrub: 0.1,
        },
    })

    aboutUsTimeline
        .to(
            '.aboutUs-scale',
            {
                scale: 5,
            },
            0
        )
        .to(
            '#aboutUsContent',
            {
                scale: 1,
                translateY: 0,
            },
            '<'
        )
        .set('#aboutUsScrollSection', {
            display: 'none',
        })

    //TV Transition
    gsap.to('.aboutUsScrollSpeed', {
        scrollTrigger: {
            trigger: '#aboutUsContent',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.1,
        },

        translateY: 0,
    })

    //FOOTER

    gsap.to('.footerHeading', {
        translateY: 0,
        stagger: 0.2,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '#footer',
            start: 'bottom-=10px bottom',
            end: 'bottom-=10px bottom',
            toggleActions: 'play none none reverse',
        },
    })
}

export default gsapAnimationsInit
