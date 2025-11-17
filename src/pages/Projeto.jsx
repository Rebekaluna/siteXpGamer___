import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link para o botão "Voltar"

// Você pode precisar importar suas imagens, dependendo da configuração do projeto
// import bannerImg from '../images/banner.png';
// import caioImg from '../images/caio.png';
// import bekaImg from '../images/beka.png';
// import juImg from '../images/Ju.png';
// import feImg from '../images/Fe.png';

function Projeto() {
  return (
    <main>
      <section id="projeto-hero" className="projeto-hero">
        <div className="container">
          <h1 className="projeto-title">Sobre o Nosso Projeto</h1>
          <p className="projeto-subtitle">Conheça a iniciativa Happy Game e a equipe XP Gamer</p>
        </div>
      </section>

      <section id="objetivo" className="objetivo-section">
        <div className="container">
          <h2 className="section-title">Objetivo</h2>
          <div className="objetivo-content">
            <div className="objetivo-text">
              <p>O Projeto Happy Game é uma iniciativa inovadora que busca proporcionar experiências imersivas e educativas para pré-adolescentes, jovens e adultos. Nosso objetivo é criar um ambiente digital envolvente onde jogadores de diferentes idades possam se divertir enquanto exploram temas relevantes do universo dos games.</p>
              <p>Com um foco em acessibilidade, entretenimento de qualidade e inovação tecnológica, o Happy Game visa conectar a comunidade gamer por meio de conteúdos interativos e notícias atualizadas. No XP GAMER, mantemos você informado sobre os lançamentos, tendências e novidades desse universo, garantindo que você tenha sempre as melhores experiências no mundo dos jogos.</p>
            </div>
            <div className="objetivo-image">
              {/* Se importar a imagem, use: src={bannerImg} */}
              <img src="../public/banner.png" alt="Happy Game Banner" className="objetivo-img" />
            </div>
          </div>
        </div>
      </section>

      <section id="pesquisa" className="pesquisa-section">
        <div className="container">
          <h2 className="section-title">Pesquisa</h2>
          <div className="pesquisa-content">
            <div className="pesquisa-text">
              <p>Foram utilizados os diversos conteúdos de HTML, CSS, JavaScript disponíveis na plataforma da FIAP para auxiliar na montagem e estruturação do site. Além de seguir os fundamentos de metodologias ágeis.</p>
              <p>Também foram realizadas pesquisas externas, com tutoriais em vídeo e manuais em texto, além da ajuda de tutores e convidados das aulas realizadas ao vivo mensalmente.</p>
            </div>
            <div className="tecnologias-grid">
              <div className="tech-card">
                <h3>HTML5</h3>
                <p>Estruturação semântica e acessível</p>
              </div>
              <div className="tech-card">
                <h3>CSS3</h3>
                <p>Design responsivo e moderno</p>
              </div>
              <div className="tech-card">
                <h3>JavaScript</h3>
                <p>Interatividade e funcionalidades</p>
              </div>
              <div className="tech-card">
                <h3>Metodologias Ágeis</h3>
                <p>Desenvolvimento iterativo e colaborativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipe" className="equipe-section">
        <div className="container">
          <h2 className="section-title">Equipe da XP Gamer!</h2>
          {/* Notei que seus cards de membro estavam fora da div "equipe-grid". Movi para dentro para manter a estrutura. */}
          <div className="equipe-grid"> 
            <div className="membro-card">
              <div className="membro-foto">
                <img src="/caio.png" alt="Caio" className="membro-img" />
              </div>
              <div className="membro-info">
                <h3>Caio</h3>
                <p>Analista de Qualidade e Desenvolvedor fullstack</p>
              </div>
            </div>

            <div className="membro-card">
              <div className="membro-foto">
                <img src="/beka.png" alt="Beka" className="membro-img" />
              </div>
              <div className="membro-info">
                <h3>Beka</h3>
                <p>Desenvolvedora fullstack</p>
              </div>
            </div>

            <div className="membro-card">
              <div className="membro-foto">
                <img src="/Ju.png" alt="Ju" className="membro-img" />
              </div>
              <div className="membro-info">
                <h3>Ju</h3>
                <p>Gestora do Projeto</p>
              </div>
            </div>

            <div className="membro-card">
              <div className="membro-foto">
                <img src="/Fe.png" alt="Fe" className="membro-img" />
              </div>
              <div className="membro-info">
                <h3>Fe</h3>
                <p>Product Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="voltar-home" className="voltar-section">
        <div className="container">
          {/* O ideal é usar o componente Link do react-router-dom para navegação interna */}
          <Link to="/" className="cta-button voltar-btn">Voltar para Home</Link>
        </div>
      </section>
    </main>
  );
}

export default Projeto;