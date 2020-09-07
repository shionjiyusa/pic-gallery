import React, { Suspense } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import router from './router';

import './main.scss';

const App = () => (
  <HashRouter>
    <Switch>
      <Suspense fallback={<div>loading</div>}>
        {router.map((each) => (
          <Route path={each.path} component={each.component} exact key={each.path} />
        ))}
      </Suspense>
    </Switch>
  </HashRouter>
);

export default App;
