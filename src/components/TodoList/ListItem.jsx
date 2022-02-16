import React from 'react';
import { classNames } from '../../utils';
import Buttons from './Buttons';
import styles from './ListItem.module.css';

function ListItem({ task, onComplete, onDelete }) {
	return (
		<li
			className={classNames(
				styles.task,
				task.completed ? styles.completed : null
			)}
		>
			<span className={styles.title}>{task.text}</span>
			<Buttons task={task} onComplete={onComplete} onDelete={onDelete} />
		</li>
	);
}

export default ListItem;
