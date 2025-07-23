import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

import TypewriterText from './components/TypewriterText/TyperwriterText'

import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <h1>Bem-vindo ao Meu Portfólio Moderno</h1>
        <TypewriterText /> 
        <div className="social-links" style={{ marginTop: '20px' }}>
          <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', fontSize: '2em' }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', fontSize: '2em' }}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <About />
      <Projects />

      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: 'var(--secondary-purple)', color: 'var(--text-light)' }}>
        <p>&copy; {new Date().getFullYear()} Rayran. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;