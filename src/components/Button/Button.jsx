import React from 'react';
import { classNames } from '../../utils';
import { isFn } from 'x-is-type';
import styles from './Button.module.css';

function Button({
	className,
	children,
	value,
	title,
	onClick,
	type = 'button',
}) {
	return (
		<button
			className={classNames(
				styles.button,
				className ? className : styles.default
			)}
			type={type}
			value={value}
			title={title || ''}
			onClick={e => isFn(onClick) && onClick(e)}
		>
			{children}
		</button>
	);
}

export default Button;
