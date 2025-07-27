import { useState, useEffect } from "react";
import styles from "./Presentation.module.css";

import logoStyled from "../assets/logoStyledComponent.svg";
import logoTypeScript from "../assets/logoTypeScript.svg";
import logoSass from "../assets/logoSass.svg";
import logoFigma from "../assets/logoFigma.svg";
import logoGitBash from "../assets/logoGitBash.svg";
import logoGitHub from "../assets/logoGitHub.svg";
import logoReact from "../assets/logoReact.svg";
import logoTailwindcss from "../assets/logoTailwindcss.svg";
import logoAPI from "../assets/logoAPI.svg";

const logos: string[] = [
  `${logoReact}`,
  `${logoTypeScript}`,
  `${logoTailwindcss}`,
  `${logoStyled}`,
  `${logoSass}`,
  `${logoAPI}`,
  `${logoFigma}`,
  `${logoGitBash}`,
  `${logoGitHub}`,
];

export function PresentationFront() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Sou Front-end",
    "Sou Desenvolvedora web",
    "Sou Professora de TI",
  ];

  useEffect(() => {
    // Atualiza o índice do texto a cada 20 segundos
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <main className={styles.wrapper}>
        <div className={styles.boxmain}>
          <div className={styles.box1}>
            <h1 className={styles.textdynamic}>{texts[textIndex]}</h1>
            <p>
              Olá! Sou Nadi Duno, profissional com formação em Matemática e
              Informática pela Universidade Federal &quot;Francisco de
              Miranda&quot;, na Venezuela.
              <br />
              <br />
              Dedico-me a construir soluções usáveis e acessíveis. Minha experiência inclui o desenvolvimento de plataformas
              com a Fly Educação (flyrecursos.vercel.app), que oferece conteúdo e cursos de tecnologia para mulheres, e o 
              Toters do Bem (www.totersdobem.com.br), um projeto de impacto social para auxiliar a comunidade de Rio Grande do Sul. 
              <br />
              <br />
            </p>
            <p>Gosto {"<💜/>"} de criar soluções usáveis e acessíveis.</p>
            <span>Sou apaixonada por conectar</span>
            <span className={styles.text1}> pessoas </span>
            <span>
              através da Educação e da Tecnologia. Eu acredito no poder do conhecimento compartilhado, 
              e por isso crio conteúdo em meu blog,{" "}
              <a
                href="https://devrelnadiduno.blogspot.com/2024/03/pacotes-em-python-como-importa-los.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diario de estudo da Nadi
              </a>{" "}
              com o objetivo de ajudar e capacitar outras pessoas na jornada tecnológica.
            </span>
            <br />
            <br />
            <p className={styles.text1}>Tech</p>
            <div className={styles.wrap}>
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${logo.replace(/^.*\/?logo/, "").split(".")[0]}`}
                  title={logo.replace(/^.*\/?logo/, "").split(".")[0]}
                  className={styles.logoteach}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
