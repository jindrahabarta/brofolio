export default function handleLoader() {
    const loader = document.querySelector('.loader')
    if (!loader) return

    const lenisLoaded = loader.getAttribute('data-lenis-loaded')
    const logoLoaded = loader.getAttribute('data-logo-loaded')
    const tvLoaded = loader.getAttribute('data-tv-loaded')
    const about1Loaded = loader.getAttribute('data-about-1-loaded')
    const about2Loaded = loader.getAttribute('data-about-2-loaded')

    if (
        lenisLoaded === 'true' &&
        logoLoaded === 'true' &&
        tvLoaded === 'true' &&
        about1Loaded === 'true' &&
        about2Loaded === 'true'
    ) {
        loader.setAttribute('data-lenis-loaded', 'false')
        loader.setAttribute('data-logo-loaded', 'false')
        loader.setAttribute('data-tv-loaded', 'false')
        loader.setAttribute('data-about-1-loaded', 'false')
        loader.setAttribute('data-about-2-loaded', 'false')

        setTimeout(() => {
            loader.classList.add('opacity-0 pointer-events-none')
            setTimeout(() => {
                loader.classList.add('hidden')
            }, 500)
        }, 500)
    }
}
