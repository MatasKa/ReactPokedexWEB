import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import About from "./About";
import { Route, Switch } from "react-router-dom";
let page = 0;

const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route exact path="/about" render={(props) => <About {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    ></Route>
  </Switch>
);

function nextPage() {
  page++;
}
function prevPage() {
  page--;
}

export default App;
