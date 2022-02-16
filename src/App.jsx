import useLocalStorage from './hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import { InputForm } from './components/Form';
import { TodoList } from './components/List';
import './App.css';

function App() {
	const [tasks, setTasks] = useLocalStorage('todo-list-stored-tasks', []);

	function handleItemSubmit(value) {
		const task = {
			key: uuidv4(),
			text: value,
			completed: false,
			order: tasks.length,
		};
		setTasks([...tasks, task]);
	}

	function handleItemDelete(value) {
		const i = tasks.findIndex(task => task.key === value);
		if (i < 0) return;
		tasks.splice(i, 1);
		setTasks([...tasks]);
	}

	function handleItemComplete(value) {
		const completedTask = tasks.find(task => task.key === value);
		if (!completedTask) return;
		completedTask.completed = !completedTask.completed;
		setTasks([...tasks]);
	}

	return (
		<div className="App">
			<header className="page-header">
				<h1>To Do List</h1>
			</header>
			<InputForm onSubmit={handleItemSubmit} />
			<TodoList
				tasks={tasks}
				onComplete={handleItemComplete}
				onDelete={handleItemDelete}
			/>
		</div>
	);
}

export default App;
