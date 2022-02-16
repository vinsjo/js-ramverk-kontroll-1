import React from 'react';
import TodoList from './TodoList';
import styles from './TodoContainer.module.css';

function TodoContainer({ tasks, onComplete, onDelete }) {
	return (
		<div className={styles.container}>
			<TodoList
				title="To Do:"
				tasks={tasks.filter(task => !task.completed)}
				onComplete={onComplete}
				onDelete={onDelete}
			/>
			<TodoList
				title="Done:"
				tasks={tasks.filter(task => task.completed)}
				onComplete={onComplete}
				onDelete={onDelete}
			/>
		</div>
	);
}

export default TodoContainer;
