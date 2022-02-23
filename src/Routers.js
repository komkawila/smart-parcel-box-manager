import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Page/Home";

const Routers = () => {
  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  );
  return (
    <Switch>
      <AppRoute
        path="/"
        exact={true}
        component={Home}
      />
    </Switch>
  );
};

export default Routers;
