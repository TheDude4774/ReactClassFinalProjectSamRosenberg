import React from "react";
import { Navbar, Nav, Container, Dropdown, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import kodiscabin from "../images/kodiscabin.jpg";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { CartState } from "../context/Context";

function MyNav() {
  // const {
  //   state: {cart },
  // } = Cartstate();

    return (
        <>
          <Navbar /*bg="light" variant="light"*/ style={{backgroundColor: "cadetblue", borderBottom: "2px solid silver"}}>
            <Container>
              <Navbar.Brand style={{color: "moccasin", fontSize: "5rem", fontWeight: "bold", fontFamily: 'Architects Daughter', textShadow: "2px 2px 8px darkslateblue"}} href="#home">Kodi's Cabin
                <img src={kodiscabin} alt={"Kodi"} style={{marginLeft: "1.2rem", width: "7.4rem", borderRadius: "100%", border: ".4rem solid moccasin", boxShadow: "2px 2px 8px darkslateblue"}}/>
              </Navbar.Brand>
              <Nav className="">
                <Dropdown alignmentRight>
                <Link to="/">
                  <Dropdown.Toggle variant="success">
                    <AiOutlineShoppingCart color="moccasin" fontSize="25px"/>
                    <Badge>{0}</Badge>
                    
                  </Dropdown.Toggle>
                  </Link>
                  <Dropdown.Menu style={{ minWidth: 370 }}>
                    <span style={{ paddingLeft: 50, width: "100%", textAlign: "center", color: "cadetblue"}}>Cart is Empty!</span>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Nav.Link style={{fontSize: "2rem", color: "moccasin", fontStyle: "courier new", paddingLeft: "46rem", letterSpacing: "1px", textShadow: "2px 2px 8px darkslateblue"}} href="#cart">cart</Nav.Link> */}
              </Nav>
            </Container>
          </Navbar>
        </>
    );
}

export default MyNav;
