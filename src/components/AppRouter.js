import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './todo/App';
import Main from './tags/Main';
import ROUTES from '../constants/routes';

/**
 * Router.
 */
const AppRouter = () => (
  <Router>
    <div>
      <Route path={ROUTES.TODO_APP} exact component={App} />
      <Route path={ROUTES.TAGS} exact component={Main} />
    </div>
  </Router>
);

export default AppRouter;
