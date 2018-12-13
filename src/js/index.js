import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/Articles";
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Nav from "./components/Navbar";
import Categories from "./components/AddArt";
import Article from "./components/Article";
import Articles from "./components/Articles";


render(
    <Provider store={store}>
        <Router>
            <div>
            <Nav/>
            <Switch>
                <Route exact path='/articles' component={Articles}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/categories' component={Categories}/>
                <Route  path='/articles/:id' component={Article}/>
                <Route  component={Categories}/>
            </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById("app")
);