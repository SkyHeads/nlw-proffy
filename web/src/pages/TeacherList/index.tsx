import React from 'react';

import PageHeader from '../../components/PageHeader';

import { PageTeacherList } from './styles';

const TeacherList: React.FC = () => {
  return (
    // <PageTeacherList id="page-teacher-list" className="container">
    <PageTeacherList id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
    </PageTeacherList>
  );
};

export default TeacherList;
