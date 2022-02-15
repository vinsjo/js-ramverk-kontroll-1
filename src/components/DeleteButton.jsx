import React from 'react';
import Button from './Button';
function DeleteButton({ value, onClick }) {
	return (
		<Button
			className="delete"
			value={value || 'delete'}
			text="✕"
			onClick={onClick}
		/>
	);
}

export default DeleteButton;
