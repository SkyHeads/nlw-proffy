import React from 'react';

import PageHeader from '../../components/PageHeader';

import { PageTeacherForm } from './styles';

const TeacherForm: React.FC = () => {
  return (
    // <PageTeacherForm id="page-teacher-form" className="container">
    <PageTeacherForm id="page-teacher-form">
      <PageHeader title="Que incrível que você quer dar aulas." />
    </PageTeacherForm>
  );
};

export default TeacherForm;
