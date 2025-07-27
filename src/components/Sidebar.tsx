import styles from './Sidebar.module.css'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.titleside}>
          <div className={styles.hand}>{'👋'}</div>
          <span className={styles.name1}>Eu sou</span>
          <span className={styles.name2}>Nadi Duno</span>
        </div>
        <div className={styles.wrapper}>

          <div>
            <a
              href="https://www.linkedin.com/pulse/boa-pr%25C3%25A1ctica-ao-declarar-vari%25C3%25A1veis-nadi-duno/?trackingId=%2FlmGTflHTPGjt5KlofYHKQ%3D%3D"
              target="_blank"
              className={styles.socialnetworks}
              rel="noreferrer"
            >
              <img
                className={styles.logosocial}
                src={'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/Linkedin1.svg?raw=true'}
                // alt=""
                title='Linkedin'
              />

            </a>
            <a
              href="https://instagram.com/nadiduno.dev/"
              target="_blank"
              className={styles.socialnetworks}
              rel="noreferrer"
            >
              <img
                className={styles.logosocial}
                src={'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/Instagram1.svg?raw=true'}
              // alt=""
              title='Instagram'
              />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=584122904297&text&type=phone_number&app_absent=0"
              target="_blank"
              className={styles.socialnetworks}
              rel="noreferrer"
            >
              <img
                className={styles.logosocial}
                src={'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/Whatsapp.svg?raw=true'}
                // alt=""
                title='Whatsapp'
              />
            </a>
          </div>

          <img
            className={styles.cover}
            src="https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true"
            alt="Foto de Nadi Duno, Nadi é uma mulher, parda de cabelo curto, a foto esta em branco e preto, com um circulo verde neon com codigos de programação"
          />

        </div>
      </div>
    </aside>
  )
}
