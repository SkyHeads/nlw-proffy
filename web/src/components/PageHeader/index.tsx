import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import { Header } from './styles';

const PageHeader: React.FC = () => {
  return (
    <Header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>Estes são os proffys disponíveis.</strong>
      </div>
    </Header>
  );
};

export default PageHeader;