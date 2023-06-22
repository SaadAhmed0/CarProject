// import Layout from '../components/Layout';
// import Container  from 'react-bootstrap/Container';
// function Cart() {
//     return (
//         <>
//             <Layout>
//             <Container>
//                 Shoping jkjknn 
//             </Container>
//             </Layout>
//         </>
//     );
// }

// export default Cart;


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
