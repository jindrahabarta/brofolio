import { Metadata } from 'next'
import PageContent from './_components/PageContent'

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params

    const t = (await import(`../../../i18n/locales/${locale}/projects.json`))
        .default

    return {
        title: t.projects.seo.title,
        description: t.projects.seo.description,
    }
}

const Projects = () => {
    return (
        <div className='bg-black'>
            <PageContent />
            <section className='projectsListItem py-24 text-white'>
                <p className='font-charm text-center text-[clamp(2vw,7vw,2rem)]'>
                    ...
                </p>
            </section>
        </div>
        // <div className='pt-[7.5rem] text-white min-h-screen bg-black overflow-hidden'>
        //     <ProjectsList></ProjectsList>

        //     <section className='projectsListItem pt-24 pb-32'>
        //         <p className='font-charm text-center text-[clamp(2vw,7vw,2rem)]'>
        //             ...Na dobré se musí počkat :&#41;
        //         </p>
        //     </section>
        // </div>
    )
}

export default Projects
