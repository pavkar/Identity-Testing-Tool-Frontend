import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "mdbreact/dist/css/mdb.css";
import MainScreen from "./js/MainScreen";
import AllFilesView from "./js/AllFilesView";
import NavigationBar from "./js/NavigationBar";
import * as serviceWorker from "./serviceWorker";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <NavigationBar /> */}
    <MainScreen />
    <AllFilesView />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
