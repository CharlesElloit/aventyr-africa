import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Route>
        <Switch>
          <HomeScreen />
        </Switch>
      </Route>
    </div>
  );
}
