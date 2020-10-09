import React, { Suspense } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import router from './router';

import './main.scss';
import './images/iconfont/iconfont.scss';

const App = () => (
  <HashRouter>
    <Switch>
      <Suspense fallback={<div style={{ margin: '20px', textAlign: 'center' }}>loading...</div>}>
        {router.map((each) => (
          <Route path={each.path} component={each.component} exact key={each.path} />
        ))}
      </Suspense>
    </Switch>
  </HashRouter>
);

export default App;
