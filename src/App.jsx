import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <PrivateRoute path='/home'>
            <Home />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Redirect to='/login' />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
