import React, { useState } from "react";
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import elonLogo from "./Images/elon.png";
import billLogo from "./Images/bill.png";
import jeffLogo from "./Images/jeff.png";
import lebronLogo from "./Images/lebron.png";
import kanyeLogo from "./Images/kanye.png";
import RandomUserCard from "./RandomUserCard"

const RandomPage = () => {
  const randomUsers = [
    { 
      name:"Elon Musk", 
      title:"CEO of SpaceX", 
      logo: elonLogo,
      username: "elonmusk", 
      getRandomTweet: getRandomTweet 
  },
    { 
      name:"Bill Gates", 
      title:"Business magnate", 
      logo: billLogo, 
      username: "BillGates", 
      getRandomTweet: getRandomTweet 
    },
    { 
      name:"Jeff Bezos", 
      title:"CEO of Amazon", 
      logo: jeffLogo, 
      username: "JeffBezos", 
      getRandomTweet: getRandomTweet 
    },
    { 
      name:"LeBron James", 
      title:" American basketball player", 
      logo: lebronLogo, 
      username: "KingJames", 
      getRandomTweet: getRandomTweet 
    },
    { 
      name:"Kanye West", 
      title:" American rapper", 
      logo: kanyeLogo, 
      username: "kanyewest", 
      getRandomTweet: getRandomTweet 
    },
  ];

  const [users, setUsers ] = useState(randomUsers);
  const [user, setUser]  = useState([]);
  

  async function getRandomTweet(event, username) {
    event.preventDefault();

    const data = await fetch(`/api/statuses/random?username=${username}`).then((resp) =>
      resp.json()
    );
    
    setUser([data]);
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
        {users.map((user) => {
          return (
            <div className="col-sm-4">
              <RandomUserCard 
                name={user.name} 
                title={user.title} 
                logo={user.logo} 
                username={user.username}
                getRandomTweet={user.getRandomTweet }
                />
          </div>
          );
        })}
      </div>
    </div>
  );
};
export default RandomPage;
