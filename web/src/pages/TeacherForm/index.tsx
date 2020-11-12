import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { PageTeacherForm } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <PageTeacherForm id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O Primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label="Nome Completo" name="name" type="text" />
          <Input label="Avatar" name="avatar" type="text" />
          <Input label="Whatsapp" name="whatsapp" type="text" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
      </main>
    </PageTeacherForm>
  );
};

export default TeacherForm;
