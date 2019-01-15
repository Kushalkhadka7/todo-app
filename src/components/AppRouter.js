import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './todo/App';
import ROUTES from '../constants/routes';
import Main from './tags/Main';

const AppRouter = () => (
  <Router>
    <div>
      <Route path={ROUTES.TODO_APP} exact component={App} />
      <Route path={ROUTES.TAGS} exact component={Main} />
    </div>
  </Router>
);

export default AppRouter;
