import React from 'react';
import { classNames } from '../../utils';
import TodoButtons from './TodoButtons';
import styles from './TodoItem.module.css';

function TodoItem({ task, onComplete, onDelete }) {
	return (
		<li
			className={classNames(
				styles.task,
				task.completed ? styles.completed : null
			)}
		>
			<span className={styles.title}>{task.text}</span>
			<TodoButtons
				task={task}
				onComplete={onComplete}
				onDelete={onDelete}
			/>
		</li>
	);
}

export default TodoItem;
