import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";



function Cards() {
  return (
    <div className ="cards">
        <h1>Check out these Epic destination</h1>
        <div className="cards_container">
        <div className="cards_wrapper">

                <ul className ="cards_item">
                    <CardItem
                    src ="images/doctor.avif"
                    text="Find a doctor"
                    label="doctor"
                    path="/services"
                    />

                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
