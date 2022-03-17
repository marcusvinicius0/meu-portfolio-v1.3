import './GlobalStyle/GlobalStyle.css';
import './style.js';
import './style.css';

import GitHubLink from './Components/GithubLink';
import Row from './Components/Row';
import ProjectCard from './Components/ProjectCard';

import LogoImg from './assets/nano-tecnologia (1).png';
import Curriculo from './assets/curriculo.pdf';
import LooperImg from './assets/programming.png';
import Diário from './assets/diario.png';
import ReactImg from './assets/react.png';
import JavaScriptImg from './assets/js.svg';
import CssImg from './assets/css3.svg';
import HtmlImg from './assets/html.svg';
import ResponsividadeImg from './assets/responsivo.png';
import FigmaImg from './assets/figma.svg';
import WppImg from './assets/wpp.png';
import InImg from './assets/in.png';
import GmailImg from './assets/gmail.png';

import { Logo, Navegation, IntroductionSection, AboutMeSection, ProjectSection, SkillsSection, ContactSection } from './style.js';

function App() {

  return (
    <div className="container">

      <div>
        <Logo src={LogoImg} className="logo-img" alt="logo"></Logo>
      </div>


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
        <IntroductionSection>
          <h1 id="inicio">Olá, eu sou o <br /> Marcus!</h1>
          <p>Desenvolvedor Front-end ▪ React | JavaScript</p>
          <a href={Curriculo} download className="download-curriculo">Download CV</a>
          <GitHubLink href={"https://github.com/marcusvinicius0"} className="link-github" />
        </IntroductionSection>

          <img src={LooperImg} className='mainimg' alt='mainimg'></img>
      
        <AboutMeSection>
          <h2>Um pouco sobre mim</h2>
          <img src={Diário} alt="diário" />
          <p>Sou uma pessoa fascinada por esse universo da tecnologia. Busco sempre fazer projetos nos quais além de me  fazer gostar do processo de desenvolvimento faz eu aprender tecnologias importantes que provaram seu valor. Atualmente faço parte de um bootcamp de programação chamado DevClub onde há módulos sobre o lado do cliente e do servidor. Tecnologias como: react.js, node.js, JavaScript, CSS, HTML são abordadas na teoria e prática com exercícios e desafios. Temos nossa comunidade onde trocamos experiência, além de ajudar e guiar membros que estão começando nessa carreira.
          </p>
          <div className='second-row'>
            <Row />
          </div>
        </AboutMeSection>


        <ProjectSection>
          <h3 id="projetos">Projetos</h3>
          <div className="containers">
            <ProjectCard src={GitHubLink} />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <hr />
        </ProjectSection>

        <SkillsSection id="habilidades">
          <div>
            <h4>Habilidades</h4>
          </div>

          <div>
            <div className="tecnologias-img">
              <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
                <img src={ReactImg} alt="react" />
              </a>

              <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img src={JavaScriptImg} alt="javascript" />
              </a>

              <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer">
                <img src={CssImg} alt="css" />
              </a>
            </div>

            <div className="tecnologias-img1" >
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer">
                <img src={HtmlImg} alt="html" />
              </a>
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries" target="_blank" rel="noreferrer">
                <img src={ResponsividadeImg} className="mediaqueries" alt="responsividade" />
              </a>
              <a href="https://www.hostgator.com.br/blog/figma-descubra-o-passo-a-passo-para-usar-esta-ferramenta/" target="_blank" rel="noreferrer">
                <img src={FigmaImg} alt="figma" />
              </a>
            </div>
          </div>

          <hr />
        </SkillsSection>

        <ContactSection>
          <h5>Entre em contato comigo:</h5>
         <div>
         <a href="https://wa.me/5534988685919" target="_blank" rel="noreferrer">
            <img src={WppImg} alt="whatsapp" />
          </a>
          <a href="https://www.linkedin.com/in/marcusviniciusbeghelisantos/" target="_blank" rel="noreferrer">
            <img src={InImg} alt="linkedin" />
          </a>
          <a href="mailto:marcusvbegheli@gmail.com" target="_blank" rel="noreferrer">
            <img src={GmailImg} alt="gmail" />
          </a>
         </div>

        </ContactSection>
      </main>
    </div>
  );
}

export default App;
