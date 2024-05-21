import './App.css';
import Contato from './Contato';
import Header from './Header';
import Inicio from './Inicio';
import NossaEquipe from './NossaEquipe';
import QuemSomos from './QuemSomos';
import Servicos from './Servicos';

export function goTo(id: string) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <Servicos />
      <QuemSomos />
      <NossaEquipe />
      <Contato />
    </div>
  );
}

export default App;
