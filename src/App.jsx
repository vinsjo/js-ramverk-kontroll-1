import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './hooks';
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import './App.css';

function App() {
	const [tasks, setTasks] = useLocalStorage('todo-list-stored-tasks', []);

	const handleItemSubmit = value => {
		console.log(value);
		if (!value || !value.trim().length) return;
		setTasks([
			...tasks,
			{
				key: uuidv4(),
				text: value,
				completed: false,
			},
		]);
	};

	const handleItemDelete = key => {
		setTasks(tasks.filter(task => task.key !== key));
	};

	const handleItemComplete = key => {
		const completedTask = tasks.find(task => task.key === key);
		if (!completedTask) return;
		completedTask.completed = !completedTask.completed;
		setTasks([...tasks]);
	};

	return (
		<div className="App">
			<Header title="Todo List" />
			<TaskForm onSubmit={handleItemSubmit} />
			<TodoList
				tasks={tasks}
				onComplete={handleItemComplete}
				onDelete={handleItemDelete}
			/>
		</div>
	);
}

export default App;
