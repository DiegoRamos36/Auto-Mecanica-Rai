import React from 'react';
import { goService } from './functions';
const Servicos = () => {
  const [servico, setServico] = React.useState('');

  React.useEffect(() => {
    goService(servico);
  }, [servico]);
  return (
    <section id="servicos" className="servicos">
      <ul className="container">
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Troca de óleo
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Alinhamento e balanceamento
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Manutenção de embreagem
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Revisão dos componentes de freio
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Checagem do nível de água no radiador
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Atendimento personalizado e garantia de serviço
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Injeção eletrônica computadorizada
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Limpeza de bico com regulagem
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Sistema airbag
        </li>
        <li
          onClick={(event: React.MouseEvent) => {
            setServico(event.currentTarget.innerHTML);
            goService(servico);
          }}
        >
          Caixa de marcha eletronica
        </li>
      </ul>
    </section>
  );
};

export default Servicos;
