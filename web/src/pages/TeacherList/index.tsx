import React from 'react';

import PageHeader from '../../components/PageHeader';

import { PageTeacherList } from './styles';

const TeacherList: React.FC = () => {
  return (
    <PageTeacherList id="page-teacher-list">
      <PageHeader />
    </PageTeacherList>
  );
};

export default TeacherList;
