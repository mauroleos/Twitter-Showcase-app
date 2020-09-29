import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";

// import e from "express";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function searchTweets() {
    event.preventDefault();
    fetch(`/api/statuses?search_term=${searchTerm}`)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function (data) {
        // console.log(data);
      });
  }

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <form>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Search By Username</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="tweet"
              placeholder="Search Tweets"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <Button type="submit" onClick={searchTweets}>
              Search
            </Button>
          </div>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </form>
      <p>{searchTerm}</p>
    </div>
  );
};

export default SearchPage;
