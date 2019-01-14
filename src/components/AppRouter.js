import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ROUTES from '../constants/routes';
import App from './App';

const AppRouter = () => (
  <Router>
    <div>
      <Route path={ROUTES.TODO_APP} exact component={App} />
    </div>
  </Router>
);

export default AppRouter;
