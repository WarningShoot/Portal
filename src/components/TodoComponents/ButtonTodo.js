import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import TodoForm from "./TodoForm";

const ButtonTodo = () => {
	const btnStyle = {
		margin: "10px auto",
		display: "block",
	};
	const placement = "bottom";
	return (
		<OverlayTrigger
			trigger="click"
			placement={placement}
			overlay={
				<Popover id="buttonPopover">
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

export default ButtonTodo;
