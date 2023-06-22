import React from 'react';
import './Section2.css'; // Import the Section2.css file for styling
import Card from './Card';

function Section2() {
  return (
    <section className="section2-container">
      <div className="card-container">
        <Card
          image="https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_294,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/ba63c48ff2658029e81aa57f4f144690/a0287782.jpg"
          heading="Card Heading"
          description="Card Description"
          link="https://example.com"
        />

        <Card
          image="https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_294,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/ba63c48ff2658029e81aa57f4f144690/a0287782.jpg"
          heading="Card Heading"
          description="Card Description"
          link="https://example.com"
        />

        <Card
          image="https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_294,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/ba63c48ff2658029e81aa57f4f144690/a0287782.jpg"
          heading="Card Heading"
          description="Card Description"
          link="https://example.com"
        />

        <Card
          image="https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_294,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/ba63c48ff2658029e81aa57f4f144690/a0287782.jpg"
          heading="Card Heading"
          description="Card Description"
          link="https://example.com"
        />

      </div>
    </section>
  );
}

export default Section2;
