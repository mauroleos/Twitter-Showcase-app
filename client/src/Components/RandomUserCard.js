import React from "react";
import { Button } from "react-bootstrap";

const RandomUserCard = (props) => {
return (
    <div>
        <div
            className="container"
            style={{ marginTop: 100, width: "60%", height: "60%" }}
        >
            <div className="card">
                <img
                  className="card-img-top"
                  alt="Card header"
                  src={props.logo}
                  alt="logo"
                  height="175"
                  width="100"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{props.name}</h5>
                  <p className="card-text">{props.title}</p>
                  <Button
                    type="submit"
                    onClick={(event) => props.getRandomTweet(event, props.username)}>
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
)
}

export default RandomUserCard