import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import ButtonTodo from "./TodoComponents/ButtonTodo";
import TodoContext from "./TodoComponents/TodoContext";
import tasksJSON from "./Json/Todo.json";

const tasks = [...tasksJSON];

const makeCards = (obj) => {
	return obj.map((item) => (
		<Col key={item.id}>
			<Card
				bg={item.bg.toLowerCase()}
				text={item.bg.toLowerCase() === "light" ? "dark" : "white"}
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
	const [cards, setCards] = useState(tasks);

	const changeCards = (obj) =>
		setCards((prev) => {
			prev.unshift(obj);
			return prev;
		});

	return (
		<TodoContext.Provider value={changeCards}>
			<ButtonTodo />
			<Container fluid>
				<Row xs={1} md={2} lg={4}>
					{makeCards(cards)}
				</Row>
			</Container>
		</TodoContext.Provider>
	);
};

export default Todo;
