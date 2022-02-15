import useLocalStorage from './hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import TaskButtons from './components/TaskButtons';
import InputForm from './components/InputForm';
import './App.css';

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
	function handleItemDelete(key) {
		const i = tasks.findIndex(task => task.key === key);
		if (i < 0) return;
		tasks.splice(i, 1);
		setTasks([...tasks]);
	}

	function handleItemComplete(key) {
		const completedTask = tasks.find(task => task.key === key);
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
			<ul className="todo-list">
				{tasks
					.sort((a, b) => a.order - b.order)
					.map(({ key, text, completed }) => {
						return (
							<li
								key={key}
								className={`task${
									completed ? ' completed' : ''
								}`}
							>
								<p className="text">{text}</p>
								<TaskButtons
									task={{ key }}
									onComplete={handleItemComplete}
									onDelete={handleItemDelete}
								/>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default App;
