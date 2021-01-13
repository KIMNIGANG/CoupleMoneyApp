import React from "react";
import { Router, Scene } from "react-native-router-flux";
import { Main } from "./main";
import { LoginScreen } from "./login_screen";
import { SignupScreen } from "./signup_screen";

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
        key="LoginScreen"
        component={LoginScreen}
        title="LoginScreen"
        hideNavBar={true}
      />
      <Scene
        key="SignupScreen"
        component={SignupScreen}
        title="SignupScreen"
        hideNavBar={true}
      />
    </Scene>
  </Router>
);
export default Routes;
