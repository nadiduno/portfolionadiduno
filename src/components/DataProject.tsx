import { ApplicationMe, AppMeType } from "./ApplicationMe"
import styles from './DataProject.module.css'

const appsme: AppMeType[] = [
    {
        id: 1,
        title: 'Analytech',
        about: 'Dashboard de Cientistas',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/App1.png?raw=true',
            deploy: 'https://app.powerbi.com/view?r=eyJrIjoiMWYxMTVkZjUtMTI2OS00NzBmLWI1MGMtOWQ0Nzc2YzMzNzVkIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2023-06-11 20:00:00'),
    },
    {
        id: 2,
        title: 'Shoppe',
        about: 'Dashboard de Vendas',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/App5.png?raw=true',
            deploy: 'https://app.powerbi.com/view?r=eyJrIjoiOWViNzY0NTctNzhkMC00MzRlLWE1ZjEtMmNjN2IyZWY4ZWNhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2023-05-22 23:00:00'),
    },
    {
        id: 3,
        title: 'Migrantes',
        about: 'Dashboard de Empregabilidade',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/App2.png?raw=true',
            deploy: 'https://app.powerbi.com/view?r=eyJrIjoiOGVmMjlhZjctNGJjYi00Mjk0LWI4ZDItMzI1MDllOGQ4MGY5IiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2023-2-14 13:34:00'),
    },
    {
        id: 4,
        title: 'Atacadao das Bebidas',
        about: 'Dashboard de Vendas',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/App4.png?raw=true',
            deploy: 'https://app.powerbi.com/view?r=eyJrIjoiMDEwZjJkYzQtYTBmMC00ZWE3LWI5MjktZDJhZTUzODI2NjVhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2023-02-14 8:00:00'),
    },
    {
        id: 5,
        title: 'Digital Bank',
        about: 'Dashboard de Satisfação',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/App3.png?raw=true',
            deploy: 'https://app.powerbi.com/view?r=eyJrIjoiNTcyMTFmYzItMTExNS00MDMxLThkNDctOGE5N2JjNTQ4OGM0IiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2023-01-29 8:00:00'),
    },
    
    {
        id: 6,
        title: 'Vila Móveis',
        about: 'Dashboard de Vendas',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/App6.png?raw=true',
            deploy: 'https://app.powerbi.com/view?r=eyJrIjoiODE4YTEyOTAtZjY1YS00Njc0LWEyM2YtNzBhZTQxZjcxMDNkIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2022-09-23 13:34:00'),
    }
]

// let logos: string[][] = [
//     [`${logopython}`, `${logosql}`, `${logomongodb}`, `${logojupyter}`, `${logopowerbi}`],
//     [`${logoreact}`, `${logotypescript}`, `${logostyled}`, `${logosass}`, `${logofigma}`, `${logogithub}`,]
//   ]


export function DataProject() {
    return (
        <main className={styles.layout}>
            {appsme.map((appme) => {
                return <ApplicationMe key={appme.id} appme={appme} />
            })}
            
        </main>

    )
}
