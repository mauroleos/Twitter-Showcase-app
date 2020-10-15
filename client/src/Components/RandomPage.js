import React, { useState } from "react";
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

const RandomPage = () => {
  const [user, setUsers] = useState([]);

  async function searchUsersE(event) {
    event.preventDefault();

    const elonMuskData = await fetch(
      `/api/users?search_term=elonmusk`
    ).then((resp) => resp.json());

    setUsers(elonMuskData);
  }

  async function searchUsersB(event) {
    event.preventDefault();

    const billGatesData = await fetch(
      `/api/users?search_term=BillGates`
    ).then((resp) => resp.json());

    setUsers(billGatesData);
  }

  async function searchUsersJ(event) {
    event.preventDefault();

    const jeffBezosData = await fetch(
      `/api/users?search_term=JeffBezos`
    ).then((resp) => resp.json());

    setUsers(jeffBezosData);
  }

  async function searchUsersL(event) {
    event.preventDefault();

    const lebronJamesData = await fetch(
      `/api/users?search_term=KingJames`
    ).then((resp) => resp.json());

    setUsers(lebronJamesData);
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
          <div>
            <div
              className="container"
              style={{ marginTop: 100, width: "15rem" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card Header"
                  src="https://placeimg.com/640/480/nature"
                />
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
              style={{ marginTop: 100, width: "15rem" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card Header"
                  src="https://placeimg.com/640/480/nature"
                />
                <div className="card-body">
                  <h5 className="card-title">Bill Gates</h5>
                  <p className="card-text">American business magnate</p>
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
              style={{ marginTop: 100, width: "15rem" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card Header"
                  src="https://placeimg.com/640/480/nature"
                />
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
              style={{ marginTop: 100, width: "15rem" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card Header"
                  src="https://placeimg.com/640/480/nature"
                />
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
              style={{ marginTop: 100, width: "15rem" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card Header"
                  src="https://placeimg.com/640/480/nature"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title</h5>
                  <p className="card-text">Testing</p>
                  <a href="#" className="btn btn-primary">
                    Tweet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elonMusk">
          {user.map((user, index) => {
            return (
              <div className="elonMusk" key={index}>
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
    </div>
  );
};
export default RandomPage;
