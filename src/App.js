import './GlobalStyle/GlobalStyle.css';
import './style.js';
// import {} from './styles.js';
import GitHubLink from './Components/GithubLink';
import Row from './Components/Row';
import ProjectCard from './Components/ProjectCard';

import LogoImg from './assets/nano-tecnologia (1).png';
import Curriculo from './assets/curriculo.pdf';
import LooperImg from './assets/Looper.svg';
import Diário from './assets/diario.png';
import ProjetoLanchesImg from './assets/pedidolanches.png';

import { Logo, Navegation, Introduction, Looper, AboutMe, ProjectSection } from './style.js';

function App() {
  return (
    <div className="container">

      <span>
        <Logo src={LogoImg} className="logo-img" alt="logo"></Logo>
      </span>


      <header>
        <Navegation>
          <nav>
            <ul>
              <li><a className="nav-links" href='#inicio'>Início</a></li>
              <li><a className="nav-links" href='#projetos'>Projetos</a></li>
              <li><a className="nav-links" href='#habilidades'>Habilidades</a></li>
            </ul>
          </nav>
        </Navegation>
      </header>

      <main>
        <Introduction>
          <h1>Olá, eu sou o <br /> Marcus!</h1>
          <p>Desenvolvedor Front-end ▪ React | JavaScript</p>
          <a href={Curriculo} download className="download-curriculo">Download CV</a>
          <GitHubLink href={"https://github.com/marcusvinicius0"} className="link-github" />
        </Introduction>

        <Looper>
          <img src={LooperImg} alt="looper" />
        </Looper>

        <AboutMe>
          <Row />
          <h2>Um pouco sobre mim</h2>
          <img src={Diário} alt="diário" />
          <p>Sou uma pessoa fascinada por esse universo da tecnologia. Busco sempre fazer projetos nos quais além de me  fazer gostar do processo de desenvolvimento faz eu aprender tecnologias importantes que provaram seu valor. Atualmente faço parte de um bootcamp de programação chamado DevClub onde há módulos sobre o lado do cliente e do servidor. Tecnologias como: react.js, node.js, JavaScript, CSS, HTML são abordadas na teoria e prática com exercícios e desafios. Temos nossa comunidade onde trocamos experiência, além de ajudar e guiar membros que estão começando nessa carreira.
          </p>
          <div className='second-row'>
            <Row />
          </div>
        </AboutMe>

        
        <ProjectSection>
          <h3>Projetos</h3>
          <div className="containers">
          <ProjectCard src={ProjetoLanchesImg} />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          </div>
        </ProjectSection>


      </main>
    </div>
  );
}

export default App;
