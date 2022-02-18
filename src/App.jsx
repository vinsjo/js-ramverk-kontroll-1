import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './hooks';
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import './App.css';

function App() {
	const [tasks, setTasks] = useLocalStorage('todo-list-stored-tasks', []);

	const handleTaskSubmit = value => {
		if (!value || !value.trim().length) return;
		setTasks([
			...tasks,
			{
				id: uuidv4(),
				text: value,
				completed: false,
			},
		]);
	};

	const handleTaskDelete = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	const handleTaskComplete = id => {
		setTasks(
			tasks.map(task => {
				return task.id === id
					? { ...task, completed: !task.completed }
					: task;
			})
		);
	};

	return (
		<div className="App">
			<Header title="To-do List" />
			<TaskForm onSubmit={handleTaskSubmit} />
			<TodoList
				tasks={tasks}
				onComplete={handleTaskComplete}
				onDelete={handleTaskDelete}
			/>
		</div>
	);
}

export default App;
