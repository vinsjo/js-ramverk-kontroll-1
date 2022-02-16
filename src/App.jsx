import useLocalStorage from './hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import InputForm from './components/InputForm';
import './App.css';
import TodoContainer from './components/TodoContainer';

function App() {
	const [tasks, setTasks] = useLocalStorage('todo-list-stored-tasks', []);

	function handleItemSubmit(input) {
		const task = {
			key: uuidv4(),
			text: input,
			completed: false,
			order: tasks.length + 1,
		};
		setTasks([...tasks, task]);
	}

	function handleItemDelete(e) {
		const i = tasks.findIndex(({ key }) => key === e.currentTarget.value);
		if (i < 0) return;
		tasks.splice(i, 1);
		setTasks([...tasks]);
	}

	function handleItemComplete(e) {
		const completedTask = tasks.find(
			({ key }) => key === e.currentTarget.value
		);
		if (!completedTask) return;
		completedTask.completed = !completedTask.completed;
		setTasks([...tasks]);
	}

	return (
		<div className="App">
			<header className="page-header">
				<h1>Todo List</h1>
			</header>
			<InputForm onSubmit={handleItemSubmit} />
			<TodoContainer
				tasks={tasks}
				onComplete={handleItemComplete}
				onDelete={handleItemDelete}
			/>
		</div>
	);
}

export default App;
