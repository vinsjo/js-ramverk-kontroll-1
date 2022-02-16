import React from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';
import { IconButton, CheckButton } from '../Buttons';
import styles from './TodoButtons.module.css';

function TodoButtons({ task, onDelete, onComplete }) {
	return (
		<div className={styles.container}>
			{/* <IconButton
				className={styles.complete}
				value={task.key}
				title="Complete Task"
				onClick={onComplete}
			>
				<ImCheckmark />
			</IconButton> */}
			<CheckButton
				checked={task.completed}
				className={styles.complete}
				value={task.key}
				title="Complete Task"
				onClick={onComplete}
			/>
			<IconButton
				className={styles.delete}
				value={task.key}
				title="Remove Task"
				onClick={onDelete}
			>
				<ImCross />
			</IconButton>
		</div>
	);
}

export default TodoButtons;
