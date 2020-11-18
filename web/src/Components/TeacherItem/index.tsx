import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/43793592?s=460&u=977cc37f6e87bcc029d8efc6d89ca7e5a5d55de9&v=4"
          alt="Avatar"
        />
        <div>
          <strong>Bruno Fernandes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Aulas de Matemática bem estruturadas e expositiva.
        <br /> <br />
        Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
        Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$
        15 reais.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 15,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
