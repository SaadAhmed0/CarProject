// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { BsPersonCircle, BsFillHeartFill, BsFillBagFill, BsSearch } from 'react-icons/bs';

// import './Header.scss';

// function Header() {
//   // Custom names for the navbar
//   const names = ['Car Valuation', 'Car Insurence', 'Car Financing', 'Car Wash', 'Car Detailing', 'Home Based Services'];

//   return (
//     <Navbar className='footer' bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#">Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="m-auto justify-content-center"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             {names.map((name) => (
//               <Nav.Link className="menu-item" key={name} href="#">
//                 {name}
//               </Nav.Link>
//             ))}
//           </Nav>
//           <div>
//             <div className="search-box">
//               <input type="text" placeholder="What are you looking for?" />
//               <BsSearch className="search-icon" />
//               {/* <BsPersonCircle /> */}
//               {/* <BsFillHeartFill />
//               <BsFillBagFill /> */}
//             </div>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;



// Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { BsPersonCircle, BsFillHeartFill, BsFillBagFill, BsSearch } from 'react-icons/bs';

// function Header() {
//   const names = ['Car Valuation', 'Car Insurance', 'Car Financing', 'Car Wash', 'Car Detailing', 'Home Based Services'];

//   return (
//     <Navbar className="footer" bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="m-auto justify-content-center" style={{ maxHeight: '100px' }} navbarScroll>
//             {names.map((name) => (
//               <Nav.Link className="menu-item" key={name} as={Link} to="/">
//                 {name}
//               </Nav.Link>
//             ))}
//           </Nav>
//           <div>
//             <div className="search-box">
//               <input type="text" placeholder="What are you looking for?" />
//               <BsSearch className="search-icon" />
//               {/* <BsPersonCircle />
//               <BsFillHeartFill />
//               <BsFillBagFill /> */}
//             </div>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;


import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle, BsFillHeartFill, BsFillBagFill,BsFillBagHeartFill, BsSearch  } from 'react-icons/bs';

import Menus from '../Data/MenuData';
import './Header.scss';

function Header() {
  return (
    <Navbar className='footer' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {Menus.map((menu) => (
              <Nav.Link className="menu-item" key={menu.name} href={menu.href}>
                {menu.name}
              </Nav.Link>
            ))}
          </Nav>
          <div>
            <div className="search-box">
              <input type="text" placeholder="What are you looking for?" />
              <BsSearch className="search-icon" />
              {/* <BsPersonCircle /> */}
              {/* <BsFillHeartFill />
              <BsFillBagFill /> */}
            </div>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;