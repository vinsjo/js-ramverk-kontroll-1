import React from 'react';
import ListItem from './ListItem';
import styles from './TodoList.module.css';

function TodoList({ tasks, onComplete, onDelete }) {
	return (
		<ul className={styles.list}>
			{tasks.map(task => (
				<ListItem
					key={task.key}
					task={task}
					onComplete={onComplete}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
}

export default TodoList;
