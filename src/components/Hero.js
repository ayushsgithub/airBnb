import React from "react";
import grid from "../images/grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img className="gallery" width="400px" src={grid} alt="" />
            <h1 className="heroheader">Online Experiences</h1>
            <p className="heropara">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}