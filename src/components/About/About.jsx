import React from 'react';
import styles from './About.module.css';
import minhaFoto from "../../assets/foto-rayran.jpg"

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>Sobre Mim</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Olá! Sou Rayran, um desenvolvedor front-end apaixonado por criar experiências digitais intuitivas e visualmente atraentes. Minha jornada no mundo da programação começou com a curiosidade de transformar ideias em realidade.</p>
          <p>Ao longo dos anos, me aprofundei em tecnologias como React, JavaScript, TypeScript, HTML e CSS, sempre buscando as melhores práticas para construir aplicações robustas e escaláveis. Adoro o desafio de resolver problemas complexos e ver o impacto direto do meu trabalho no dia a dia das pessoas.</p>
          <p>Quando não estou codificando, gosto de [seu hobby, ex: ler livros de ficção científica, jogar videogames, explorar trilhas].</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={minhaFoto} alt="Sua Foto de Perfil" className={styles.profilePic} />
        </div>
      </div>
    </section>
  );
}

export default About;