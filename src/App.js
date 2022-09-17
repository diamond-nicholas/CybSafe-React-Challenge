import React from "react";
import About from "./Components/About";
import Home from './Components/Home';
import { Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/description/:name" >
          <About/>
        </Route>
        <Route path="*">
          <h1 className="not-found">404 - Pokemons Does Not Live Here</h1>
        </Route>
    </Switch>
  );
}

export default App;