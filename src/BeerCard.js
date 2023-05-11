import React, { useState } from "react";

function BeerCard(props) {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <li style={{ listStyle: "none" }}>
      <br></br>
      <br></br>
      <img
        style={{ height: "200px", marginTop: "70px" }}
        src={props.image_url}
        alt="beer logos"
      ></img>
      <h3>{props.name}</h3>
      <h4>{props.tagline}</h4>

      <p>
        <span>ABV: {props.abv}</span>
        <br></br>
        <br></br>
        <span style={{ margin: "70px" }}>
          {" "}
          Description: {props.description}
        </span>
        <br></br>
      </p>
      <br></br>
      <button onClick={handleLike}>{liked ? "Liked" : "Click to Like"}</button>
    </li>
  );
}

export default BeerCard;
