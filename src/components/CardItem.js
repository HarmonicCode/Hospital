import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {  // Add 'props' here
  return (
    <>
      <li className="cards_item">
        <Link className="cards_item_link" to={props.path}>
          <figure className="cards_items_pic-wrap" data-category={props.label}>
            <img src={props.src} alt="doctor" className="cards_item_img" />
          </figure>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
