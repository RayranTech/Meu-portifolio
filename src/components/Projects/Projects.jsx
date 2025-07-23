import React from 'react';
import styles from './Projects.module.css';

import projetoZingen from "../../assets/projeto-zingen.png"
import projetoAdivinhe from "../../assets/projeto-adivinhe.png"
import projetoTotoList from "../../assets/projeto-todolist.png"

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Projeto Zingen",
      description: " Landing page moderna e responsiva de um aplicativo de karaokê, desenvolvida integralmente com HTML e CSS. Destaque para um design intuitivo, seções claras de funcionalidades e planos, e otimização para diversas telas",
      image: projetoZingen,
      technologies: ["HTML", "css"],
      githubLink: "https://rayrantech.github.io/Projeto-Zingen/",
      demoLink: "https://seu-demolink.com/projeto-1"
    },
    {
      id: 2,
      title: "Projeto Adivinhe",
      description: " Um jogo clássico de adivinhação, reimaginado com React e TypeScript para uma lógica robusta e escalável, e CSS moderno para uma interface fluida e intuitiva.",
      image: projetoAdivinhe,
      technologies: ["React", "Typescript", "CSS"],
      githubLink: "https://rayrantech.github.io/Jogo-adivinhar/"
    },
    {
      id: 3,
      title: "Projeto Todolist",
      description: "Um gerenciador de tarefas intuitivo, desenvolvido com React para uma interface dinâmica e JavaScript para lógica robusta, e estilizado com CSS moderno para uma experiência de usuário limpa e eficiente.",
      image: projetoTotoList,
      technologies: ["React", "Javascript", "CSS"],
      githubLink: "https://rayran-front-end.github.io/Todo-list-react/"
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Meus Projetos</h2>
      <div className={styles.projectGrid}>
        {projectsData.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                GitHub <i className="fab fa-github"></i>
              </a>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.demoButton}`}>
                  Demo <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;