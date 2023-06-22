import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Section from '../components/Section';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Form from '../components/Form';
function Home() {
    return (
        <>
            <Layout>
                <Container>
                    <section>
                        <Section />
                        <Section2 />
                        <Section3 />
                    </section>
                </Container>
            </Layout>
        </>
    );
}

export default Home;


// import React from 'react';
// import Layout from '../components/Layout';
// import Container from 'react-bootstrap/Container';
// import Form from '../components/Form';
// import './CarFinancing.css';

// function Insurence() {
//   return (
//     <>
//       <Layout>
//         <div className="fullscreen-bg">
//           <Container>
//             <div className="car-financing">
//               <Form />
//             </div>
//           </Container>
//         </div>
//       </Layout>
//     </>
//   );
// }

// export default Insurence;
