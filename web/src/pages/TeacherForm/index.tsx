import React from 'react';

import PageHeader from '../../components/PageHeader';

import { PageTeacherForm } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <PageTeacherForm>
      <PageHeader title="Que incrível que você quer dar aulas." />
    </PageTeacherForm>
  );
};

export default TeacherForm;
