import React from 'react';
import { classNames } from '../../utils';
import TodoButtons from './TodoButtons';
import styles from './TodoList.module.css';

function TodoList({ tasks, onComplete, onDelete }) {
	return (
		<ul className={styles.list}>
			{tasks
				.sort((a, b) => a.order - b.order)
				.map(({ key, text, completed }) => {
					return (
						<li
							key={key}
							className={classNames(
								styles['list-item'],
								completed ? styles.completed : null
							)}
						>
							<span className={styles['task-title']}>{text}</span>
							<TodoButtons
								id={key}
								onComplete={onComplete}
								onDelete={onDelete}
							/>
						</li>
					);
				})}
		</ul>
	);
}

export default TodoList;
