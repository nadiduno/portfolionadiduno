import { Sidebar } from '../components/Sidebar'
import { PresentationFront } from '../components/PresentationFront'
import { DeveloperWeb } from '../components/DeveloperWeb'
import { TeacherTI } from '../components/TeacherTI'

import styles from './HomePage.module.css'

export function HomeFront () {
  return (
        <>
            <main className={styles.container}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <PresentationFront />
                </div>
            </main>
            <div className={styles.area}>
                <h2>Meus trabalhos</h2>
                <DeveloperWeb />
                <TeacherTI />
            </div>
        </>
  )
}
