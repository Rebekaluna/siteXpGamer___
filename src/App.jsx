import { Routes, Route } from "react-router-dom"; 
import Header from "./Header";
import Footer from "./Footer";

import Home from './pages/Home.jsx';
import Projeto from './pages/Projeto.jsx';
import Avaliacoes from './pages/Avaliacoes.jsx';
import FaleConosco from './pages/FaleConosco.jsx'; 

// falta o login


function App() {
  return (
    // 2. Remova a tag <Router> daqui
    // <></> (um Fragment) para envolver o conteúdo, pois um componente sempre precisa retornar um único elemento pai. Uma <div> também funcionaria, mas o Fragment é mais "limpo" pois não adiciona um nó extra ao HTML.
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
      </Routes>
      <Footer />
    </>
    // E remova a tag </Router> daqui
  );
}

export default App;