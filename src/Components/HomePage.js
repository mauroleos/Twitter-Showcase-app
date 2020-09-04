import React from "react";

export default function HomePage() {
  return (
    <>
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
            alt="Card header image"
            src="https://placeimg.com/640/480/nature"
          ></img>
        </div>
      </div>
    </>
  );
}
