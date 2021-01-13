import React from "react";
import { Router, Scene } from "react-native-router-flux";
import { Main } from "../main/main";
import { Login } from "../login/login";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene //
        key="main"
        component={Main}
        title="Main"
        hideNavBar={true}
        initial={true}
      />
      <Scene //
        key="Login"
        component={Login}
        title="Login"
        hideNavBar={true}
      />
    </Scene>
  </Router>
);
export default Routes;
