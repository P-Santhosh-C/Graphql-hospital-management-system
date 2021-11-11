import { Route as Router, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";

export default function App() {
  const navstyle = {
    padding: 10,
    margin: "auto",
    fontSize: "x-large",
  };

  return (
    <div style={{ padding: "5px 0 25px 0" }}>
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="primary"
          className="shadow"
        >
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link style={navstyle} as={Link} to="/addPatient">
                  AddPatient
                </Nav.Link>
                |
                <Nav.Link style={navstyle} as={Link} to="/addDoctor">
                  AddDoctor
                </Nav.Link>
                |
                <Nav.Link style={navstyle} as={Link} to="/bookAppointment">
                  Book Appointment
                </Nav.Link>
                |
                <Nav.Link style={navstyle} as={Link} to="/viewDoctor">
                  View Doctor
                </Nav.Link>
                |
                <Nav.Link style={navstyle} as={Link} to="/viewPatient">
                  View Patient
                </Nav.Link>
                |
                <Nav.Link style={navstyle} as={Link} to="/viewAppointment">
                  View Appointment
                </Nav.Link>
                |
                <Nav.Link style={navstyle} as={Link} to="/validation">
                  View
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </div>
  );
}
