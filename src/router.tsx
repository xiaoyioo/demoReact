import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './App';
import { About, MembersPageContainer, MemberPageContainer } from './components';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import DevTools from './containers/DevTools';

// var configureStore = store();

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
    <Router>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact={true} path="/" component={About} />
          <Route path="/about" component={About} />
         <Route path="/members" component={MembersPageContainer} />
          <Route exact={true} path="/member" component={MemberPageContainer} />
          <Route path="/member/:id" component={MemberPageContainer} />
        </Switch>
        <DevTools />
      </div>
    </Router>
  </Provider>
  );
};
