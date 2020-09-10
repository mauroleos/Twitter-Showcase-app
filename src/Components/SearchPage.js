import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SearchPage = () => {
  const [name, setName] = useState("");

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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div class="row">
          <div className="col-sm-6 offset-sm-3">
            <Button type="submit">Search</Button>
          </div>
        </div>
      </form>
      <p>{name}</p>
    </div>
  );
};
export default SearchPage;
