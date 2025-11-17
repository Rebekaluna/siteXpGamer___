import React from 'react';
import { Link } from 'react-router-dom';

function FaleConosco() {
  return (
    <main>
      <section id="fale-conosco-hero" className="fale-conosco-hero">
        <div className="container">
          <h1 className="fale-conosco-title">Fale Conosco</h1>
          <p className="fale-conosco-subtitle">Entre em contato com a equipe XP Gamer</p>
        </div>
      </section>

      <section id="contatos" className="contatos-section">
        <div className="container">
          <h2 className="section-title">Contatos</h2>
          <div className="contatos-grid">
            {/* Rebeka Luna */}
            <div className="contato-card">
              <div className="contato-header">
                <div className="contato-avatar">
                  <img src="../public/beka.png" alt="Rebeka Luna" className="avatar-img" />
                </div>
                <h3>Rebeka Luna Alves de Lima</h3>
              </div>
              <div className="contato-info">
                <div className="contato-item">
                  <span className="contato-icon">📞</span>
                  <a href="tel:+5548992254823" className="contato-link">(48) 99225-4823</a>
                </div>
                <div className="contato-item">
                  <span className="contato-icon">✉️</span>
                  <a href="mailto:lunaalvesdelimar@gmail.com" className="contato-link">lunaalvesdelimar@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Júlia Fantinatti */}
            <div className="contato-card">
              <div className="contato-header">
                <div className="contato-avatar">
                  <img src="../public/Ju.png" alt="Júlia Fantinatti" className="avatar-img" />
                </div>
                <h3>Júlia Fantinatti Dos Santos</h3>
              </div>
              <div className="contato-info">
                <div className="contato-item">
                  <span className="contato-icon">📞</span>
                  <a href="tel:+5511975630555" className="contato-link">(11) 97563-0555</a>
                </div>
                <div className="contato-item">
                  <span className="contato-icon">✉️</span>
                  <a href="mailto:Jfantinatti6@gmail.com" className="contato-link">Jfantinatti6@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Caio Pereira */}
            <div className="contato-card">
              <div className="contato-header">
                <div className="contato-avatar">
                  <img src="../public/caio.png" alt="Caio Pereira" className="avatar-img" />
                </div>
                <h3>Caio Pereira Nepomuceno</h3>
              </div>
              <div className="contato-info">
                <div className="contato-item">
                  <span className="contato-icon">📞</span>
                  <a href="tel:+5511967438916" className="contato-link">(11) 96743-8916</a>
                </div>
                <div className="contato-item">
                  <span className="contato-icon">✉️</span>
                  <a href="mailto:caioinformatica123@gmail.com" className="contato-link">caioinformatica123@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Fernando Miranda */}
            <div className="contato-card">
              <div className="contato-header">
                <div className="contato-avatar">
                  <img src="../public/Fe.png" alt="Fernando Miranda" className="avatar-img" />
                </div>
                <h3>Fernando Miranda de Oliveira</h3>
              </div>
              <div className="contato-info">
                <div className="contato-item">
                  <span className="contato-icon">📞</span>
                  <a href="tel:+5511986861326" className="contato-link">(11) 98686-1326</a>
                </div>
                <div className="contato-item">
                  <span className="contato-icon">✉️</span>
                  <a href="mailto:contatoprofissionalfer.m@gmail.com" className="contato-link">contatoprofissionalfer.m@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formulario-contato" className="formulario-section">
        <div className="container">
          <h2 className="section-title">Envie uma Mensagem</h2>
          <div className="formulario-container">
            <form className="contato-form" id="formulario-contato">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="assunto">Assunto</label>
                <select id="assunto" name="assunto" required>
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida sobre o site</option>
                  <option value="sugestao">Sugestão de melhoria</option>
                  <option value="bug">Reportar bug</option>
                  <option value="parceria">Proposta de parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="6" required placeholder="Escreva sua mensagem aqui..."></textarea>
              </div>
              
              <button type="submit" className="enviar-btn">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      <section id="voltar-home" className="voltar-section">
        <div className="container">
          <Link to="/" className="cta-button voltar-btn">Voltar para Home</Link>
        </div>
      </section>
    </main>
  );
}

export default FaleConosco;