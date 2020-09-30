import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";

// import e from "express";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [tweets, setTweets] = useState(null);

  function searchTweets(event) {
    event.preventDefault();
    fetch(`/api/statuses?search_term=${searchTerm}`)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => setTweets(data));
    console.log(tweets);
  }

  function searchUsers(event) {
    event.preventDefault();
    fetch(`/api/users?search_term=${searchTerm}`)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => console.log(data));
  }

  const handleChange = (e) => setSearchTerm(e.target.value);
  // const handleChange = (e) => setTweets(e.target.value);

  return (
    // <Container>
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
            <Button
              type="submit"
              className="mr-1"
              onClick={(event) => searchTweets(event)}
            >
              Search By Content
            </Button>

            <Button type="submit" onClick={searchUsers}>
              Search By User
            </Button>
          </div>
        </div>

        <div className="tweets">
          {tweets &&
            tweets.map((tweet, index) => {
              return (
                <div className="tweet" key={index}>
                  <h3>Tweet Date</h3>
                  <h2>User Handle</h2>

                  <div className="details">
                    <p>{tweet.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </form>
    </div>
    // </Container>
  );
};

export default SearchPage;
