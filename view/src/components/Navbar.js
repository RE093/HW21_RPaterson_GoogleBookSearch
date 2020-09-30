import React from 'react';

import { Nav, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <>
        <Nav>
            <Nav.Item
                className="navTitle"
            >
                <h5>
                    <img 
                        className="google-image"
                        src={require("../assets/google-image.jpg")}
                        alt="google-image"
                /> Books</h5>
            </Nav.Item>
            <Nav.Item className="search-nav">
                <Nav.Link to="/search" href="/search">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item className="saved-nav">
                <Nav.Link to="/saved" href="/saved">Saved</Nav.Link>
            </Nav.Item>
        </Nav>
        <Jumbotron className="jumbo-banner">
        <h1>(React) Google Books Search</h1>
        <h4>
          Search for and Save Books of Interest!
        </h4>
      </Jumbotron>
      </>
    );
}