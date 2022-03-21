import './GlobalStyle/GlobalStyle.css';
import './style.js';
import { useState } from 'react';

import Row from './Components/Row';
import ProjectCard from './Components/ProjectCard';
import GitHubLink from './Components/GitHubLink';

import LogoImg from './assets/nano-tecnologia (1).png';
import MenuImg from './assets/menu-aberto.png';
import Curriculo from './assets/curriculo.pdf';
import LooperImg from './assets/bg.jpg';
import PedidoDeLanches from './assets/pedidolanches.png';
import ReactImg from './assets/react.png';
import JavaScriptImg from './assets/js.svg';
import CssImg from './assets/css3.svg';
import HtmlImg from './assets/html.svg';
import ResponsividadeImg from './assets/responsivo.png';
import FigmaImg from './assets/figma.svg';
import WppImg from './assets/wpp.png';
import InImg from './assets/in.png';
import GmailImg from './assets/gmail.png';

import { Logo, Navegation, IntroductionSection, MainImg, AboutMeSection, ProjectSection, SkillsSection, ContactSection, Footer } from './style.js';

function App() {

  const [lista, setLista] = useState(true)

  function exibirLista() {
    setLista(!lista)
    console.log("clicou")
  }

  return (
    <div className="container">

      <div id="inicio">
        <Logo src={LogoImg} className="logo-img" alt="logo"/>
      </div>


      <header>
        <Navegation>
          <img onClick={exibirLista} src={MenuImg} alt="menu"></img>
          <nav>
           {lista ? (
                <ul>
                <li><a className="nav-links" href='#inicio'>Início</a></li>
                <li><a className="nav-links" href='#projetos'>Projetos</a></li>
                <li><a className="nav-links" href='#habilidades'>Habilidades</a></li>
              </ul>
           ) : (
             ""
           )}
          </nav>
        </Navegation>
      </header>

      <main>
        <IntroductionSection>
          <h1>Olá, eu sou o <br /> Marcus!</h1>
          <p>Desenvolvedor Front-end ▪ React | JavaScript</p>
          <a href={Curriculo} download className="download-curriculo">Download CV</a>
          <GitHubLink href="https://github.com/marcusvinicius0" />
        </IntroductionSection>

        {/* <MainImg src={LooperImg} className='mainimg' alt='mainimg' /> */}

        <AboutMeSection>
          <h2>Um pouco sobre mim</h2>
          <p>Sou uma pessoa fascinada por esse universo da tecnologia. Busco sempre fazer projetos nos quais além de me  fazer gostar do processo de desenvolvimento faz eu aprender tecnologias importantes que provaram seu valor. Atualmente faço parte de um bootcamp de programação chamado DevClub onde há módulos sobre o lado do cliente e do servidor. Tecnologias como: react.js, node.js, JavaScript, CSS, HTML são abordadas na teoria e prática com exercícios e desafios. Temos nossa comunidade onde trocamos experiência, além de ajudar e guiar membros que estão começando nessa carreira.
          </p>
          <div className='second-row'>
            <Row />
          </div>
        </AboutMeSection>


        <ProjectSection>
          <h3 id="projetos">Projetos</h3>
          <div className="containers">
            <ProjectCard href={"https://github.com/marcusvinicius0/Pedido-de-lanches"} src={PedidoDeLanches} />
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
            <p>- Leia a documentação -</p>
          </div>

          <div>
            <div className="tecnologias-img">
              <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
                <img src={ReactImg} alt="react"></img>

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
          <div className="contatos">
            <a href="https://wa.me/5534988685919" target="_blank" rel="noreferrer">
              <img src={WppImg} alt="whatsapp" />
              <p>(34) 98868-5919</p>
            </a>
            <a href="https://www.linkedin.com/in/marcusviniciusbeghelisantos/" target="_blank" rel="noreferrer">
              <img src={InImg} alt="linkedin" />
              <p>www.linkedin.com/in/marcusviniciusbeghelisantos</p>
            </a>
            <a href="mailto:marcusvbegheli@gmail.com" target="_blank" rel="noreferrer">
              <img src={GmailImg} alt="gmail" />
              <p>marcusvbegheli@gmail.com</p>
            </a>
          </div>
        </ContactSection>
      </main>

      <footer>
        <Footer>
          <hr />
          <p>Desenvolvido por Marcus Vinícius | 2022</p>
        </Footer>
      </footer>

    </div>
  );
}

export default App;
