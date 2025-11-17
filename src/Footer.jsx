import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>XP GAMER</h3>
            <p>Sua fonte confiável para notícias, reviews e tudo sobre o mundo dos games.</p>
          </div>
          <div className="footer-section">
            <h4>Categorias</h4>
            <ul>
            <li><a href="#" onClick={ (e) => e.preventDefault() }>Lançamentos</a></li> 
            <li><a href="#" onClick={ (e) => e.preventDefault() }>Reviews</a></li>
            <li><a href="#" onClick={ (e) => e.preventDefault() }>Guias</a></li>
            <li><a href="#" onClick={ (e) => e.preventDefault() }>E-sports</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="https://www.instagram.com/xpgamer_25/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://www.tiktok.com/@xpgamer492?lang=pt-BR" target="_blank" rel="noopener noreferrer" className="social-link">TikTok</a>
              <a href="https://www.youtube.com/channel/UCmQ3FT_w4OtZe3SmHVmRGDw" target="_blank" rel="noopener noreferrer" className="social-link">Youtube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 XP GAMER. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;