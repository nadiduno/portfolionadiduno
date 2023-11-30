import { Sidebar } from '../components/Sidebar'
import styles from './HomePage.module.css'

export function HomePage() {
    return (
        <>
            {/* <Header /> */}
            <main className={styles.container}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    Presentação
                </div>
            </main>
            <div className={styles.area}>
                Areas
            </div>

        </>
    )
}