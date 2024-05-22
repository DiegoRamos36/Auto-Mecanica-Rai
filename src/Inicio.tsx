import { goTo } from './functions';

const Inicio = () => {
  function goWhatsapp() {
    const mensagem = 'Olá, gostaria de fazer uma revisão no meu carro.';
    const number = '+5521981734706';
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
      <h3 className="localizacao">
        Av. Joaquim da Costa Lima, 1180 b - Belford Roxo
      </h3>
      <h4>seg - sex : 08-18h | sab : 08-13h</h4>
    </main>
  );
};

export default Inicio;
