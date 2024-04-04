import styles from './DataScience.module.css'
import { DeveloperProject } from './DeveloperProject'

export function DeveloperWeb () {
  return (
        <div className={styles.layout}>
            <br />
            <br />
            <p className={styles.textmain}>Em desenvolvimento web</p>
            <p>
                Escrevo códigos acessibilidade colaborativamente e individuais
            </p>
            <hr />
            <div className={styles.wrap}>
                <DeveloperProject />
            </div>
        </div>

  )
}
