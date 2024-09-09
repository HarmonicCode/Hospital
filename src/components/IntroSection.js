import React from "react";
import { Button } from './Button';  // Correct path for Button.js in the same folder
import "./IntroSection.css";  // Correct path for CSS file in the same folder

function IntroSection() {
    return (
        <div className="Intro-container">
            <div className="Intro-text">
                <h1>Medscraft Healthcare</h1>
                {/* Box Container for Paragraph */}
                <div className="Intro-box">
                    <p>
                        At Medscraft Healthcare, we envision a healthier, more equitable society
                        where everyone has access to essential healthcare. We strive to set new
                        standards for affordability and excellence, inspiring others to join us
                        in our mission of making healthcare accessible to all.
                    </p>
                </div>
                <div className="Intro-btns">
                    <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                        Book Appointment
                    </Button>
                </div>
            </div>
            <img
                src={process.env.PUBLIC_URL + "/images/slider-img.jpg"}
                alt="slider"
                className="Intro-image"
            />
        </div>
    );
}

export default IntroSection;

