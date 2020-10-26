import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import TodoContext from "./TodoContext";

const TodoForm = () => {
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [task, setTask] = useState("");
	const [importance, setImportance] = useState(2);

	const colors = ["danger", "warning", "primary", "success"];
	const { changeCards } = useContext(TodoContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		const temp = {
			id: 1,
			owner: name,
			title: title,
			task: task,
			bg: colors[importance],
		};

		console.log(changeCards);
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

export default TodoForm;
