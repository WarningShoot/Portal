import React from "react";
import { Form, Card, Container, Row, Col } from "react-bootstrap";
import tasks from "./Json/Todo.json";

const colors = [
	"Primary",
	"Secondary",
	"Success",
	"Danger",
	"Warning",
	"Info",
	"Light",
	"Dark",
];

const Tasks = () => {
	return tasks.map((item) => (
		<Col>
			<Card
				bg={item.bg.toLowerCase()}
				key={item.id}
				text={item.bg.toLowerCase() === "light" ? "dark" : "white"}
				style={{ marginTop: "10px" }}
				className="mb-2"
			>
				<Card.Header>{item.owner}</Card.Header>
				<Card.Body>
					<Card.Title>{item.title}</Card.Title>
					<Card.Text>{item.task}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	));
};

const Todo = () => {
	return (
		<Container fluid>
			<Row xs={1} md={2} lg={4}>
				<Tasks />
			</Row>
		</Container>
	);
};

export default Todo;
