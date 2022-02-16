import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './hooks';
import { TextForm } from './components/Form';
import { TodoList } from './components/List';
import { Header } from './components/Header';
import './App.css';

function App() {
	const [tasks, setTasks] = useLocalStorage('todo-list-stored-tasks', []);

	function handleItemSubmit(value) {
		if (!value || !value.trim().length) return;
		setTasks([
			...tasks,
			{
				key: uuidv4(),
				text: value,
				completed: false,
				order: tasks.length,
			},
		]);
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
			<Header title="To Do List" />
			<TextForm onSubmit={handleItemSubmit} />
			<TodoList
				tasks={tasks}
				onComplete={handleItemComplete}
				onDelete={handleItemDelete}
			/>
		</div>
	);
}

export default App;
