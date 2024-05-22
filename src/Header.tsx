import React from 'react';
import logo from './assets/Rai.png';
import { goTo } from './functions';
const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [efeito, setEfeito] = React.useState(false);
  const [ativo, setAtivo] = React.useState(true);

  function efeitoMenu() {
    if (ativo) {
      if (!menu) {
        setMenu(true);
        setAtivo(false);
        setTimeout(() => {
          setEfeito(true);
        }, 50);
        setTimeout(() => {
          setAtivo(true);
        }, 600);
      } else {
        setEfeito(false);
        setTimeout(() => {
          setMenu(false);
        }, 600);
        setTimeout(() => {
          setAtivo(true);
        }, 600);
      }
    }
  }

  return (
    <header className={`header`}>
      <nav className="header-content">
        <span onClick={() => goTo('pagina-principal')} className="logo">
          <h1>Auto Mecânica Raí</h1>
          <img src={logo} alt="Logo Rai" />
        </span>

        <ul>
          <li>
            <a onClick={() => goTo('servicos')}>Serviços</a>
          </li>
          <li>
            <a onClick={() => goTo('quemsomos')}>Quem Somos</a>
          </li>
          <li>
            <a onClick={() => goTo('equipe')}>Nossa Equipe</a>
          </li>
          <li>
            <a onClick={() => goTo('contato')}>Contato</a>
          </li>
          <li>
            <span
              onClick={() => {
                efeitoMenu();
              }}
              className={`burguer-menu ${efeito ? 'open' : ''}`}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </li>
        </ul>
      </nav>
      {menu ? (
        <aside className={`crashed-menu ${efeito ? 'show' : ''}`}>
          <ul>
            <li>
              <a
                onClick={() => {
                  goTo('servicos');
                  efeitoMenu();
                }}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  goTo('quemsomos');
                  efeitoMenu();
                }}
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  goTo('equipe');
                  efeitoMenu();
                }}
              >
                Nossa Equipe
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  goTo('contato');
                  efeitoMenu();
                }}
              >
                Contato
              </a>
            </li>
          </ul>
          <img
            onClick={() => {
              goTo('pagina-principal');
              efeitoMenu();
            }}
            src={logo}
            alt="Logo Rai"
          />
        </aside>
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
