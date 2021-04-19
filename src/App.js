import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Footer from "./components/FooterComponent";
import Contact from "./components/ContactComponent";
import Events from "./components/EventsComponent";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/home"></Redirect>
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

export default App;
