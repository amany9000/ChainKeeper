import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';

import * as routes from '../constants/routes';
import Setup from './Setup';
import MainPage from './Home';
import SignInPage from './SignIn';
import LoginwithGoogle from "./LoginwithGoogle";
import PasswordForgetPage from './PasswordForget';
import SignUpPage from './SignUp';
import withAuthentication from './withAuthentication';
import BlockPage from './BlockPage';
import TxPage from './TxPage';
import MainLandingPage from './Landing';
import ApiPage from './ApiPage';

const App = () =>
  <Router>
    <div>
      <Route
        exact path={routes.LANDING}
        component={() => <MainLandingPage />}
      />

      <Route
        exact path={routes.SETUP}
        component={() => <Setup />}
      />

      <Route
        exact path={routes.HOME}
        component={() => <MainPage />}
      />

       <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />

      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />

      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />

      <Route
        exact path={routes.GOOGLE_LOGIN}
        component={() => <LoginwithGoogle />}
      />

      <Route
        exact path={routes.EXPLORER_BLOCK}
        render={(props) => <BlockPage {...props} /> }
      />

      <Route
        exact path={routes.EXPLORER_TX_HASH}
        render={(props) => <TxPage  {...props} />}
      />

      <Route
        exact path={routes.EXPLORER_BLOCK_HASH}
        render={(props) => <BlockPage {...props} /> }
      />

      <Route
        exact path={routes.API}
        component={() => <ApiPage />}
      />

    </div>
  </Router>

export default  withAuthentication(App);
