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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, quaerat rerum impedit, fuga odio pariatur sint veniam
            modi natus quae, possimus ipsa laborum deleniti fugit soluta
            distinctio corporis reprehenderit quos.
          </p>
          <h1>Profissionalismo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            aperiam molestiae in animi maxime consectetur mollitia possimus,
            soluta omnis! Officia incidunt distinctio repellendus, delectus
            libero autem et rerum soluta? Aspernatur.
          </p>
          <h1>Limpeza</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            pariatur numquam repudiandae, minima fugiat perferendis sequi maxime
            voluptate recusandae ex nemo! Velit fuga tempore voluptate provident
            delectus cupiditate tempora itaque!
          </p>
          <h1>Eficiência</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            possimus cupiditate aut quo, quis neque, a eligendi tempora,
            provident iusto esse! Atque suscipit inventore laborum. Provident ex
            harum officia nulla. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Magni nihil rem reiciendis minus fugit aliquam.
            Labore eos eveniet excepturi, dolor in maiores molestias optio
            nesciunt vero suscipit aspernatur temporibus libero.
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
