import { Presentation } from '../components/Presentation'
import { Sidebar } from '../components/Sidebar'
import styles from './HomePage.module.css'

export function HomePage() {
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
                Areas
            </div>

        </>
    )
}