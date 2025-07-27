import { useState, useEffect } from "react";
import styles from "./Presentation.module.css";

import logoMongoDB from "../assets/logoMongoDB.svg";
import logoPython from "../assets/logoPython.svg";
import logoSQL from "../assets/logoSQL.svg";
import logoGitBash from "../assets/logoGitBash.svg";
import logoGitHub from "../assets/logoGitHub.svg";
import logoJupyter from "../assets/logoJupyter.svg";
import logoPowerBI from "../assets/logoPowerBI.svg";

const logos: string[] = [
  `${logoPython}`,
  `${logoSQL}`,
  `${logoMongoDB}`,
  `${logoJupyter}`,
  `${logoPowerBI}`,
  `${logoGitBash}`,
  `${logoGitHub}`,
];

export function PresentationData() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Sou analista de Dados",
    "Sou Professora de Matemática",
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
              Estou em transição para a Análise de
              Dados, onde busco aplicar minha paixão por análises e insights na
              resolução de problemas.
              <br />
              <br />
              Procuro oportunidades para aprimorar minhas habilidades em Python
              para tratamento e análise de dados e, assim, contribuir para
              decisões estratégicas baseadas em dados.
              <br />
              <br />
            </p>
            <span>Sou apaixonada por conectar</span>
            <span className={styles.text1}> pessoas </span>
            <span>
              através da Educação e da Tecnologia. Essa paixão me impulsiona não
              apenas a desenvolver soluções, mas também a comunicar e
              simplificar conceitos complexos. Você pode encontrar mais sobre
              minhas ideias e conteúdos em meu blog,{' '} 
              <a
                href="https://devrelnadiduno.blogspot.com/2024/03/pacotes-em-python-como-importa-los.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diario de estudo da Nadi
              </a>
              {' '}onde busco ajudar e inspirar outras pessoas.
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
