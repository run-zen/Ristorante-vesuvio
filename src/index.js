import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

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
