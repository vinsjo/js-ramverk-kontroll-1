import React from 'react';

function Button({ className, text, value, onClick, type = 'button' }) {
	return (
		<button
			className={className || ''}
			type={type}
			value={value || text}
			onClick={e => typeof onClick === 'function' && onClick(e)}
		>
			{text}
		</button>
	);
}

export default Button;
