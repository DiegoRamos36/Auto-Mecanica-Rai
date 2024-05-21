import person2 from './assets/adriano.jpg';
import person1 from './assets/Rai2.png';

export interface Membro {
  nome: string;
  profissao: string;
  img: { src: string; alt: string };
}

const NossaEquipe = () => {
  const time = [
    {
      nome: 'Rai',
      profissao: 'Gerente/Mecânico',
      img: {
        src: person1,
        alt: 'Anderson',
      },
    },
    {
      nome: 'Adriano',
      profissao: 'Mecânico',
      img: {
        src: person2,
        alt: 'Adriano',
      },
    },
  ];

  return (
    <section id="equipe" className="time">
      <div className="container">
        {time.map((membro: Membro) => (
          <div key={membro.nome} className="membro">
            <img src={membro.img.src} alt={membro.img.alt} />
            <h1>{membro.nome}</h1>
            <p>{membro.profissao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NossaEquipe;
