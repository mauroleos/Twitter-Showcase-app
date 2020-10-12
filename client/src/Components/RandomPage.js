import React from "react";

const RandomPage = () => {
  const [users, setUsers] = useState([]);

  async function searchUsers(event) {
    event.preventDefault();

    const elonMuskData = await fetch(
      `/api/users?search_term=elonmusk`
    ).then((resp) => resp.json());

    setUsers(elonMuskData);
  }
  console.log(users);

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
      </div>
    </div>
  );
};
export default RandomPage;
