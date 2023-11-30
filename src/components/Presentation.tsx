import { useState, useEffect } from 'react';
import styles from './Presentation.module.css'

import logoStyled from '../assets/logoStyledComponent.svg'
import logoTypeScript from '../assets/logoTypescript.svg'
import logoMongoDB from '../assets/logoMongoDB.svg'
import logoPython from '../assets/logoPython.svg'
import logoSQL from '../assets/logoSQL.svg'
import logoSass from '../assets/logoSass.svg'
import logoFigma from '../assets/logoFigma.svg'
import logoGitBash from '../assets/logoGitBash.svg'
import logoGitHub from '../assets/logoGitHub.svg'
import logoJupyter from '../assets/logoJupyter.svg'
import logoPowerBI from '../assets/logoPowerBI.svg'
import logoReact from '../assets/logoReact.svg'



let logos: string[] = [`${logoPython}`, `${logoSQL}`, `${logoMongoDB}`, `${logoJupyter}`, `${logoPowerBI}`, `${logoReact}`, `${logoTypeScript}`, `${logoStyled}`, `${logoSass}`, `${logoFigma}`, `${logoGitBash}`, `${logoGitHub}`]



export function Presentation() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Sou Cientista de Dados', 'Sou Desenvolvedora web', 'Sou Professora de TI'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.layout}>
      <main className={styles.wrapper}>
        <div className={styles.boxmain}>
          <div className={styles.box1}>

            <h1 className={styles.textdynamic}>{texts[textIndex]}</h1>
            <p>Formada em matemática com especialização em TI pela Universidade Federal Experimental "Francisco de Miranda" na Venezuela.</p>
            <span>Apaixonada por conectar</span>
            <span className={styles.text1}> pessoas </span>
            <span>através da Educação e a Tecnologia.</span>
            <br />
            <br />
            <p>Gosto {'<💜/>'} de criar soluções usáveis e acessíveis.</p>
            <p className={styles.text1}>Tech</p>
            <div className={styles.wrap}>
              {logos.map((logo, index) => (
                
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${logo.replace(/^.*\/?logo/, '').split('.')[0]}`}
                  title={logo.replace(/^.*\/?logo/, '').split('.')[0]}
                  className={styles.logoteach}
                />
              ))}
            </div>

          </div>
        </div>
      </ main>
    </div>

  )
}




