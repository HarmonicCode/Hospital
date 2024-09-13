import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
        <h1>Specialities</h1>
        <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_items">
                    <CardItem 
                    src ="images/orthopedics.jpg" 
                    text ="Orthopedics"
                    path="/services"
                    />
                    <CardItem 
                    src ="images/physician.jpg" 
                    text ="General Physician"
                    path="/services"
                    />
                    <CardItem 
                    src ="images/dentist.jpg" 
                    text ="Dentist"
                    path="/services"
                    />
                    <CardItem 
                    src ="images/gynecologist.jpg" 
                    text ="Gynecologist"
                    path="/services"
                    />
                    <CardItem 
                    src ="images/surgeon.jpg" 
                    text ="Surgeon"
                    path="/services"
                    />
                    <CardItem 
                    src ="images/Physiotherapist.png" 
                    text ="Physiotherapist"
                    path="/services"
                    />
                    <CardItem 
                    src ="images/nutritionist.jpg" 
                    text ="Nutritionist"
                    path="/services"
                    />
                </ul>
            </div>
        </div>

      
    </div>
  )
}

export default Cards
