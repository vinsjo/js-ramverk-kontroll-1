import React from 'react';
import Button from './Button';
function CompleteButton({ value, onClick }) {
	return (
		<Button
			className="complete"
			value={value || 'complete'}
			text="✓"
			onClick={onClick}
		/>
	);
}

export default CompleteButton;
