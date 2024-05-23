import fundo from './assets/fundo.jpg';
import fundo2 from './assets/fundo2o.jpg';
import person from './assets/pai.jpg';
import motor from './assets/moto.jpg';
const QuemSomos = () => {
  return (
    <section id="quemsomos" className="quemsomos">
      <div className="quemsomos-conteudo">
        <div className="quemsomos-items">
          <h1>Desde 1998</h1>
          <p>
            Nossa oficina está no mercado desde 1998, oferecendo serviços de
            alta qualidade e confiabilidade. Com mais de duas décadas de
            experiência, acumulamos um vasto conhecimento técnico e
            aperfeiçoamos nossos processos para atender a todas as necessidades
            dos nossos clientes. Nossa longa trajetória é um testemunho da nossa
            dedicação e compromisso com a excelência.
          </p>
          <h1>Limpeza</h1>
          <p>
            Acreditamos que um ambiente limpo e organizado reflete a qualidade
            dos nossos serviços. Nossa oficina é mantida com os mais altos
            padrões de higiene, não só para garantir a segurança de todos, mas
            também para proporcionar uma experiência agradável aos nossos
            clientes. Um local limpo também contribui para a precisão e
            eficiência dos nossos técnicos.
          </p>
          <h1>Eficiência</h1>
          <p>
            Sabemos que o tempo dos nossos clientes é valioso, por isso, nos
            dedicamos a oferecer um serviço rápido e eficiente sem comprometer a
            qualidade. Utilizamos equipamentos modernos e técnicas avançadas
            para diagnosticar e resolver problemas de forma ágil. Nossa meta é
            sempre devolver o veículo ao cliente no menor tempo possível, com
            todos os reparos realizados com perfeição.
          </p>
        </div>
        <div className="mini-galeria">
          <div>
            <img src={fundo} alt="Frente da oficina" />
            <img src={fundo2} alt="Frente da oficina 2" />
          </div>
          <div>
            <img src={person} alt="Rai" />
            <img src={motor} alt="Motor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
