import { useState } from 'react';
import Button from './Button';
import styles from './InputForm.module.css';

function InputForm({ onSubmit }) {
	const [input, setInput] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setInput('');
		if (typeof onSubmit !== 'function') return;
		onSubmit(input);
	}

	return (
		<form
			className={styles.form}
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<input
				className={styles.input}
				type="text"
				value={input}
				placeholder="Add task"
				onChange={e => setInput(e.target.value)}
				required={true}
			/>
			<Button type="submit" title="Add Task">
				Submit Task
			</Button>
		</form>
	);
}

export default InputForm;
