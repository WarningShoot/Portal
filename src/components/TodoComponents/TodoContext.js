import { createContext } from "react";

const defaultObj = {
	changeCards: () => {},
};

const TodoContext = createContext(defaultObj);

export default TodoContext;
