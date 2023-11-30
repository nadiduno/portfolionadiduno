import styles from './DataScience.module.css'
import { DeveloperProject } from './DeveloperProject'


export function DeveloperWeb() {
    return (
        <div className={styles.layout}>
            <p className={styles.textmain}>Em desenvolvimento web</p>
            <p>
                Escrevo códigos acessibilidade colaborativamente e individuais
            </p>
            {/* <p>
                Ajudo pessoas que estão tendo os primeiros contatos com  a tecnologia, por isso tenho criado diversos productos como resultado destas trocas.
            </p> */}
            <hr />
            <div className={styles.wrap}>
                <DeveloperProject />
            </div>
        </div>

    )
}