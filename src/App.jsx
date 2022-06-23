import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-regular-svg-icons"
import "@fortawesome/free-solid-svg-icons"
import { FontawesomeIcon } from "@fortawesome/react-fontawesome"

import Home from "./Home";


import About from "./About";
// import Service from "./Service";
import Contact from "./Contact";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Route, Switch, Redirect } from "react-router-dom";
const App = () => {
    return (
        <>

            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/about" component={About} />
                {/* <Route exact path="/service" component={Service} /> */}
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />

                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
};

export default App;