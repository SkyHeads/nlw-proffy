import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/give-classes" component={TeacherList} />
    </BrowserRouter>
  );
};

export default Routes;
