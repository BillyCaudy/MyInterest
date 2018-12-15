import React from 'react';
import FloatBarContainer from './float_bar/float_bar_container';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>

      <ProtectedRoute path='/' component={NavBarContainer} />
      <ProtectedRoute path='/' component={FloatBarContainer}/>
    </header>
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={LoginFormContainer} />

    </Switch>
  </div>
);

export default App;
