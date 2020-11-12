import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import { PageTeacherList } from './styles';

const TeacherList: React.FC = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input label="Matéria" name="subject" type="text" />
          <Input label="Dia da semana" name="week_day" type="text" />
          <Input label="Hora" name="time" type="text" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </PageTeacherList>
  );
};

export default TeacherList;
