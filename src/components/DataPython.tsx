import { ApplicationMe, AppMeType } from "./ApplicationMe"
import styles from './DataProject.module.css'

const appsme: AppMeType[] = [
    {
        id: 1,
        title: 'Métricas e gráficos',
        about: 'Dados de cancelamento dos clientes',
        urlApp: {
            photo: 'https://github.com/nadiduno/portfolionadiduno/blob/main/src/assets/python4.png?raw=true',
            deploy: 'https://dataclient-nadiduno.streamlit.app/',
            github: 'https://github.com/nadiduno/dataClient',
        },
        publishedAt: new Date('2023-06-14 8:00:00'),
    },
    {
        id: 2,
        title: 'Simulação de Dados em Python',
        about: 'Dados fictícios de um instituto',
        urlApp: {
            photo: 'https://github.com/nadiduno/portfolionadiduno/blob/main/src/assets/python2.png?raw=true',
            deploy: 'https://github.com/nadiduno/DataCientists/blob/main/bdanalytech.ipynb',
            github: 'https://github.com/nadiduno/DataCientists',
        },
        publishedAt: new Date('2023-04-20 23:30:00'),
    },
    // {
    //     id: 3,
    //     title: 'Depuração em Python',
    //     about: 'Dados de imóveis - kaggle',
    //     urlApp: {
    //         photo: 'https://github.com/nadiduno/portfolionadiduno/blob/main/src/assets/python1.png?raw=true',
    //         deploy: 'https://github.com/nadiduno/BootCampDataScience/blob/main/bootcampciencia_dedados_alura.ipynb',
    //         github: 'https://github.com/nadiduno/BootCampDataScience/blob/main/bootcampciencia_dedados_alura.ipynb',
    //     },
    //     publishedAt: new Date('2023-04-03 08:00:00'),
    // },
    {
        id: 4,
        title: 'Modelagem com SQL',
        about: 'Dados COVID IBGE',
        urlApp: {
            photo: 'https://github.com/nadiduno/portfolionadiduno/blob/main/src/assets/Sql1.png?raw=true',
            deploy: 'https://github.com/nadiduno/BootCampDataScience/blob/main/bootcampciencia_dedados_alura.ipynb',
            github: 'https://github.com/nadiduno/BootCampDataScience/blob/main/bootcampciencia_dedados_alura.ipynb',
        },
        publishedAt: new Date('2022-06-06 20:00:00'),
    }
]

export function DataPython() {
    return (
        <main className={styles.layout}>
            {appsme.map((appme) => {
                return <ApplicationMe key={appme.id} appme={appme} />
            })}

        </main>

    )
}
