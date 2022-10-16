import React from "react";
import Avatar from "./Avatar";
import Detail from "./detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <p>{props.id}</p>
        <h2 className="name" >{props.name}</h2>
        <Avatar imgURL={props.imgURL}/>
      </div>
      <div className="bottom">
       <Detail tel={props.phone} email={props.email} />
      </div>
    </div>
  );
}

export default Card;