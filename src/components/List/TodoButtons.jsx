import React from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';
import { IconButton } from '../Buttons';
import styles from './TodoButtons.module.css';

function TodoButtons({ id, onDelete, onComplete }) {
	return (
		<div className={styles.container}>
			<IconButton
				icon={ImCheckmark}
				className={styles.complete}
				value={id}
				title="Complete Task"
				onClick={onComplete}
			>
				<ImCheckmark />
			</IconButton>
			<IconButton
				className={styles.delete}
				value={id}
				title="Remove Task"
				onClick={onDelete}
			>
				<ImCross />
			</IconButton>
		</div>
	);
}

export default TodoButtons;
