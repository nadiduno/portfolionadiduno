// import { NavLink } from 'react-router-dom'
import styles from './DataScience.module.css'
import { DataProject } from './DataProject'
import { DataPython } from './DataPython'


export function DataScience() {
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

// Ideias a fazer

{/* <nav>
        <NavLink to='' title='' className={styles.button1}>
          Ver trabalhos na área de dados
        </NavLink>
      </nav> */}
      {/* IMAGENES QUADRADAS  */}
      {/* <div className={styles.box1}>
        <img
          className={styles.appdata}
          src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
          alt=''
        />
        <div className={styles.box2}>
          <img
            className={styles.appdata}
            src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
            alt=''
          />
          <div className={styles.box3}>
            <img
              className={styles.appdata}
              src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
              alt=''
            />
            <img
              className={styles.appdata}
              src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
              alt=''
            />
            <img
              className={styles.appdata}
              src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
              alt=''
            />
            <img
              className={styles.appdata}
              src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
              alt=''
            />
          </div>
        </div>
      </div>
       */}


