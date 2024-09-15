import React from "react";
import "./Feature.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feature({ iconSrc, title, description, linkText }) {
  return (
    <div className="feature">
      <img src={iconSrc} alt={title} className="feature_icon" />
      <h3 className="feature_title">{title}</h3>
      <p className="feature_description">{description}</p>
      <a href="#" className="feature_link">{linkText}</a>
    </div>
  );
}

export default Feature;
