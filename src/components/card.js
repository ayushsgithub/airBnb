import React from "react";
import Contact from "./Contact";
import Katie from "../images/zaferes.png";
import logo2 from "../images/bride.jpg"
import logo3 from "../images/Mtn.jpg"


export default function Card() {
  return (
    <div className="cards">
      <Contact name="Life lessons with Katie Zaferes" 
      logo={Katie} 
      rating={5.0}
      review={6}
      country="USA"
      price={136}
      quantity="Sold out"
      />



      <Contact name="Learn Wedding Photography"
      logo={logo2}
      rating={5.0}
      review={30}
      country="Online"
      price={116} 
      quantity="Online"/>


      <Contact name="Group Mountain Biking" 
      logo={logo3}
      rating={4.8}
      review={2}
      country="Norway"
      price={50}
      />
        
    </div>
  );
}
