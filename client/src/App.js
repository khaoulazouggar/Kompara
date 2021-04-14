import './css/App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
