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

	const handleTaskDelete = key => {
		setTasks(tasks.filter(task => task.key !== key));
	};

	const handleTaskComplete = key => {
		setTasks(
			tasks.map(task => {
				return task.key === key
					? { ...task, completed: !task.completed }
					: task;
			})
		);
	};

	return (
		<div className="App">
			<Header title="Todo List" />
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
