import ReactPlayer from 'react-player';
import styles from './TeacherTI.module.css'

export function TeacherTI() {
    return (
        <div className={styles.layout}>
            <p className={styles.textmain}>Professora de TI</p>
            <p>
                Gosto de criar conteúdos para ajudar pessoas que se estão iniciando na tecnologia.
            </p>
            <hr />
            <div className={styles.wrap}>
                <ReactPlayer
                    width='100%'
                    height='100%'
                    controls
                    url='https://www.youtube.com/watch?v=EBaUEAxuC2o&t=364s'
                />
            </div>
        </div>
    )
}
