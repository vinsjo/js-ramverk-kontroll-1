import React from 'react';
import TaskButtons from './TaskButtons';
import { classNames } from '../utils';
import styles from './TodoList.module.css';

function TodoList({ title, tasks, onComplete, onDelete }) {
	return !tasks || !tasks.length ? (
		''
	) : (
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>
				{tasks
					.sort((a, b) => a.order - b.order)
					.map(task => {
						const { key, text, completed } = task;
						return (
							<li
								key={key}
								className={classNames(
									styles['list-item'],
									completed ? styles.completed : null
								)}
							>
								<p className={styles['task-title']}>{text}</p>

								<TaskButtons
									task={{ key }}
									onComplete={onComplete}
									onDelete={onDelete}
								/>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default TodoList;
