import React from 'react';
import DeleteButton from './DeleteButton';
import CompleteButton from './CompleteButton';
function TaskButtons({ task, onDelete, onComplete }) {
	return (
		<div className="button-container">
			<CompleteButton
				onClick={() =>
					typeof onComplete === 'function' && onComplete(task.key)
				}
			/>
			<DeleteButton
				onClick={() =>
					typeof onDelete === 'function' && onDelete(task.key)
				}
			/>
		</div>
	);
}

export default TaskButtons;
