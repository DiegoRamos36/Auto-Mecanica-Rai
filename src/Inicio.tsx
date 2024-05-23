import { goTo } from './functions';

const Inicio = () => {
  function goWhatsapp() {
    const mensagem = 'Olá, gostaria de fazer uma revisão no meu carro.';
    const number = '+5521992581436';
    window.location.href = `https://wa.me/${number}/?text=${mensagem}`;
  }

  return (
    <main id="pagina-principal" className="landing-page">
      <h1>confiança e resultado.</h1>
      <p>Tudo pensado no melhor pro cliente</p>
      <nav className="landing-page-nav">
        <a onClick={() => goTo('servicos')}>Nossos Serviços</a>
        <a onClick={() => goWhatsapp()}>Faça uma revisão</a>
      </nav>
      <a
        href="https://maps.app.goo.gl/Y4YyXmev73Cfcrww9"
        target="_blank"
        className="localizacao"
      >
        Av. Joaquim da Costa Lima, 1180b - Belford Roxo
      </a>
      <h4>seg - sex : 08-18h | sab : 08-13h</h4>
    </main>
  );
};

export default Inicio;
