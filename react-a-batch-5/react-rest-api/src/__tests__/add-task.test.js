import { fireEvent, render, screen } from "@testing-library/react";
import AddTask from "../components/task/add-task";

describe("AddTask", () => {
	it("should render correctly without crash", () => {
		const { container } = render(<AddTask />);
		expect(container).toBeInTheDocument();
	});

	it("should match with snapshots", () => {
		const { container } = render(<AddTask />);
		expect(container).toMatchSnapshot();
	});

	it('input element must has placeholder "Add Task"', () => {
		render(<AddTask />);
		const inputElement = screen.getByPlaceholderText(/add task/i);
		expect(inputElement).toHaveAttribute("placeholder", "Add task");
	});

	it('button element must has text "Add"', () => {
		render(<AddTask />);
		const buttonElement = screen.getByText(/add/i);
		expect(buttonElement).toHaveTextContent("Add");
	});

	it("should trigger input onChange correctly", () => {
		render(<AddTask />);
		const inputElement = screen.getByPlaceholderText(/add task/i);
		fireEvent.change(inputElement, { target: { value: "learn unit test" } });
		expect(inputElement).toHaveValue("learn unit test");
	});

	it("should trigger button onClick correctly", () => {
		render(<AddTask />);
		const buttonElement = screen.getByText(/add/i);
		const inputElement = screen.getByPlaceholderText(/add task/i);
		fireEvent.change(inputElement, { target: { value: "learn unit test" } });
		fireEvent.click(buttonElement);
		expect(inputElement).toHaveValue("");
	});
});
