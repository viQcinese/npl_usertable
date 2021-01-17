import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UsersTable from './pages/UsersTable';
import NewUser from './pages/NewUser';
import GlobalStyle from './global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={NewUser} exact />
        <Route path="/admin" component={UsersTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
