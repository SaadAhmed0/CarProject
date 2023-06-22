import React from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Form from '../components/Form';
import './CarFinancing.css';

function Insurence() {
  return (
    <>
      <Layout>

        <div className="fullscreen-bg">
          <Container>
            <div className='heading-car' >
              <h2  >Car Inurrence</h2>

            </div>
            <div className="car-financing">
              <Form />
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default Insurence;
