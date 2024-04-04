// import { NavLink } from 'react-router-dom'
import styles from './DataScience.module.css'
import { DataProject } from './DataProject'
import { DataPython } from './DataPython'

export function DataScience () {
  return (
    <div className={styles.layout}>
      <p className={styles.textmain}>Em dados</p>
      <p>
        Exploro, trato e depuro dados, para extrair insights que possam ajudar na tomada de decisões.
      </p>
      <hr />
      <div className={styles.wrap}>
        <DataPython />
        <DataProject />
      </div>
    </div>

  )
}
