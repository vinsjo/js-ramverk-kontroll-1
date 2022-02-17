import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList({ tasks, onComplete, onDelete }) {
	return (
		<ul className={styles.list}>
			{tasks.map(task => (
				<TodoItem
					key={task.key}
					task={task}
					onComplete={() => onComplete(task.key)}
					onDelete={() => onDelete(task.key)}
				/>
			))}
		</ul>
	);
}

export default TodoList;
