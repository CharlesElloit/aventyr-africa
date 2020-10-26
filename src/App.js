import React from "react"
import HomeScreen from "./screens/HomeScreen"
import ExploreTour from "./screens/ExploreTour"
import { Route, Switch } from "react-router-dom"

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/explore" exact component={ExploreTour} />
      </Switch>
    </div>
  )
}
