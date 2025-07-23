// src/components/Header/Header.js
import React, { useState } from 'react';
import styles from './Header.module.css';

import curriculo from ".././../../public/CV-Rayran.pdf"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <a href="#home" className={styles.logo}>Rayran</a> {/* Ou seu nome completo */}
      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <ul>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre Mim</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a></li>
          <li>
            <a
              href={curriculo}
              target="_blank"
              rel="noopener noreferrer"
              download="Curriculo_Rayran.pdf"
              onClick={() => setMenuOpen(false)}
            >
              Currículo
            </a>
          </li>
          <li><a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>LinkedIn</a></li>
          <li><a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;