import React from "react";
import { Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "@/config/routes";
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>{renderRoutes(routes)}</div>;
  }
}
export default App;
