import { Sidebar } from '../components/Sidebar'
import { DataScience } from '../components/DataScience'
import { TeacherTI } from '../components/TeacherTI'
import { PresentationData } from '../components/PresentationData'

import styles from './HomePage.module.css'

export function HomeData () {
  return (
        <>
            <main className={styles.container}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <PresentationData />
                </div>
            </main>
            <div className={styles.area}>
                <h2>Meus trabalhos</h2>
                <DataScience />
                <TeacherTI />
            </div>
        </>
  )
}
