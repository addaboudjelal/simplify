import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import {Jobs} from './app/jobs';
import {Emails} from './app/emails';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="jobs" component={Jobs}/>
      <Route path="emails" component={Emails}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
