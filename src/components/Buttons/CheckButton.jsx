import React from 'react';
import { classNames } from '../../utils';
import { ImCheckmark } from 'react-icons/im';
import IconButton from './IconButton';
import styles from './CheckButton.module.css';
import { isFn } from 'x-is-type';

function CheckButton({
	checked,
	className,
	value,
	title,
	onClick,
	type = 'button',
}) {
	return (
		<IconButton
			className={classNames(
				styles.button,
				checked ? styles.checked : null,
				className
			)}
			value={value}
			title={title}
			type={type}
			onClick={() => isFn(onClick) && onClick(value, !checked)}
		>
			<ImCheckmark className={styles.icon} />
		</IconButton>
	);
}

export default CheckButton;
