import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList({ tasks, onComplete, onDelete }) {
	return (
		<ul className={styles.list}>
			{tasks.map(task => (
				<TodoItem
					key={task.id}
					task={task}
					onComplete={() => onComplete(task.id)}
					onDelete={() => onDelete(task.id)}
				/>
			))}
		</ul>
	);
}

export default TodoList;
