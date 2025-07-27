import { ApplicationMe, type AppMeType } from './ApplicationMe'
import styles from './DataProject.module.css'

const appsme: AppMeType[] = [
   {
    id: 1,
    title: "Fly Flex",
    about: "Este é um projeto de código aberto e voluntário, desenvolvido para a ONG Fly Educação, que impacta a vida de mais de 7.580 pessoas em situação de vulnerabilidade social.",
    urlApp: {
      photo:
        "https://github.com/nadiduno/portfolionadiduno/blob/main/src/assets/App8.png?raw=true",
      deploy: "https://flyrecursos.vercel.app/",
      github: "https://github.com/nadiduno/flyrecursos",
    },
    publishedAt: new Date("2025-08-10 13:34:00"),
    isNew: true
  },
  {
    id: 2,
    title: "Toter do Bem",
    about:
      "Plataforma que conecta voluntários e instituições para fortalecer o Rio Grande do Sul. Visando oferecer ajuda prática e esperança àqueles afetados pelas inundações no RS.",
    urlApp: {
      photo:
        "https://github.com/nadiduno/portfolionadiduno/blob/main/src/assets/App9.png?raw=true",
      deploy: "https://www.totersdobem.com.br/",
      github: "https://github.com/Dart1516/projeto-toti-2",
    },
    publishedAt: new Date("2024-06-12 13:34:00"),
    isNew: false
  }
]

export function DeveloperProjectVoluntary () {
  return (
        <main className={styles.layout}>
            {appsme.map((appme) => {
              return <ApplicationMe key={appme.id} appme={appme} />
            })}

        </main>

  )
}
