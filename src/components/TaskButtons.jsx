import React from 'react';
import Button from './Button';
import styles from './TaskButtons.module.css';
function TaskButtons({ task, onDelete, onComplete }) {
	return (
		<div className={styles.container}>
			<Button
				className={styles.complete}
				value={task.key}
				title="Complete Task"
				onClick={onComplete}
			>
				✓
			</Button>
			<Button
				className={styles.delete}
				value={task.key}
				title="Delete Task"
				onClick={onDelete}
			>
				✕
			</Button>
		</div>
	);
}

export default TaskButtons;
