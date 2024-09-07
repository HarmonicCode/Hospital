import React from "react";
import { Button } from './Button';
import "./IntroSection.css";




function IntroSection(){
    return(
        <div className="Intro-container">
            <img src={process.env.PUBLIC_URL + "/images/slider-img.jpg"} alt="slider" />
            <h1>Medscraft Healthcare</h1>
            <p>At Medscraft Healthcare, we envision a healthier, more equitable society where everyone has access to essential healthcare. We strive to set new standards for affordability and excellence, inspiring others to join us in our mission of making healthcare accessible to all.</p>
            <div className ="Intro-btns">
                <Button className ="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Book Appointment
                </Button>
                <Button className ="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Book Appointment
                </Button>
            </div>
        </div>
        

    );
}

export default IntroSection;
