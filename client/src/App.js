import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchPage from "./Components/SearchPage";
import RandomPage from "./Components/RandomPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SearchPage" component={SearchPage} />
          <Route path="/RandomPage" component={RandomPage} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: 150, marginLeft: 200 }}>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-0" style={{ textAlign: "center" }}>
              Welcome to the Twitter Showcase App
            </h3>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 50, marginLeft: 200 }}>
        <div className="card">
          <div className="card-body">
            <p className="card-title" style={{ textAlign: "center" }}>
              Description text will go here
            </p>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ marginTop: 50, marginLeft: 200, marginBottom: 10 }}
      >
        <div className="card">
          <img
            className="card-img-top"
            alt="Card header"
            src="https://placeimg.com/640/480/nature"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default App;
