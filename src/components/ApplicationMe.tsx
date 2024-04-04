import styles from './ApplicationMe.module.css'

interface UrlApp {
  photo: string
  deploy: string
  github: string
}
export interface AppMeType {
  id: number
  title: string
  about: string
  urlApp: UrlApp
  publishedAt?: Date
}
interface AppProps {
  appme: AppMeType
}
export function ApplicationMe ({ appme }: AppProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.boxmain}>
        <div className={styles.box1}>
          <img
            src={appme.urlApp.photo}
            alt="Imagem de a aplicativo DevPost, o DevPost es um aplicativo para que dev possam agregar post e outros possam deixar comentarios e curtir os postagem"
          />
        </div>
        <div className={styles.box2}>
          <p className={styles.text1}>{appme.title}</p>
          <p>{appme.about}</p>
          <div className={styles.space}>
            <a
              href={appme.urlApp.deploy}
              target="_blank"
              rel="noreferrer"
              className={styles.buttonviolet}
            >
              <span className={styles.textButtom}>Ver Aplicação</span>
            </a>
            <a
              href={appme.urlApp.github}
              target="_blank"
              rel="noreferrer"
              className={styles.buttonviolet}
            >
              <span className={styles.textButtom}>Ver Código</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
