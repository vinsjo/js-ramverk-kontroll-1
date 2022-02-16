import React from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';
import { classNames } from '../../utils';
import Button from '../Button';
import styles from './Buttons.module.css';

function TodoButtons({ task, onDelete, onComplete }) {
	return (
		<div className={styles.container}>
			<Button
				className={classNames(
					styles.button,
					styles.complete,
					task.completed ? styles.checked : null
				)}
				value={task.key}
				title="Complete Task"
				onClick={onComplete}
			>
				<ImCheckmark className={styles.icon} />
			</Button>
			<Button
				className={classNames(styles.button, styles.delete)}
				value={task.key}
				title="Remove Task"
				onClick={onDelete}
			>
				<ImCross className={styles.icon} />
			</Button>
		</div>
	);
}

export default TodoButtons;
