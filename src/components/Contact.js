import React from "react";
import logo2 from "../images/star.png";



export default function Contact (props){
    return (
        <div className="card1">
        <div className="card-img">
            {props.quantity && <div className="badge">{props.quantity}</div>}
          <img width="120px" src={props.logo} alt="" />
        </div>
        <div className="star">
          <img width="12px" src={logo2} alt="" />
          <span className="starpara">
            <b>{props.rating}</b> ({props.review})-{props.country}
          </span>
        </div>

        <div className="card-details">
          <p>{props.name}</p>
          <p>
            <b>From $ {props.price}</b> / person
          </p>
        </div>
      </div>
    )
}