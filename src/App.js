import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import router from "./router";

const App = () => (
  <BrowserRouter>
    <Switch>
      {router.map((each) => (
        <Route
          path={each.path}
          component={each.component}
          exact
          key={each.path}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
