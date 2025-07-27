import styles from "./DataScience.module.css";
import { DeveloperProject } from "./DeveloperProject";
import { DeveloperProjectVoluntary } from "./DeveloperProjectVoluntary";

export function DeveloperWeb() {
  return (
    <div className={styles.layout}>
      <br />
      <br />
      <p className={styles.textmain}>Em desenvolvimento web</p>
      <p>
        Explore meus projetos abaixo e entre em{" "}
        <a
          href="https://api.whatsapp.com/send/?phone=584122904297&text&type=phone_number&app_absent=0"
          target="_blank"
          className={styles.socialnetworks}
          rel="noreferrer"
        >
          contato
        </a>
        . Ficaria feliz em discutir como minhas habilidades podem agregar valor
        à sua equipe.
      </p>
      <hr />
      <p className={styles.textmain}>Trabalho Voluntário - Case Real</p>
      <p>
        Tive a honra de atuar em equipes multidisciplinares e internacionais,
        desenvolvendo plataformas que visam auxiliar comunidades mais
        vulneráveis.
        <br />
        <br />
        Em ambos os projetos, exerci o papel de líder da equipe de frontend. No projeto Fly Flex,
        fui além da codificação, teve a oportunidade de desenvolver o design no
        Figma, o que agregou um valor significativo à parte visual e à
        usabilidade do produto. Essa experiência me permitiu ter uma visão 360º
        do ciclo de desenvolvimento, desde a concepção até a entrega.
      </p>
      <div className={styles.wrap}>
        <DeveloperProjectVoluntary />
      </div>
      <hr />
      <p className={styles.textmain}>Trabalho Pessoais - Case Estudo</p>
      <div className={styles.wrap}>
        <DeveloperProject />
      </div>
    </div>
  );
}
