import React from "react";
import { Router, Route, Switch } from "dva/router";
import dynamic from "dva/dynamic";

const menuGlobal = [
  {
    id: "shop",
    pid: "0",
    name: "shop",
    icon: "shop",
    path: "/",
    models: () => [import("./models/shop"), import("./models/cart")], //models可多个
    component: () => import("./routes/ShopCart.jsx"),
  },
];
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {menuGlobal.map(({ path, ...dynamics }, index) => (
          <Route
            key={index}
            path={path}
            exact
            component={dynamic({
              app,
              ...dynamics,
            })}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
