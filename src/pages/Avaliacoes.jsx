import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Avaliacoes() {
  // Estado para controlar se o modal está aberto ou fechado
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para guardar as informações do jogo selecionado para o modal
  const [selectedGame, setSelectedGame] = useState({ title: '', image: '' });

  // Função para abrir o modal com os dados do jogo clicado
  const abrirModal = (title, image) => {
    setSelectedGame({ title, image });
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setIsModalOpen(false);
  };

  // Função para salvar a avaliação (aqui você colocaria a lógica de salvamento)
  const salvarAvaliacao = () => {
    // Lógica para salvar os dados do formulário...
    console.log("Avaliação salva!");
    fecharModal(); // Fecha o modal após salvar
  };

  return (
    // Um Fragment (<>) é usado para agrupar o <main> e o modal
    <>
      <main>
        <section id="avaliacoes-hero" className="avaliacoes-hero">
          <div className="container">
            <h1 className="avaliacoes-title">Avalie Jogos Populares</h1>
            <p className="avaliacoes-subtitle">Compartilhe sua opinião sobre os melhores jogos</p>
          </div>
        </section>

        <section id="jogos-grid" className="jogos-section">
          <div className="container">
            <div className="jogos-grid">
              {/* GTA V */}
              <div className="jogo-card" data-jogo="Grand Theft Auto V">
                <div className="jogo-imagem">
                  <img src="/gta-v-001.jpg" alt="Grand Theft Auto V" className="jogo-img" />
                </div>
                <div className="jogo-info">
                  <h3>Grand Theft Auto V</h3>
                  <p className="nota-critica">Nota da crítica: 4.47</p>
                  <button className="avaliar-btn" onClick={() => abrirModal('Grand Theft Auto V', '../public/gta-v-001.jpg')}>Avaliar</button>
                </div>
              </div>

              {/* The Witcher 3 */}
              <div className="jogo-card" data-jogo="The Witcher 3: Wild Hunt">
                <div className="jogo-imagem">
                  <img src="../public/witcher.jpeg" alt="The Witcher 3: Wild Hunt" className="jogo-img" />
                </div>
                <div className="jogo-info">
                  <h3>The Witcher 3: Wild Hunt</h3>
                  <p className="nota-critica">Nota da crítica: 4.64</p>
                  <button className="avaliar-btn" onClick={() => abrirModal('The Witcher 3: Wild Hunt', '../public/witcher.jpeg')}>Avaliar</button>
                </div>
              </div>

              {/* Portal 2 */}
              <div className="jogo-card" data-jogo="Portal 2">
                <div className="jogo-imagem">
                  <img src="../public/ppppp.jpg" alt="Portal 2" className="jogo-img" />
                </div>
                <div className="jogo-info">
                  <h3>Portal 2</h3>
                  <p className="nota-critica">Nota da crítica: 4.58</p>
                  <button className="avaliar-btn" onClick={() => abrirModal('Portal 2', '../public/ppppp.jpg')}>Avaliar</button>
                </div>
              </div>

              {/* Adicione os outros cards de jogos aqui, seguindo o mesmo padrão... */}
			<div className="jogo-card" data-jogo="Counter-Strike: Global Offensive">
                <div className="jogo-imagem">
                  <img src="../public/counterstrike.jpg" alt="Counter-Strike: Global Offensive" className="jogo-img" />
                </div>
                <div className="jogo-info">
                  <h3>Counter-Strike: Global Offensive</h3>
                  <p className="nota-critica">Nota da crítica: 4.58</p>
                  <button className="avaliar-btn" onClick={() => abrirModal('Portal 2', '../public/doom.jpg')}>Avaliar</button>
                </div>
              </div>

			  {/* -- Jogo Card: Tomb Raider (2013) -- */}
			<div className="jogo-card" data-jogo="Tomb Raider (2013)">
			<div className="jogo-imagem">
				<img src="../public/tomb-raider-2013-art.png" alt="Tomb Raider (2013)" className="jogo-img" />
			</div>
			<div className="jogo-info">
				<h3>Tomb Raider (2013)</h3>
				<p className="nota-critica">Nota da crítica: 4.35</p>
				{/* Corrigido o caminho da imagem para a do próprio jogo */}
				<button className="avaliar-btn" onClick={() => abrirModal('Tomb Raider (2013)', '../public/tomb-raider-2013-art.png')}>Avaliar</button>
			</div>
			</div>

			{/* -- Jogo Card: Portal -- */}
			<div className="jogo-card" data-jogo="Portal">
			<div className="jogo-imagem">
				<img src="../public/portal.png" alt="Portal" className="jogo-img" />
			</div>
			<div className="jogo-info">
				<h3>Portal</h3>
				<p className="nota-critica">Nota da crítica: 4.61</p>
				{/* Corrigido o caminho da imagem */}
				<button className="avaliar-btn" onClick={() => abrirModal('Portal', '../public/portal.png')}>Avaliar</button>
			</div>
			</div>

			{/* -- Jogo Card: Left 4 Dead 2 -- */}
			<div className="jogo-card" data-jogo="Left 4 Dead 2">
			<div className="jogo-imagem">
				<img src="../public/leftdead.png" alt="Left 4 Dead 2" className="jogo-img" />
			</div>
			<div className="jogo-info">
				<h3>Left 4 Dead 2</h3>
				<p className="nota-critica">Nota da crítica: 4.28</p>
				{/* Corrigido o caminho da imagem */}
				<button className="avaliar-btn" onClick={() => abrirModal('Left 4 Dead 2', '../public/leftdead.png')}>Avaliar</button>
			</div>
			</div>

			{/* -- Jogo Card: The Elder Scrolls V: Skyrim -- */}
			<div className="jogo-card" data-jogo="The Elder Scrolls V: Skyrim">
			<div className="jogo-imagem">
				<img src="../public/theelder.png" alt="The Elder Scrolls V: Skyrim" className="jogo-img" />
			</div>
			<div className="jogo-info">
				<h3>The Elder Scrolls V: Skyrim</h3>
				<p className="nota-critica">Nota da crítica: 4.55</p>
				{/* Corrigido o caminho da imagem */}
				<button className="avaliar-btn" onClick={() => abrirModal('The Elder Scrolls V: Skyrim', '../public/theelder.png')}>Avaliar</button>
			</div>
			</div>

			{/* -- Jogo Card: Red Dead Redemption 2 -- */}
			<div className="jogo-card" data-jogo="Red Dead Redemption 2">
			<div className="jogo-imagem">
				<img src="../public/reddead.png" alt="Red Dead Redemption 2" className="jogo-img" />
			</div>
			<div className="jogo-info">
				<h3>Red Dead Redemption 2</h3>
				<p className="nota-critica">Nota da crítica: 4.67</p>
				{/* Corrigido o caminho da imagem */}
				<button className="avaliar-btn" onClick={() => abrirModal('Red Dead Redemption 2', '../public/reddead.png')}>Avaliar</button>
			</div>
			</div>

			{/* -- Jogo Card: BioShock Infinite -- */}
			<div className="jogo-card" data-jogo="BioShock Infinite">
			<div className="jogo-imagem">
				<img src="../public/bio.png" alt="BioShock Infinite" className="jogo-img" />
			</div>
			<div className="jogo-info">
				<h3>BioShock Infinite</h3>
				<p className="nota-critica">Nota da crítica: 4.42</p>
				{/* Corrigido o caminho da imagem */}
				<button className="avaliar-btn" onClick={() => abrirModal('BioShock Infinite', '../public/bio.png')}>Avaliar</button>
			</div>
			</div>

			{/* -- Jogo Card: Half-Life 2 -- */}
			<div className="jogo-card" data-jogo="Half-Life 2">
			<div className="jogo-imagem">
				<img src="../public/halflife.png" alt="Half-Life 2" className="jogo-img" />
			</div>
			<div className="jogo-info">
				<h3>Half-Life 2</h3>
				<p className="nota-critica">Nota da crítica: 4.59</p>
				{/* Corrigido o caminho da imagem */}
				<button className="avaliar-btn" onClick={() => abrirModal('Half-Life 2', '../public/halflife.png')}>Avaliar</button>
			</div>
			</div>

			{/* -- Jogo Card: Borderlands 2 -- */}
			<div className="jogo-card" data-jogo="Borderlands 2">
			<div className="jogo-imagem">
				<img src="../public/boderlands.png" alt="Borderlands 2" className="jogo-img" />
			</div>
			<div className="jogo-info">
				<h3>Borderlands 2</h3>
				<p className="nota-critica">Nota da crítica: 4.38</p>
				<button className="avaliar-btn" onClick={() => abrirModal('Borderlands 2', '../public/boderlands.png')}>Avaliar</button>
			</div>
			</div>
            </div>
          </div>
        </section>

        <section id="voltar-home" className="voltar-section">
          <div className="container">
            <Link to="/" className="cta-button voltar-btn">Voltar para Home</Link>
          </div>
        </section>
      </main>

      {/* -- Modal de Avaliação -- */}
      {/* O modal só será renderizado se isModalOpen for verdadeiro */}
      {isModalOpen && (
        <div id="modal-avaliacao" className="modal show"> {/* Adicione uma classe 'show' para torná-lo visível com CSS */}
          <div className="modal-content">
            <span className="close-btn" onClick={fecharModal}>&times;</span>
            
            <div className="modal-body">
              <div className="modal-left">
                <div className="jogo-capa">
                  <img id="modal-jogo-imagem" src={selectedGame.image} alt="Capa do jogo" className="modal-img" />
                  <p>Capa do jogo</p>
                </div>
                <h2 id="modal-jogo-titulo">{selectedGame.title}</h2>
                <p className="modal-ano">Ano</p>
                <div className="nota-input">
                  <label htmlFor="nota">Sua nota:</label>
                  <input type="number" id="nota" min="1" max="10" step="0.1" placeholder="1-10" />
                </div>
              </div>
              
              <div className="modal-right">
                <div className="comentario-section">
                  <label htmlFor="comentario">Seu comentário:</label>
                  <textarea id="comentario" placeholder="Escreva o que achou do jogo..." rows="6"></textarea>
                </div>
                
                <div className="modal-actions">
                  <button className="cancelar-btn" onClick={fecharModal}>Cancelar</button>
                  <button className="salvar-btn" onClick={salvarAvaliacao}>Salvar Avaliação</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Avaliacoes;