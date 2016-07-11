import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import View from "./pages/View.js";
import Help from "./pages/Help.js";
import TodoApp from "./App.jsx";

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Home}></IndexRoute>
            
            <Route path="about(/:about)" name="about" component={About}></Route>
            <Route path="view(/:view)" name="view" component={View}></Route>
            <Route path="help(/:help)" name="help" component={Help}></Route>
            <Route path="home(/:home)" name="home" component={TodoApp}></Route>
        
        </Route>
    </Router>,app);