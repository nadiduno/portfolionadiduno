import { Sidebar } from '../components/Sidebar'
import { Presentation } from '../components/Presentation'
import { DataScience } from '../components/DataScience'
import { DeveloperWeb } from '../components/DeveloperWeb'
import { TeacherTI } from '../components/TeacherTI'

import styles from './HomePage.module.css'
import { Footer } from '../components/Footer'

export function HomePage () {
  return (
        <>
            <main className={styles.container}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Presentation />
                </div>
            </main>
            <div className={styles.area}>
                <h2>Meus trabalhos</h2>
                <DataScience />
                <DeveloperWeb />
                <TeacherTI />
            </div>
            <Footer />
        </>
  )
}
