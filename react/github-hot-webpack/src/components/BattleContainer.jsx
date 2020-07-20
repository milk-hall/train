import React from 'react';
import { HashRouter as Switch, Redirect, Route } from 'react-router-dom';
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes';

const BattleContainer = ({ routes }) => (
  <div>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={`battle${i}`} {...route} />
        ))}
      <Route
        exact
        path="/battle"
        render={() => <Redirect to="/battle/index" />} />
    </Switch>
  </div>
  );
export default BattleContainer;
