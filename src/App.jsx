import './App.css';
import Header from './componentes/Header/index.jsx';
import SobreMi from './componentes/SobreMi/index.jsx';
import Formulario from './componentes/Formulario/index.jsx';
import Footer from './componentes/Footer/index.jsx';
import MariposaMovimiento from './componentes/MariposaMovimiento/index.jsx'; 

function App() {
  return (
    <div className="App">
      <MariposaMovimiento />
      <Header />
      <SobreMi />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;

