import React from 'react';
import './Section3.css';

export default function Section() {
  return (
    <section className="section-container3">
      <img
        className="section-image"
        src="https://t4.ftcdn.net/jpg/04/29/48/31/360_F_429483117_5z5H31a7QSDjBptZBshmf2by62sHQrKM.jpg"
        alt="Background"
      />
      <div className="section-content">
        <div className="section-text-container">
          <h1 className="section-text">Leave The Busy Work</h1>
          <h1 className="section-text">To Work Space</h1>
          <p className="section-description">
            Get Organized. Get Business. Get Paid.
          </p>
          <p className="section-description">
            Get Back To The Work That Pays You.
          </p>
        </div>
        <div className="section-form-container">
          <input
            type="email"
            className="section-email-input"
            placeholder="Enter your email"
          />
          <button className="section-newsletter-button">Newsletter</button>
        </div>
      </div>
    </section>
  );
}



