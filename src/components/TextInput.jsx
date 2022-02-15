import React from 'react';

function TextInput({ value, placeholder, onChange }) {
	return (
		<input
			type="text"
			value={value}
			placeholder={placeholder || ''}
			onChange={e => typeof onChange === 'function' && onChange(e)}
		/>
	);
}

export default TextInput;
