import React from 'react';
// Importe as imagens se estiver usando um bundler como Vite ou Webpack para otimização
// Exemplo:
// import bannerImage from '../images/banner.png';
// import gta6Image from '../images/gta-6.jpeg';
// ... e assim por diante para cada imagem
// Ou, se as imagens estiverem na pasta 'public', os caminhos relativos funcionarão diretamente.

function Home() {
  // Você pode adicionar funções como handleNonFunctionalClick aqui, se necessário
  const handleNonFunctionalClick = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h2>As Melhores Notícias do Mundo dos Games</h2>
          <p>Fique por dentro dos lançamentos, reviews e novidades do universo gaming</p>
          {/* Usando o handler para o link não funcional */}
          <a href="#news" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#news").scrollIntoView({ behavior: "smooth" });
  }}className="cta-button">Ver Notícias</a>
        </div>
        <div className="hero-image">
          {/* Caminho da imagem mantido. Se precisar importar: src={bannerImage} */}
          <img src="/banner.png" alt="Banner Gaming" className="hero-img" />
        </div>
      </section>

      <section id="featured" className="featured">
        <div className="container">
          <h2 className="section-title">Destaques</h2>
          <div className="featured-grid">
            <article className="featured-card main-featured gta-card">
              <div className="card-image">
                <img src="gta-6.jpeg" alt="GTA 6" />
              </div>
              <div className="card-content">
                <span className="category">Lançamento</span>
                <h3>GTA 6: Trailer Oficial Revela Detalhes Impressionantes</h3>
                <p>Rockstar Games finalmente revelou o tão aguardado trailer do GTA 6, mostrando gráficos revolucionários e uma nova história envolvente.</p>
                <div className="card-meta">
                  <span className="date">15 Dez 2024</span>
                  <span className="read-time">5 min leitura</span>
                </div>
              </div>
            </article>

            <article className="featured-card zelda-card">
              <div className="card-image">
                <img src="/zelda.avif" alt="Zelda" />
              </div>
              <div className="card-content">
                <span className="category">Review</span>
                <h3>Zelda: Tears of the Kingdom - Uma Obra Prima</h3>
                <p>Análise completa do mais recente título da franquia Zelda, que redefine os limites da exploração em mundo aberto.</p>
                <div className="card-meta">
                  <span className="date">12 Dez 2024</span>
                  <span className="read-time">8 min leitura</span>
                </div>
              </div>
            </article>

            <article className="featured-card nintendo-card">
              <div className="card-image">
                <img src="/switch 2.png" alt="Nintendo Switch 2" />
              </div>
              <div className="card-content">
                <span className="category">Rumor</span>
                <h3>Nintendo Switch 2: Especificações Vazadas</h3>
                <p>Novas informações sobre o próximo console da Nintendo sugerem uma potência significativamente maior que o Switch atual.</p>
                <div className="card-meta">
                  <span className="date">10 Dez 2024</span>
                  <span className="read-time">3 min leitura</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="news" className="news">
        <div className="container">
          <h2 className="section-title">Últimas Notícias</h2>
          <div className="news-grid">
            <article className="news-card">
              <div className="card-image">
                <img src="/elden.jpeg" alt="Elden Ring" />
              </div>
              <div className="card-content">
                <span className="category">DLC</span>
                <h3>Elden Ring: Shadow of the Erdtree - Data de Lançamento</h3>
                <p>FromSoftware anuncia a data oficial para o lançamento do DLC mais aguardado do ano.</p>
                <div className="card-meta">
                  <span className="date">8 Dez 2024</span>
                  <span className="read-time">4 min leitura</span>
                </div>
              </div>
            </article>

            <article className="news-card">
              <div className="card-image">
                <img src="/baldurs.jpeg" alt="Baldur's Gate 3" />
              </div>
              <div className="card-content">
                <span className="category">Prêmio</span>
                <h3>Baldur's Gate 3 Vence Game of the Year 2024</h3>
                <p>Larian Studios leva o prêmio máximo no The Game Awards com seu RPG épico.</p>
                <div className="card-meta">
                  <span className="date">7 Dez 2024</span>
                  <span className="read-time">6 min leitura</span>
                </div>
              </div>
            </article>

            <article className="news-card">
              <div className="card-image">
                <img src="/astro.jpg" alt="Astro's Playroom" />
              </div>
              <div className="card-content">
                <span className="category">Atualização</span>
                <h3>Astro's Playroom: Nova DLC Gratuita Anunciada</h3>
                <p>Sony anuncia uma expansão gratuita para o aclamado jogo de plataforma do PlayStation 5.</p>
                <div className="card-meta">
                  <span className="date">5 Dez 2024</span>
                  <span className="read-time">7 min leitura</span>
                </div>
              </div>
            </article>

            <article className="news-card">
              <div className="card-image">
                <img src="/psplus.jpg" alt="PlayStation Plus" />
              </div>
              <div className="card-content">
                <span className="category">Serviço</span>
                <h3>PlayStation Plus: Jogos de Dezembro Revelados</h3>
                <p>Sony anuncia a lista completa de jogos gratuitos para assinantes do PS Plus este mês.</p>
                <div className="card-meta">
                  <span className="date">3 Dez 2024</span>
                  <span className="read-time">3 min leitura</span>
                </div>
              </div>
            </article>

            <article className="news-card">
              <div className="card-image">
                <img src="/doom.jpg" alt="DOOM" />
              </div>
              <div className="card-content">
                <span className="category">Anúncio</span>
                <h3>DOOM: Eternal 2 Confirmado em Desenvolvimento</h3>
                <p>id Software confirma que está trabalhando na sequência do aclamado DOOM: Eternal.</p>
                <div className="card-meta">
                  <span className="date">1 Dez 2024</span>
                  <span className="read-time">5 min leitura</span>
                </div>
              </div>
            </article>

            <article className="news-card">
              <div className="card-image">
                <img src="/pokemon-s-pikachu-atop-a-background-of-lego-bricks.avif" alt="Pokémon LEGO" />
              </div>
              <div className="card-content">
                <span className="category">Colaboração</span>
                <h3>Pokémon e LEGO: Nova Linha de Produtos Anunciada</h3>
                <p>Nintendo e LEGO se unem para criar uma coleção exclusiva de sets Pokémon.</p>
                <div className="card-meta">
                  <span className="date">30 Nov 2024</span>
                  <span className="read-time">4 min leitura</span>
                </div>
              </div>
            </article>

            <article className="news-card">
              <div className="card-image">
                <img src="/kingdom.png" alt="Kingdom Hearts" />
              </div>
              <div className="card-content">
                <span className="category">Anúncio</span>
                <h3>Kingdom Hearts 4: Primeiro Trailer Revelado</h3>
                <p>Square Enix finalmente revela o primeiro trailer do tão aguardado Kingdom Hearts 4.</p>
                <div className="card-meta">
                  <span className="date">28 Nov 2024</span>
                  <span className="read-time">6 min leitura</span>
                </div>
              </div>
            </article>

            <article className="news-card">
              <div className="card-image">
                <img src="/AC-Shadows-1-1044x594.png" alt="Assassin's Creed Shadows" />
              </div>
              <div className="card-content">
                <span className="category">Lançamento</span>
                <h3>Assassin's Creed Shadows: Data de Lançamento Confirmada</h3>
                <p>Ubisoft anuncia a data oficial para o lançamento do novo Assassin's Creed no Japão feudal.</p>
                <div className="card-meta">
                  <span className="date">25 Nov 2024</span>
                  <span className="read-time">5 min leitura</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <div className="container">
          <h2 id="reviews" className="section-title">Reviews em Destaque</h2>
          <div className="reviews-grid">
            <article className="review-card">
              <div className="card-image">
                <img src="/witcher.jpeg" alt="The Witcher" />
              </div>
              <div className="card-content">
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="score">9.5/10</span>
                </div>
                <h3>The Witcher 4: Uma Nova Era</h3>
                <p>CD Projekt Red reinventa a franquia com gráficos de última geração e narrativa envolvente.</p>
                {/* Usando o handler para o link não funcional */}
                <a href="#" onClick={handleNonFunctionalClick} className="read-more">Ler Review Completo</a>
              </div>
            </article>

            <article className="review-card">
              <div className="card-image">
                <img src="/sekiro.jpg" alt="Sekiro" />
              </div>
              <div className="card-content">
                <div className="rating">
                  <span className="stars">★★★★☆</span>
                  <span className="score">8.8/10</span>
                </div>
                <h3>Sekiro: Shadows Die Twice - Remaster</h3>
                <p>Versão remasterizada traz melhorias visuais e jogabilidade refinada para uma experiência ainda melhor.</p>
                {/* Usando o handler para o link não funcional */}
                <a href="#" onClick={handleNonFunctionalClick} className="read-more">Ler Review Completo</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Seção Game of the Year */}
      <section id="game-of-year" className="game-of-year">
        <div className="container">
          <div className="game-of-year-content">
            <p className="game-of-year-intro">Você sabia que todo ano ocorre uma votação envolvendo jogadores, empresas e jornalistas para escolher os melhores jogos do ano?</p>
            <p className="game-of-year-intro">Confira abaixo quais foram os jogos ganhadores de jogo do ano desde 2014 de acordo com o The Game Awards, maior evento da categoria!</p>

            <div className="game-of-year-table-container">
              <table className="game-of-year-table">
                <thead>
                  <tr>
                    <th>ANO</th>
                    <th>JOGO</th>
                    <th>GENÊRO</th>
                    <th>EMPRESA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2014</td>
                    <td>Dragon Age: Inquisition</td>
                    <td>RPG</td>
                    <td>BioWare</td>
                  </tr>
                  <tr>
                    <td>2015</td>
                    <td>The Witcher 3: Wild Hunt</td>
                    <td>RPG</td>
                    <td>CD Projekt Red</td>
                  </tr>
                  <tr>
                    <td>2016</td>
                    <td>Overwatch</td>
                    <td>FPS</td>
                    <td>Blizzard</td>
                  </tr>
                  <tr>
                    <td>2017</td>
                    <td>The Legend of Zelda: Breath of the Wild</td>
                    <td>Ação e aventura</td>
                    <td>Nintendo</td>
                  </tr>
                  <tr>
                    <td>2018</td>
                    <td>God of War</td>
                    <td>Ação e aventura</td>
                    <td>Santa Monica Studio</td>
                  </tr>
                  <tr>
                    <td>2019</td>
                    <td>Sekiro: Shadow Dies Twice</td>
                    <td>Ação e aventura</td>
                    <td>FromSoftware</td>
                  </tr>
                  <tr>
                    <td>2020</td>
                    <td>The Last of Us: Part II</td>
                    <td>Ação e aventura</td>
                    <td>Naughty Dog</td>
                  </tr>
                  <tr>
                    <td>2021</td>
                    <td>It Takes Two</td>
                    <td>Ação e aventura</td>
                    <td>Hazelight Studio</td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>Elden Ring</td>
                    <td>RPG</td>
                    <td>FromSoftware</td>
                  </tr>
                  <tr>
                    <td>2023</td>
                    <td>Baldur's Gate</td>
                    <td>RPG</td>
                    <td>Larian Studios</td>
                  </tr>
                  <tr>
                    <td>2024</td>
                    <td>Astrobot</td>
                    <td>Plataforma</td>
                    <td>Team Asobi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="game-of-year-source">Fonte: Wikipedia.com.br</p>
          </div>
        </div>
      </section>

      <section id="newsletter" className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Fique Por Dentro!</h2>
            <p>Receba as últimas notícias e reviews diretamente no seu email</p>
            <form className="newsletter-form">
              {/* input vazio precisa de fechamento /> */}
              <input type="email" placeholder="Seu email" required />
              <button type="submit" className="cta-button">Inscrever-se</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;