import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from '@/config/routes';
import Header from '@/components/Header';
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes';
import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
          <Redirect to="/popular" />
        </Switch>
      </div>
    );
  }
}

export default App;
