import { ApplicationMe, AppMeType } from "./ApplicationMe"
import styles from './DataProject.module.css'

const appsme: AppMeType[] = [
    {
        id: 1,
        title: 'Toti Lunch',
        about: 'Cardápio Digital',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App9.png?raw=true',
            deploy: 'https://toti-lunch.vercel.app/',
            github: 'https://github.com/nadiduno/totiLunchFullStack',
        },
        publishedAt: new Date('2023-08-10 13:34:00'),
    },
    {
        id: 2,
        title: 'Timer Pomodoro',
        about: 'Temporizador.',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App10.png?raw=true',
            deploy: 'https://timerpomodoro-ten.vercel.app/',
            github: 'https://github.com/nadiduno/timerpomodoro',
        },
        publishedAt: new Date('2023-06-12 13:34:00'),
    },
    {
        id: 3,
        title: 'DevPost',
        about: 'Criar postagem e comentarios',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App1.png?raw=true',
            deploy: 'https://post-nadiduno.vercel.app/',
            github: 'https://github.com/nadiduno/post',
        },
        publishedAt: new Date('2023-02-27 13:34:00'),
    },
    {
        id: 4,
        title: 'Gallery Img',
        about: 'Consumindo a API de Unsplash',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App2.png?raw=true',
            deploy: 'https://gallery-unsplash-nadiduno.vercel.app/',
            github: 'https://github.com/nadiduno/GalleryUnsplash',
        },
        publishedAt: new Date('2022-12-26 13:34:00'),
    },
    {
        id: 5,
        title: 'E-Commerce',
        about: 'Venda de canecas e camisetas',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App3.png?raw=true',
            deploy: 'https://ecommercemarmitech.vercel.app/',
            github: 'https://github.com/nadiduno/ecommercemarmitech',
        },
        publishedAt: new Date('2022-08-31 13:34:00'),
    },
    {
        id: 6,
        title: 'Finance',
        about: 'Registro de finanças pessoal',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App4.png?raw=true',
            deploy: 'https://financeperson.vercel.app/',
            github: 'https://github.com/nadiduno/financeperson',
        },
        publishedAt: new Date('2022-08-28 13:34:00'),
    },
]

// let logos: string[][] = [
//     [`${logopython}`, `${logosql}`, `${logomongodb}`, `${logojupyter}`, `${logopowerbi}`],
//     [`${logoreact}`, `${logotypescript}`, `${logostyled}`, `${logosass}`, `${logofigma}`, `${logogithub}`,]
//   ]


export function DeveloperProject() {
    return (
        <main className={styles.layout}>
            {appsme.map((appme) => {
                return <ApplicationMe key={appme.id} appme={appme} />
            })}
            
        </main>
    )
}
