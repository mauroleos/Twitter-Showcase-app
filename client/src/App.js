import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchPage from "./Components/SearchPage";
import RandomPage from "./Components/RandomPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./Images/Twitter-phone.png";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
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
    <div className="container-fluid">
      <div className="container" style={{ marginTop: 150 }}>
        <div className="card">
          <div className="card-body">
            <h3
              className="card-title mb-0"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#33ccff",
              }}
            >
              Welcome to the Twitter Showcase App!
            </h3>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 50}}>
        <div className="card">
          <div className="card-body">
            <h3
              className="card-title"
              style={{
                textAlign: "center",
                color: "#33ccff",
                fontWeight: "bold",
              }}
            >
              {" "}
              Instructions:{" "}
            </h3>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 30,
                color: "#33ccff",
                fontSize: 20,
              }}
            >
              Search Page:
            </p>
            <p style={{ color: "darkBlue" }}>
              Search tweets by category or by user! "Search By Content" will
              display the most recent tweets in relation to what you typed in
              the search box. "Search By User" will display the most recent
              tweets from the user you typed in the search box.{" "}
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#33ccff",
                fontSize: 20,
              }}
            >
              Random Page:
            </p>
            <p style={{ color: "darkBlue" }}>
              Go check out some of my personal favorite Twitter accounts to
              follow and get a random tweet back from any one of them! Simply
              pick the user you want and click on the "Tweet" button. This will
              return a random tweet from that user.{" "}
            </p>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ marginTop: 50 }}
      >
        <div className="card">
          <img
            className="card-img-top"
            alt="Card header"
            src={Logo}
            alt="Twitter image"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default App;
