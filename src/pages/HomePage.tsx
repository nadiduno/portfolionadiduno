import { Sidebar } from '../components/Sidebar'
import { Presentation } from '../components/Presentation'
import styles from './HomePage.module.css'
import { DataScience } from '../components/DataScience'
import { DeveloperWeb } from '../components/DeveloperWeb'
import { TeacherTI } from '../components/TeacherTI'
import { Footer } from '../components/footer'

export function HomePage() {
    return (
        <>
            {/* <Header /> */}
            <main className={styles.container}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Presentation />
                </div>
            </main>
            <div className={styles.area}>
                {/* <Areas /> */}
                <h2>Meus trabalhos</h2>
                <DataScience />
                <DeveloperWeb />
                <TeacherTI />
            </div>
            <Footer />
        </>
    )
}