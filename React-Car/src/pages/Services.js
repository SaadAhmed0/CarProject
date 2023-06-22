// import Layout from '../components/Layout';
// import Container  from 'react-bootstrap/Container';
// function Services() {
//     return (
//         <>
//             <Layout>
//             <Container>
//                 Services
//             </Container>
//             </Layout>
//         </>
//     );
// }

// export default Services;

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
