import React from 'react';
import './Card.css'; // Import the Card.css file for styling

function Card({ image, heading, description, link }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="Card" />
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-description">{description}</p>
        <a className="card-link" href={link}>Read More</a>
      </div>
    </div>
  );
}

export default Card;
