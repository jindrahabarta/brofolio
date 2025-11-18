import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapAnimationsInit = (path: string) => {
    ScrollTrigger.killAll()
    gsap.registerPlugin(ScrollTrigger)

    const mm = gsap.matchMedia()

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

        //MOBILE
        mm.add('(max-width: 639px)', () => {
            aboutUsTimeline
                .to(
                    '.aboutUs-scale',
                    {
                        scale: 7,
                    },
                    0
                )
                .to(
                    '#aboutUsContent',
                    {
                        translateY: 0,
                    },
                    '<'
                )

                .set('#aboutUsScrollSection', {
                    display: 'none',
                })
        })

        //PC
        mm.add('(min-width: 640px)', () => {
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
                    '#aboutUsContent',
                    {
                        scale: 1,
                        translateY: 0,
                    },
                    '<'
                )
                .to(
                    '.aboutUsGifScale',
                    {
                        scale: 1,
                    },
                    '<'
                )
                .to(
                    '.aboutUsGridScrollSpeed',
                    {
                        translateY: 0,
                    },
                    '<'
                )

                .set('#aboutUsScrollSection', {
                    display: 'none',
                })
        })

        ScrollTrigger.create({
            trigger: '#sectionJindra',
            start: 'bottom bottom',
            end: 'bottom bottom',

            onEnter: () => {
                gsap.set(document.body, { backgroundColor: '#e5e7eb' })
            },
            onEnterBack: () => {
                gsap.set(document.body, { backgroundColor: 'black' })
            },
            onLeave: () => {
                gsap.set(document.body, { backgroundColor: '#e5e7eb' })
            },
            onLeaveBack: () => {
                gsap.set(document.body, { backgroundColor: 'black' })
            },
            onRefresh: (self) => {
                const isInViewport = self.isActive
                gsap.set(document.body, {
                    backgroundColor: isInViewport ? '#e5e7eb' : 'black',
                })
            },
        })

        //TABLET + PC
        mm.add('(min-width: 768px)', () => {
            //SCROLL SPEED
            gsap.to('.aboutUsScrollSpeed', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.1,
                },

                translateY: 0,
            })
        })

        //AboutUsSideScrollText
        ScrollTrigger.create({
            trigger: '.aboutUsGifScale',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,

            onUpdate: (e) => {
                const progress = e.progress * -50

                gsap.set('#aboutUsHeading', {
                    translateX: `${progress}%`,
                })
            },
        })

        const aboutUsHeadingTl = gsap
            .timeline({ defaults: { duration: 0.2 }, paused: true })
            .to('#aboutUsHeadingBg', {
                opacity: 1,
            })
            .to(
                '#aboutUsHeadingBg',
                {
                    filter: 'brightness(2)',
                },
                '<'
            )
            .to('#aboutUsHeadingBg', {
                filter: 'brightness(1)',
            })

        ScrollTrigger.create({
            trigger: '#aboutUsHeadingBg',
            start: '90% center',
            end: '90% center',

            onEnter: () => {
                aboutUsHeadingTl.play()
            },

            onEnterBack: () => {
                aboutUsHeadingTl.reverse()
            },
        })

        //Technology Bg Transition
        const techTl = gsap
            .timeline({
                defaults: { duration: 0.2, ease: 'power1' },
                paused: true,
            })
            .to(
                '#nextTitle',
                {
                    color: 'white',
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
            .to(
                '.projectDescription',
                {
                    color: 'white',
                },
                '<'
            )
            .to(
                document.body,

                {
                    duration: 0.2,
                    backgroundColor: 'black',
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
    }
}

export default gsapAnimationsInit
