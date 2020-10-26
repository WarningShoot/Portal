import React, { useState } from "react";
import fs from "fs";
import {
	Form,
	Card,
	Container,
	Row,
	Col,
	Button,
	OverlayTrigger,
	Popover,
} from "react-bootstrap";
import tasksJSON from "./Json/Todo.json";

const tasks = JSON.parse(tasksJSON);

const colors = ["Danger", "Warning", "Primary", "Success"];

const btnStyle = {
	margin: "10px auto",
	display: "block",
};

const Tasks = () => {
	return tasks.map((item) => (
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

const ButtonTodo = () => {
	const placement = "bottom";
	return (
		<OverlayTrigger
			trigger="click"
			placement={placement}
			overlay={
				<Popover id={`popover-positioned-${placement}`}>
					<Popover.Title as="h3">Dodaj nowego taska</Popover.Title>
					<Popover.Content>
						<TodoForm />
					</Popover.Content>
				</Popover>
			}
		>
			<Button variant="success" style={btnStyle}>
				Nowy Task
			</Button>
		</OverlayTrigger>
	);
};

const TodoForm = () => {
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [task, setTask] = useState("");
	const [importance, setImportance] = useState(2);

	const handleSubmit = (event) => {
		event.preventDefault();
		const temp = {
			id: 1,
			owner: name,
			title: title,
			task: task,
			bg: colors[importance],
		};
		tasks.unshift(temp);
	};

	const handleOnChangeName = (event) => {
		setName(event.target.value);
	};
	const handleOnChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleOnChangeTask = (event) => {
		setTask(event.target.value);
	};
	const handleOnCheckImportance = (event) => {
		setImportance(event.target.value);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="nameInput">
				<Form.Label>Imię</Form.Label>
				<Form.Control
					type="text"
					placeholder="Wprowadź imię"
					onChange={handleOnChangeName}
				></Form.Control>
			</Form.Group>
			<Form.Group controlId="titleInput">
				<Form.Label>Tytuł</Form.Label>
				<Form.Control
					type="text"
					placeholder="Wprowadź tytuł"
					onChange={handleOnChangeTitle}
				></Form.Control>
			</Form.Group>
			<Form.Group controlId="taskInput">
				<Form.Label>Task</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					placeholder="Wprowadź zadanie"
					onChange={handleOnChangeTask}
				></Form.Control>
			</Form.Group>
			<Form.Group>
				<Form.Check
					inline
					label="Ważne"
					type="radio"
					value={0}
					name="importance"
					onChange={handleOnCheckImportance}
				/>
				<Form.Check
					inline
					label="Normalne"
					type="radio"
					value={1}
					name="importance"
					onChange={handleOnCheckImportance}
					checked
				/>
				<Form.Check
					inline
					label="Mało ważne"
					type="radio"
					value={2}
					name="importance"
					onChange={handleOnCheckImportance}
				/>
			</Form.Group>
			<Button variant="success" type="submit">
				Dodaj
			</Button>
		</Form>
	);
};

const Todo = () => {
	return (
		<>
			<ButtonTodo />
			<Container fluid>
				<Row xs={1} md={2} lg={4}>
					<Tasks />
				</Row>
			</Container>
		</>
	);
};

export default Todo;
