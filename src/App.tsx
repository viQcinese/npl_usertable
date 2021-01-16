import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './pages/SignUp';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignUp} exact />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
