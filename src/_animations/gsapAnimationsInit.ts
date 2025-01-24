import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapAnimationsInit = (path: string) => {
    ScrollTrigger.killAll()
    gsap.registerPlugin(ScrollTrigger)

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
            trigger: '#aboutUsScrollSection',
            start: 'top top',
            end: '50% 110%',
            scrub: 0.1,
        },
        defaults: { ease: 'power1.inOut' },
    })

    aboutUsTimeline
        .to(
            '.aboutUs-scale',
            {
                scale: 4.5,
            },
            0
        )
        .to(
            '#aboutusTV',
            {
                rotate: 5,
            },
            '<'
        )
        .to(
            '#aboutusBg',
            {
                filter: 'blur(0px)',
                duration: 0.3,
            },
            '<'
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
            trigger: '#about',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.1,
        },

        translateY: 0,
    })

    //Technology Bg Transition
    const techTl = gsap
        .timeline({ defaults: { duration: 0.2, ease: 'power1' }, paused: true })
        .to(document.body, {
            duration: 0.2,
            backgroundColor: 'black',
        })
        .to(
            '#nextTitle',
            {
                color: 'white',
            },
            '<'
        )
        .to(
            '#nextMarquee',
            {
                filter: 'invert(1)',
            },
            '<'
        )
        .to(
            '#projectsTitle',
            {
                color: '#e5e7eb',
            },
            '<'
        )

    ScrollTrigger.create({
        trigger: '#projects',
        start: 'top center',
        end: 'top center',
        toggleActions: 'play none none reverse',

        onEnter: () => {
            techTl.play()
        },
        onLeaveBack: () => {
            techTl.reverse()
        },
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
