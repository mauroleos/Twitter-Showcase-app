import React, { useState } from "react";
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import elonLogo from "./Images/elon.png";
import billLogo from "./Images/bill.png";
import jeffLogo from "./Images/jeff.png";
import lebronLogo from "./Images/lebron.png";
import kanyeLogo from "./Images/kanye.png";

const RandomPage = () => {
  const [user, setUsers] = useState([]);

  async function searchUsersE(event) {
    event.preventDefault();

    const data = await fetch(`/api/statuses/random`).then((resp) =>
      resp.json()
    );

    setUsers([data.elon]);
  }

  async function searchUsersB(event) {
    event.preventDefault();

    const data = await fetch(`/api/statuses/random`).then((resp) =>
      resp.json()
    );

    setUsers([data.bill]);
  }

  async function searchUsersJ(event) {
    event.preventDefault();

    const data = await fetch(`/api/statuses/random`).then((resp) =>
      resp.json()
    );

    setUsers([data.jeff]);
  }

  async function searchUsersL(event) {
    event.preventDefault();

    const data = await fetch(`/api/statuses/random`).then((resp) =>
      resp.json()
    );

    setUsers([data.lebron]);
  }

  async function searchUsersK(event) {
    event.preventDefault();

    const data = await fetch(`/api/statuses/random`).then((resp) =>
      resp.json()
    );

    setUsers([data.kanye]);
  }

  return (
    <div>
      <div className="row">
        <div className="container" style={{ marginTop: 100 }}>
          <div className="user">
            {user.map((user, index) => {
              return (
                <div className="user" key={index}>
                  <Image
                    className="d-inline mt-2 mr-1 ml-1"
                    src={user.user.profile_image_url}
                  />
                  <h2>{user.user.default_profile_image}</h2>
                  <h2>{user.user.name}</h2>
                  <p className="d-inline ml-2 user-handle">
                    {moment(user.created_at).format("MMM DD").toString()}
                  </p>

                  <div className="details">
                    <p>{user.full_text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-4">
          <div>
            <div
              className="container"
              style={{ marginTop: 100, width: "60%", height: "60%" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card header"
                  src={elonLogo}
                  alt="logo"
                  height="175"
                  width="100"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Elon Musk</h5>
                  <p className="card-text">CEO of SpaceX</p>
                  <Button
                    type="submit"
                    onClick={(event) => searchUsersE(event)}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div>
            <div
              className="container"
              style={{ marginTop: 100, width: "60%", height: "60%" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card header"
                  src={billLogo}
                  alt="logo"
                  height="175"
                  width="100"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Bill Gates</h5>
                  <p className="card-text">Business magnate</p>
                  <Button
                    type="submit"
                    onClick={(event) => searchUsersB(event)}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div>
            <div
              className="container"
              style={{ marginTop: 100, width: "60%", height: "60%" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card header"
                  src={jeffLogo}
                  alt="logo"
                  height="175"
                  width="100"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Jeff Bezos</h5>
                  <p className="card-text">CEO of Amazon</p>
                  <Button
                    type="submit"
                    onClick={(event) => searchUsersJ(event)}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div>
            <div
              className="container"
              style={{ marginTop: 100, width: "60%", height: "60%" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card header"
                  src={lebronLogo}
                  alt="logo"
                  height="175"
                  width="100"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">LeBron James</h5>
                  <p className="card-text">American basketball player</p>
                  <Button
                    type="submit"
                    onClick={(event) => searchUsersL(event)}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div>
            <div
              className="container"
              style={{ marginTop: 100, width: "60%", height: "60%" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card header"
                  src={kanyeLogo}
                  alt="logo"
                  height="175"
                  width="100"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Kanye West</h5>
                  <p className="card-text">Candidate for US President</p>
                  <Button
                    type="submit"
                    onClick={(event) => searchUsersK(event)}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RandomPage;
