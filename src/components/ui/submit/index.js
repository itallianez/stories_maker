import React from "react";

import styles from './styles.module.css'

export const Submit = ({onClick, title}) => {
	return (
		<div className={styles.wrapper} onClick={onClick}>
			<span className={styles.title}>{title}</span>
		</div>
	);
}