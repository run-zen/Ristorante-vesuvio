import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "./index.css";

//  Js
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// Components
import App from "./App";

function Main() {
    return (
        <BrowserRouter>
            <div>
                <App />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));
