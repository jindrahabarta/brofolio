export interface IProject {
    name: string
    slug: string
    description: string
    coverImage: string
    bannerImage: string
    logo: string
    url: string
    target: '_blank' | '_self'
    badges: string[]
    pin: boolean
    color?: string
    content: string[]
}

export const projectList: IProject[] = [
    {
        name: 'Drippy Rugs',
        slug: 'drippy-rugs',
        description: 'Zakázková výroba koberečků',
        coverImage: '/images/Projects/dr_small.webp',
        bannerImage: '/images/Projects/dr_full.webp',
        logo: '/images/Projects/Logo/DRLogo.webp',
        url: 'https://drippyrugs.netlify.app/',
        target: '_blank',
        badges: ['TypeScript', 'Next.js'],
        pin: false,
        color: 'bg-red-400',
        content: [
            'Jednoduché webové stránky sloužící pro představení značky, ukázku práce a možností objednávky vlastního produktu.',
            '<h2>Jednoduchost',
            'U stránek je kladen důraz na co největší jednoduchost, čistotu designu a přehlednost.',
        ],
    },
    {
        name: 'Printujto',
        slug: 'printujto',
        description: 'Zakázkový 3D tisk',
        coverImage: '/images/Projects/printujto_small.webp',
        bannerImage: '/images/Projects/printujto_full.webp',
        logo: '/images/Projects/Logo/PrintujToLogo.webp',
        url: 'https://printujto.cz/',
        target: '_blank',
        badges: ['Next.js', 'React', 'Express.js'],
        pin: true,
        color: 'bg-violet-500',
        content: ['Webové stránky se zaměřením 3D tisku na zakázku. Součástí webu je 3D kalkulátor, který umožňuje v několika krocích poptat zakázku s vypočítanou cenou.',
            '<h2>Design',
            'Celé stránky jsou lazené do fialového designu podle požadavku klienta. Jedná se zejména o prezentaci služby 3D tisku společně s CTA tlačítky pro možnost objednání si vyhotovení vlastního 3D Modelu na zakázku. Webové stránky popisují objednávkový proces a nabízejí možnost objednat přes formulář, nebo specializovaný kalkulátor. Jsou velmi jednoduché, přehledné a tím pádem snadno čitelné.',
            '<h2>3D Kalkulátor',
            'Zadáním bylo vytvořit poptávkový formulář s možností vypočítat cenu tisku a to dle spotřeby materiálu tak, aby zákazník nemusel čekat. Kalkulátor potencionálního zákazníka provede v několika krocích různými možnostmi tisku (např: Odolný materiál, Pevnost objektu, Barva...), tak aby vyhovoval přesně jeho požadavkům. Po nahrátí 3D modelu se vypočítá cena podle zadaných parametrů. Následně zákazník odešle poptávku. Tyto kroky urychlují celý proces objednávání modelu šitého na míru a zvyšuje konverzi objednávek.'
        ],
    },
    {
        name: 'Avantgarda',
        slug: 'avantgarda',
        description: 'Solární studio',
        coverImage: '/images/Projects/avantgarda_small.webp',
        bannerImage: '/images/Projects/avantgarda_full.webp',
        logo: '/images/Projects/Logo/AvantgardaLogo.webp',
        url: 'https://solariumolomouc.cz/',
        target: '_blank',
        badges: ['Next.js'],
        pin: true,
        color: 'bg-orange-500',
        content: ['Solární studio Avantgarda v centru Olomouce. Prezentační webové stránky tvořené klientovi na míru.'],
    },
    {
        name: 'Habartovi.cz',
        slug: 'habartovi',
        description: 'Soukromé ubytování a keramická dílna',
        coverImage: '/images/Projects/habartovi_small.webp',
        bannerImage: '/images/Projects/habartovi_full.webp',
        logo: '/images/Projects/Logo/HabartoviLogo.svg',
        url: 'https://www.habartovi.cz/',
        target: '_blank',
        badges: ['WordPress', 'Next.js'],
        pin: true,
        color: 'bg-orange-400',
        content: [
            'Prezentační webové stránky rodinného ubytování v Červené Vodě, které nabízí možnost vyzkoušet si keramické řemeslo v domácí keramické dílně.',
            '<h2>Nový/starý design',
            'Starému designu byl navléknutý nový kabát. Projekt zahrnoval kompletní přestavbu a redesign veškerého obsahu, včetně modernizace loga. U tvorby nového designu byl kladen důraz na přehlednost stránek, vytvoření svižných stránek, které návštěvníka nenudí při jejich listování. Proto do designu byly zahrnuty animace pro oživení celkového dojmu. Zadáním také bylo, zachovat určité prvky původních stránek. Proto web kombinuje jak moderní přistup k tvorbě stránek, tak starší sekce, odkazující na původní atmosféru webových stránek.',
            '<h2>Vícejazyčnost',
            'Pro širší zásah a návštěvnost webu ze zahraničí, jsou stránky přeložené do 4 jazyků. To umožňuje návštěvníkům ze zahraničí číst obsah webu bez jakéhokoliv rozšíření nebo překladače.',
            '<h2>Blog',
            'Obsah webu lze editovat v administraci známého redakčního systému WordPress. Proto je celý blog uživatelsky přívětivý a správce webu může kdykoliv upravovat, přidávat či mazat nahrané příspěvky.',
        ],
    },
]
