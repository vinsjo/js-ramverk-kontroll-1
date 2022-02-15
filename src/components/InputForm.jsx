import { useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';

function InputForm({ onSubmit }) {
	const [input, setInput] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setInput('');
		if (typeof onSubmit !== 'function') return;
		onSubmit(input);
	}

	return (
		<form className="input-form" autoComplete="off" onSubmit={handleSubmit}>
			<TextInput value={input} onChange={e => setInput(e.target.value)} />
			<Button type="submit" text="Add" />
		</form>
	);
}

export default InputForm;
