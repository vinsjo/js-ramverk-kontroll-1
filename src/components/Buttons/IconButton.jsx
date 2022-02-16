import React from 'react';
import { classNames } from '../../utils';
import { GoPrimitiveDot } from 'react-icons/go';
import Button from './Button';
import styles from './IconButton.module.css';

function IconButton({
	children,
	className,
	value,
	title,
	onClick,
	type = 'button',
}) {
	return (
		<Button
			className={classNames(styles.button, className)}
			value={value}
			title={title}
			type={type}
			onClick={onClick}
		>
			{children ? children : <GoPrimitiveDot className={styles.icon} />}
		</Button>
	);
}

export default IconButton;
