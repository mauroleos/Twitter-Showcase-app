import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";

// import e from "express";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  this.state = {
    tweet: {},
  };

  function searchTweets(event) {
    event.preventDefault();
    fetch(`/api/statuses?search_term=${searchTerm}`)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        this.setState({
          tweet: data,
        });
      });
  }

  function searchUsers(event) {
    event.preventDefault();
    fetch(`/api/users?search_term=${searchTerm}`)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => console.log(data));
  }

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <Container>
      <div className="container" style={{ marginTop: 100 }}>
        <form>
          <div className="form-group row">
            {/* <label className="col-sm-3 col-form-label">Search By Username</label> */}
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
            <div className="btn-toolbar">
              <Button type="submit" className="mr-1" onClick={searchTweets}>
                Search By Content
              </Button>

              <Button type="submit" onClick={searchUsers}>
                Search By User
              </Button>
            </div>
          </div>
          {this.state.tweet.statuses}
          <div></div>
        </form>
      </div>
    </Container>
  );
};

export default SearchPage;

{
  /* <Card style={{ width: "18rem" }}>
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
</Card> */
}
