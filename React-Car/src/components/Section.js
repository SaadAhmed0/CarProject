import React from 'react';
import './Section.css'; // Import the Section.css file

export default function Section() {
  return (
    <div>
      <section className="section-container">
      
        <img
          className="section-image"
          src="https://mytukar.com/blog/wp-content/uploads/2021/09/service.jpg"
          alt="Background"
        />
        <div className="section-content">
          <h1 className="section-text">Unlock The True Potential Of</h1>
          <h1 className="section-text"  > Your Vehicle With Our Services</h1>
          <p className="section-text"   > Get Organise. Get Buisness. Get Paid.</p>
          <p className="section-text"   >Get Back To The Work That Pays You</p>
          <button className="section-button">Get Started</button>
        </div>
      </section>
    </div>
  );
}
