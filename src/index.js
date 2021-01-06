
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/main.scss";

import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";

// const Login = lazy(() => import('views/auth/Login'));
import Login from "./views/auth/Login"
import PublicRoute from "./Utils/PublicRoute";

import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoute from "./Utils/PrivateRoute";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <PublicRoute exact path="/authlogin" component={Login} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
