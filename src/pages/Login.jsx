import React from 'react';

function LoginPage() {
  // NOTA: Em um componente React real, você precisaria definir as funções abaixo
  // para lidar com a lógica do formulário, provavelmente usando o hook `useState`
  // para controlar a visibilidade dos formulários e dos campos de senha.

  const togglePassword = (inputId) => {
    const input = document.getElementById(inputId);
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  };

  const showSignupForm = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Aqui você implementaria a lógica para mostrar o formulário de cadastro
    // e esconder o de login. Ex: setFormToShow('signup');
    console.log("Mostrar formulário de cadastro");
  };

  const showLoginForm = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Aqui você implementaria a lógica para mostrar o formulário de login
    // e esconder o de cadastro. Ex: setFormToShow('login');
    console.log("Mostrar formulário de login");
  };

  return (
    <main className="main-content">
      {/* Login Section */}
      <section className="login-section">
        <div className="container">
          <div className="login-container">
            <div className="login-form-container">
              <div className="form-header">
                <h2>Entrar na sua conta</h2>
                <p>Bem-vindo de volta ao XP GAMER!</p>
              </div>

              <form className="login-form" id="loginForm">
                <div className="form-group">
                  <label htmlFor="loginEmail">Email</label>
                  <input type="email" id="loginEmail" name="email" required />
                  <span className="error-message" id="loginEmailError"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="loginPassword">Senha</label>
                  <div className="password-input">
                    <input type="password" id="loginPassword" name="password" required />
                    <button type="button" className="toggle-password" onClick={() => togglePassword('loginPassword')}>
                      <span className="eye-icon">👁️</span>
                    </button>
                  </div>
                  <span className="error-message" id="loginPasswordError"></span>
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" id="rememberMe" />
                    <span className="checkmark"></span>
                    Lembrar de mim
                  </label>
                  <a href="#" className="forgot-password">Esqueceu a senha?</a>
                </div>

                <button type="submit" className="btn-primary">Entrar</button>
              </form>

              <div className="form-footer">
                <p>Não tem uma conta? <a href="#" id="showSignup" onClick={showSignupForm}>Faça agora mesmo</a></p>
              </div>
            </div>

            {/* Signup Form (Hidden by default) */}
            <div className="signup-form-container" id="signupContainer" style={{ display: 'none' }}>
              <div className="form-header">
                <h2>Criar nova conta</h2>
                <p>Junte-se à comunidade XP GAMER!</p>
              </div>

              <form className="signup-form" id="signupForm">
                <div className="form-group">
                  <label htmlFor="signupEmail">Email</label>
                  <input type="email" id="signupEmail" name="email" required />
                  <span className="error-message" id="signupEmailError"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="signupPassword">Senha</label>
                  <div className="password-input">
                    <input type="password" id="signupPassword" name="password" required />
                    <button type="button" className="toggle-password" onClick={() => togglePassword('signupPassword')}>
                      <span className="eye-icon">👁️</span>
                    </button>
                  </div>
                  <div className="password-requirements">
                    <p>Sua senha deve conter:</p>
                    <ul>
                      <li id="req-length">Pelo menos 8 caracteres</li>
                      <li id="req-uppercase">Uma letra maiúscula</li>
                      <li id="req-lowercase">Uma letra minúscula</li>
                      <li id="req-number">Um número</li>
                      <li id="req-symbol">Um símbolo especial</li>
                    </ul>
                  </div>
                  <span className="error-message" id="signupPasswordError"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmar Senha</label>
                  <div className="password-input">
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                    <button type="button" className="toggle-password" onClick={() => togglePassword('confirmPassword')}>
                      <span className="eye-icon">👁️</span>
                    </button>
                  </div>
                  <span className="error-message" id="confirmPasswordError"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="birthDate">Data de Nascimento</label>
                  <input type="date" id="birthDate" name="birthDate" required />
                  <span className="error-message" id="birthDateError"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="console">Console Preferido</label>
                  <select id="console" name="console" required>
                    <option value="">Selecione seu console</option>
                    <option value="playstation">PlayStation</option>
                    <option value="xbox">Xbox</option>
                    <option value="pc">PC</option>
                    <option value="nintendo">Nintendo Switch</option>
                    <option value="mobile">Mobile</option>
                    <option value="outros">Outros</option>
                  </select>
                  <span className="error-message" id="consoleError"></span>
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" id="acceptTerms" required />
                    <span className="checkmark"></span>
                    Aceito os <a href="#" className="terms-link">Termos de Uso</a> e <a href="#" className="terms-link">Política de Privacidade</a>
                  </label>
                </div>

                <button type="submit" className="btn-primary">Criar Conta</button>
              </form>

              <div className="form-footer">
                <p>Já tem uma conta? <a href="#" id="showLogin" onClick={showLoginForm}>Faça login</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;