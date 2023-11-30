import { NavLink } from 'react-router-dom'
import { AppMeType } from '../components/ApplicationMe'

import logostyled from '../assets/logostyledcomponent.svg'
import logotypescript from '../assets/logotypescript.svg'
import logomongodb from '../assets/logomongodb.svg'
import logopython from '../assets/logopython.svg'
import logosql from '../assets/logosql.svg'
import logosass from '../assets/logosass.svg'
import logofigma from '../assets/logofigma.svg'
import logogithub from '../assets/logogithub.svg'
import logojupyter from '../assets/logojupyter.svg'
import logopowerbi from '../assets/logopowerbi.svg'
import logoreact from '../assets/logoreact.svg'

import styles from './Areas.module.css'

let logos: string[][] = [
  [`${logopython}`, `${logosql}`, `${logomongodb}`, `${logojupyter}`, `${logopowerbi}`],
  [`${logoreact}`, `${logotypescript}`, `${logostyled}`, `${logosass}`, `${logofigma}`, `${logogithub}`,]
]

const appsme: AppMeType[] = [
  {
    id: 0,
    title: 'Dados',
    about: 'Análise e depuração de dados, para extrair insights que podem ajudar na tomada de decisões.',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/Dados.png?raw=true',
      deploy: '/data',
      github: `${logopython}`,
    },
    publishedAt: new Date('2023-08-10 23:00:00'),
  },
  {
    id: 1,
    title: 'Front-end',
    about: 'Paixão por escrever códigos eficientes e usáveis, seguindo os critérios de acessibilidade.',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/Frontend.png?raw=true',
      deploy: '/frontend',
      github: `${logoreact}`,
    },
    publishedAt: new Date('2023-08-10 23:00:00'),
  }
]

export function Areas() {
  return (
    <div className={styles.layout}>
      <main className={styles.wrapper}>
        {appsme.map((appme) => {
          return (
            <div className={styles.boxmain}>
              <div className={styles.box1}>
                <nav>
                  <NavLink to={appme.urlApp.deploy} title={appme.title} className={styles.link2}>
                    <img src={appme.urlApp.photo} alt="Imagem das maõs de uma pessoa, com um tablet moderna" title={appme.title} />
                  </NavLink>
                </nav>
              </div>
              <div className={styles.box2}>
                <p className={styles.text1}>{appme.title}</p>
                <p>{appme.about}</p>
                <p className={styles.text2}>Tecnologias</p>

                <div className={styles.wrap}>
                  {logos[appme.id].map((index) => {
                    return (
                      <div className={styles.logoteach}>
                        <img key={`${appme.publishedAt}`} src={index} alt='' />
                      </div>)
                  })}
                </div>

                <nav>
                  <NavLink to={appme.urlApp.deploy} title={appme.title} className={styles.socialnetworks}>
                    Ver meus trabalhos
                  </NavLink>
                </nav>

                {/* <a
                  href="/data"
                  className={styles.socialnetworks}
                  rel='noreferrer'
                >
                  Ver meus trabalhos
                </a> */}

              </div>
            </div>
          )
        })}
      </ main>
    </div>

  )
}

