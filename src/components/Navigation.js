import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => (
	<Navbar bg="dark" variant="dark">
		<Navbar.Brand as={Link} to="/">
			Navbar
		</Navbar.Brand>
		<Nav className="mr-auto">
			<Nav.Link as={Link} to="/todo">
				TODO APP
			</Nav.Link>
			<Nav.Link as={Link} to="/about">
				Features
			</Nav.Link>
		</Nav>
		<Form inline>
			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			<Button variant="outline-info">Search</Button>
		</Form>
	</Navbar>
);

export default Navigation;
