import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import router from './router';

// import NotFound from './components/NotFound';
import './app.scss';

const App = () => (
  <HashRouter>
    <Switch>
      {router.map((each) => (
        <Route path={each.path} component={each.component} exact key={each.path} />
      ))}
      {/* <Route path="*">
        <NotFound />
      </Route> */}
    </Switch>
  </HashRouter>
);

export default App;
