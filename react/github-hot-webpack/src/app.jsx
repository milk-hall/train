import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import routes from "@/config/routes";
import Header from "@/components/Header";
import RouteWithSubRoutes from "@/components/RouteWithSubRoutes";
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Redirect to='/popular'/>
        </Switch>
      </div>
    );
  }
}

export default App;
